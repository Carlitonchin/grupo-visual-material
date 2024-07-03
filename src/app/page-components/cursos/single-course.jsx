"use client";
import { Button } from "@nextui-org/button";
import ListAltIcon from "@mui/icons-material/ListAlt";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SchoolIcon from "@mui/icons-material/School";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
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
      if (Math.abs(scrollY - footerTop) <= 350 && !closeFooter)
        setCloseFooter(true);
      else if (Math.abs(scrollY - footerTop) > 350 && closeFooter)
        setCloseFooter(false);

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
                <span
                  className="uppercase text-center lg:text-right"
                  style={{
                    fontWeight: "bold",
                    color: course.category.color,
                    fontSize: "1rem",
                  }}
                >
                  {course.category.text}
                </span>

                <h3
                  className="text-center text-xl font-bold lg:text-right"
                  style={{
                    padding: 0,
                    margin: 0,
                  }}
                >
                  {course.text}
                </h3>
              </>
            )}

            <div className="w-full rounded-md shadow-lg ring-4 ring-gray-300/20  mt-6 flex flex-col">
              <div className="p-5 sm:p-10 flex flex-col items-start w-fit sm:w-full m-auto sm:m-0">
                <div className="flex flex-col sm:flex-row w-full h-fit sm:justify-between mb-6">
                  <div className="mb-6 sm:mb-0">
                    <div className="flex items-center">
                      <ListAltIcon
                        className="w-6 h-6 mr-1"
                        style={{ fill: course.category.color }}
                      />
                      <span
                        className="uppercase"
                        style={{
                          fontWeight: "bold",
                          fontSize: "0.9rem",
                          marginBottom: "2spx",
                        }}
                      >
                        Formato
                      </span>
                    </div>
                    <span
                      className="text-slate-800"
                      style={{
                        fontSize: "1rem",
                        marginLeft: "1.75rem",
                        marginBottom: "1rem",
                      }}
                    >
                      {course.format}
                    </span>
                  </div>

                  <div>
                    <div className="flex items-center">
                      <WatchLaterOutlinedIcon
                        className="w-6 h-6 mr-1"
                        style={{ fill: course.category.color }}
                      />
                      <span
                        className="uppercase"
                        style={{
                          fontWeight: "bold",
                          fontSize: "0.9rem",
                          marginBottom: "2px",
                        }}
                      >
                        Duração
                      </span>
                    </div>
                    <span
                      className="text-slate-800"
                      style={{
                        fontSize: "1rem",
                        marginLeft: "1.75rem",
                        marginBottom: "1rem",
                      }}
                    >
                      {course.duration}
                    </span>
                  </div>
                </div>

                <div className="flex items-center">
                  <HourglassBottomIcon
                    className="w-6 h-6 mr-1"
                    style={{ fill: course.category.color }}
                  />
                  <span
                    className="uppercase"
                    style={{
                      fontWeight: "bold",
                      fontSize: "0.9rem",
                      marginBottom: "2px",
                    }}
                  >
                    Carga Horária
                  </span>
                </div>
                <span
                  className="text-slate-800"
                  style={{
                    fontSize: "1rem",
                    marginLeft: "1.75rem",
                    marginBottom: "1rem",
                  }}
                >
                  {course.hours || "-"}
                </span>
                <div className="flex items-center">
                  <SchoolIcon
                    className="w-6 h-6 mr-1"
                    style={{ fill: course.category.color }}
                  />
                  <span
                    className="uppercase"
                    style={{
                      fontWeight: "bold",
                      fontSize: "0.9rem",
                      marginBottom: "2px",
                    }}
                  >
                    Nº de Aulas
                  </span>
                </div>
                <span
                  className="text-slate-800"
                  style={{
                    fontSize: "1rem",
                    marginLeft: "1.75rem",
                    marginBottom: "1rem",
                  }}
                >
                  {course.classCount || "-"}
                </span>
                <div className="flex items-center">
                  <WorkspacePremiumOutlinedIcon
                    className="w-6 h-6 mr-1"
                    style={{ fill: course.category.color }}
                  />
                  <span
                    className="uppercase"
                    style={{
                      fontWeight: "bold",
                      fontSize: "0.9rem",
                      marginBottom: "2px",
                    }}
                  >
                    Certificação
                  </span>
                </div>
                <span
                  className="text-slate-800"
                  style={{
                    fontSize: "1rem",
                    marginLeft: "1.75rem",
                    marginBottom: "1rem",
                  }}
                >
                  {course.certification}
                </span>
              </div>
              <div className="w-full bg-gray-300 py-5 px-4 text-center flex flex-col items-center justify-center rounded-b-md">
                <h3 className="mb-3">
                  {brlCurrencyFormatter.format(course?.price || 0)}
                </h3>
                <Button
                  variant="shadow"
                  className="w-full bg-blue-600 font-bold uppercase mt-1.5 text-white"
                  onClick={(e) => {
                    e.preventDefault();
                    if (!firstEnroll) {
                      setFirstEnroll(true);
                      trackOpenEnroll(reactPixel, course);
                    }

                    setOpenEnroll(true);
                  }}
                >
                  Matricule-se
                </Button>
                <Button
                  variant="shadow"
                  className="w-full bg-black mt-1"
                  onClick={(e) => {
                    e.preventDefault();
                    AddToCart(course);
                  }}
                >
                  <ShoppingCartOutlinedIcon
                    sx={{ height: "1.5rem", window: "1.5rem", fill: "white" }}
                  />
                </Button>
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
            className="rounded-md"
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
            <source src={course.video}></source>
          </video>
          <div
            className="flex flex-col"
            style={{ width: "100%", maxWidth: "1000px" }}
          >
            <h3
              style={{ padding: 0, marginTop: "2rem", marginBottom: "0.5rem" }}
            >
              Sobre o curso
            </h3>
            <span
              className="text-slate-800"
              style={{
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
            </span>

            <h3
              style={{ padding: 0, marginTop: "2rem", marginBottom: "0.5rem" }}
            >
              Objetivo
            </h3>
            <span
              className="text-slate-800"
              style={{
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
            </span>

            <h3
              style={{ padding: 0, marginTop: "2rem", marginBottom: "0.5rem" }}
            >
              Conteúdo
            </h3>
            <div className="flex gap-x-2">
              <div className="flex flex-col w-fit h-fit">
                {splitContent
                  .filter((text) => Boolean(text))
                  .map((text, index) => {
                    if (!text) return <></>;
                    let indexIfe = text.indexOf("-");
                    let beforeIfe = "";
                    if (indexIfe > -1)
                      beforeIfe = text.substring(0, indexIfe) + "- ";
                    else {
                      indexIfe = text.indexOf(":");
                      if (indexIfe > -1) {
                        beforeIfe = text.substring(0, indexIfe) + ": ";
                      }
                    }

                    let afterIfe = text.substring(indexIfe + 1, text.length);
                    return (
                      <span key={index} className="flex gap-x-2">
                        <span
                          className="text-slate-800"
                          style={{
                            fontSize: "1rem",
                          }}
                        >
                          <strong className="text-lg">{beforeIfe}</strong>
                          {afterIfe}
                        </span>
                      </span>
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
