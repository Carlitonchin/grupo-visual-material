"use client";
import MKTypography from "@/components/MKTypography";
import colors from "@/theme/base/colors";
import MKButton from "@/components/MKButton";
import ListAltIcon from "@mui/icons-material/ListAlt";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useCart } from "@/app/hooks/cart";
import { useEffect, useState } from "react";
import { brlCurrencyFormatter } from "@/components/utils/conversion";
import EnrollDialog from "@/components/cart/enrollDialog";
import { useReactPixel } from "@/app/hooks/reactPixel";
import {
  activateSoundTrack,
  trackOpenEnroll,
  viewCourseDetail,
  viewVideoTrack,
} from "@/facebook-pixel/utils";

export default function SingleCourse({ course }) {
  const videoName = "curso: " + (course.text || "");
  const [fixCard, setFixCard] = useState(false);
  const [closeFooter, setCloseFooter] = useState(false);
  const [firstRender, setFirstRender] = useState(false);
  const [firstSound, setFirstSound] = useState(false);
  const [durationCaptured, setDurationCaptured] = useState(false);
  const [openEnroll, setOpenEnroll] = useState(false);
  const [firstEnroll, setFirstEnroll] = useState(false);
  const [lgWidth, setLgWidth] = useState(false);
  const { AddToCart } = useCart();
  const { reactPixel } = useReactPixel();

  const splitAbout = course.about.split("\n");
  const splitObjetive = course.objetive.split("\n");
  const splitContent = course.content.split("\n");

  useEffect(() => {
    if (!reactPixel) return;

    viewCourseDetail(reactPixel, course);
  }, [reactPixel]);

  useEffect(() => {
    function handleScroll() {
      if (!lgWidth) {
        if (fixCard) setFixCard(false);
        if (closeFooter) setCloseFooter(false);
        return;
      }
      let footer = document.getElementById("footer-section");
      const scrollY = window.scrollY;
      const footerTop = footer.offsetTop - footer.offsetHeight;
      if (scrollY - footerTop >= 80 && !closeFooter) setCloseFooter(true);
      else if (scrollY - footerTop < 80 && closeFooter) setCloseFooter(false);

      if (scrollY > 450 && !fixCard) setFixCard(true);
      else if (scrollY <= 450 && fixCard) setFixCard(false);
    }

    function handleResize() {
      const width = window.innerWidth;
      if (width >= 1024 && !lgWidth) {
        setLgWidth(true);
        setTimeout(() => handleScroll(), 200);
      } else if (width < 1024 && lgWidth) {
        setLgWidth(false);
        setTimeout(() => handleScroll(), 200);
      }
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    if (!firstRender) {
      setFirstRender(true);
      handleResize();
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  });

  function handleVolume() {
    let video = document.getElementById("single-course-video");
    if (video && !video.muted && !firstSound) {
      setFirstSound(true);
      activateSoundTrack(reactPixel, videoName);
    }
  }

  function handleTime() {
    let video = document.getElementById("single-course-video");
    if (
      video?.duration &&
      video.currentTime / video.duration > 0.9 &&
      !durationCaptured
    ) {
      setDurationCaptured(true);
      viewVideoTrack(reactPixel, videoName);
    }
  }
  return (
    <>
      <div
        className={
          "mt-20  md:mt-16 flex flex-col items-center lg:items-start lg:flex-row " +
          (fixCard && " justify-end ") +
          (fixCard && closeFooter && " relative ")
        }
      >
        <div className="w-full flex flex-col items-center lg:items-end max-w-md">
          <div
            id="card-course-price"
            className={
              "w-full flex flex-col items-center lg:items-end max-w-md lg:pr-12 mb-6 lg:mb-0" +
              (fixCard && !closeFooter && " fixed top-4 self-start ") +
              (fixCard && closeFooter && " absolute bottom-0 self-start ")
            }
          >
            {!fixCard && (
              <>
                <MKTypography
                  variant="button"
                  textTransform="uppercase"
                  sx={{
                    fontWeight: "bold",
                    color: course.category.color,
                    fontSize: "1rem",
                  }}
                >
                  {course.category.text}
                </MKTypography>

                <MKTypography
                  variant="h3"
                  color={colors.dark.main}
                  textGradient
                  className="text-center lg:text-right"
                  sx={{
                    padding: 0,
                    margin: 0,
                  }}
                >
                  {course.text}
                </MKTypography>
              </>
            )}

            <div className="w-full bg-white rounded-md shadow-lg mt-6">
              <div className="p-5 sm:p-10 flex flex-col items-start w-full">
                <div className="flex flex-col sm:flex-row w-full h-fit sm:justify-between">
                  <div className="mb-6 sm:mb-0">
                    <div className="flex items-center -mb-2">
                      <ListAltIcon
                        className="w-6 h-6 mr-1"
                        style={{ fill: course.category.color }}
                      />
                      <MKTypography
                        variant="button"
                        textTransform="uppercase"
                        color={colors.dark.main}
                        textGradient
                        sx={{
                          fontWeight: "bold",
                          fontSize: "0.9rem",
                        }}
                      >
                        Formato
                      </MKTypography>
                    </div>
                    <MKTypography
                      variant="button"
                      color={"text"}
                      sx={{
                        fontSize: "1rem",
                        marginLeft: "1.75rem",
                        marginBottom: "1rem",
                      }}
                    >
                      {course.format}
                    </MKTypography>
                  </div>

                  <div>
                    <div className="flex items-center -mb-2">
                      <WatchLaterOutlinedIcon
                        className="w-6 h-6 mr-1"
                        style={{ fill: course.category.color }}
                      />
                      <MKTypography
                        variant="button"
                        textTransform="uppercase"
                        color={colors.dark.main}
                        textGradient
                        sx={{
                          fontWeight: "bold",
                          fontSize: "0.9rem",
                        }}
                      >
                        Duração
                      </MKTypography>
                    </div>
                    <MKTypography
                      variant="button"
                      color={"text"}
                      sx={{
                        fontSize: "1rem",
                        marginLeft: "1.75rem",
                        marginBottom: "1rem",
                      }}
                    >
                      {course.duration}
                    </MKTypography>
                  </div>
                </div>
                <div className="flex items-center mt-6">
                  <WorkspacePremiumOutlinedIcon
                    className="w-6 h-6 mr-1"
                    style={{ fill: course.category.color }}
                  />
                  <MKTypography
                    variant="button"
                    textTransform="uppercase"
                    color={colors.dark.main}
                    textGradient
                    sx={{
                      fontWeight: "bold",
                      fontSize: "0.9rem",
                    }}
                  >
                    Certificação
                  </MKTypography>
                </div>
                <MKTypography
                  variant="button"
                  color={"text"}
                  sx={{
                    fontSize: "1rem",
                    marginLeft: "1.75rem",
                    marginBottom: "1rem",
                  }}
                >
                  {course.certification}
                </MKTypography>
              </div>
              <div className="w-full bg-gray-300 p-5 text-center flex flex-col items-center justify-center">
                <MKTypography
                  variant="h3"
                  color={colors.dark.main}
                  textGradient
                  sx={{ padding: 0, margin: 0 }}
                >
                  {brlCurrencyFormatter.format(course?.price || 0)}
                </MKTypography>
                <MKButton
                  variant="gradient"
                  fullWidth
                  sx={{ marginTop: "1rem" }}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    if (!firstEnroll) {
                      setFirstEnroll(true);
                      trackOpenEnroll(reactPixel, course);
                    }

                    setOpenEnroll(true);
                  }}
                  color="info"
                >
                  Matricule-se
                </MKButton>
                <MKButton
                  variant="gradient"
                  color="dark"
                  fullWidth
                  sx={{ marginTop: "0.5rem" }}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    AddToCart(course);
                  }}
                >
                  <ShoppingCartOutlinedIcon className="h-6 w-6" />
                </MKButton>
              </div>
            </div>
          </div>
        </div>
        <div
          id="info-course-container"
          className="w-full flex flex-col items-center"
          style={{ maxWidth: fixCard ? "calc(100% - 28rem)" : "100%" }}
        >
          <video
            id="single-course-video"
            style={{ width: "100%", maxWidth: "1000px" }}
            controls
            width="800"
            height="600"
            autoPlay
            muted
            onVolumeChange={handleVolume}
            onTimeUpdate={handleTime}
          >
            <source src={"/course-video.mp4"}></source>
          </video>
          <div
            className="flex flex-col"
            style={{ width: "100%", maxWidth: "1000px" }}
          >
            <MKTypography
              variant="h3"
              color={colors.dark.main}
              textGradient
              sx={{ padding: 0, marginTop: "2rem", marginBottom: "0.5rem" }}
            >
              Sobre o curso
            </MKTypography>
            <MKTypography
              variant="button"
              color={"text"}
              sx={{
                fontSize: "1rem",
              }}
            >
              {splitAbout.map((text) => {
                if (!text)
                  return (
                    <>
                      <br></br>
                      <br></br>
                    </>
                  );

                return text;
              })}
            </MKTypography>

            <MKTypography
              variant="h3"
              color={colors.dark.main}
              textGradient
              sx={{ padding: 0, marginTop: "2rem", marginBottom: "0.5rem" }}
            >
              Objetivo
            </MKTypography>
            <MKTypography
              variant="button"
              color={"text"}
              sx={{
                fontSize: "1rem",
              }}
            >
              {splitObjetive.map((text) => {
                if (!text)
                  return (
                    <>
                      <br></br>
                      <br></br>
                    </>
                  );

                return text;
              })}
            </MKTypography>

            <MKTypography
              variant="h3"
              color={colors.dark.main}
              textGradient
              sx={{ padding: 0, marginTop: "2rem", marginBottom: "0.5rem" }}
            >
              Conteúdo
            </MKTypography>
            <div className="flex gap-x-2">
              <div className="flex flex-col w-fit h-fit items-end">
                {splitContent
                  .filter((text) => Boolean(text))
                  .map((text, index) => {
                    if (!text) return <></>;

                    return (
                      <MKTypography
                        key={index}
                        variant="button"
                        color={colors.dark.main}
                        className="font-bold"
                        sx={{
                          fontSize: "1rem",
                        }}
                      >
                        {index + 1 + ". "}
                      </MKTypography>
                    );
                  })}
              </div>
              <div className="flex flex-col w-fit h-fit">
                {splitContent.map((text, index) => {
                  if (!text) return <></>;

                  return (
                    <MKTypography
                      key={index}
                      variant="button"
                      color={"text"}
                      sx={{
                        fontSize: "1rem",
                      }}
                    >
                      {text}
                    </MKTypography>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <EnrollDialog course={course} open={openEnroll} setOpen={setOpenEnroll} />
    </>
  );
}
