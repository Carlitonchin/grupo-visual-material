"use client";
import MKTypography from "@/components/MKTypography";
import colors from "@/theme/base/colors";
import WhoVideo from "./video";
import Service from "./service";

export default function Who({
  title,
  description,
  ourMethod,
  video,
  cardTitle,
  cards,
}) {
  return (
    <div className="bg-gray-200">
      <div
        style={{
          width: "100%",
          height: "55vh",
          minHeight: "400px",
          backgroundImage: `url("/bg1.jpeg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          textAlign: "center",
        }}
      >
        <div className="w-full px-4 h-full bg-gray-800 bg-opacity-75 bg-blur flex flex-col items-center justify-center">
          <MKTypography
            variant="h2"
            color="white"
            sx={({ breakpoints, typography: { size } }) => ({
              [breakpoints.down("md")]: {
                fontSize: size["4xl"],
              },
            })}
          >
            {title}
          </MKTypography>
        </div>
      </div>
      <WhoVideo url={video} description={description} />
      <section className=" bg-white">
        <MKTypography
          variant="h2"
          className="text-center lg:text-start"
          color={colors.dark.main}
          sx={({ breakpoints, typography: { size } }) => ({
            [breakpoints.down("md")]: {
              fontSize: size["4xl"],
            },
          })}
        >
          {cardTitle}
        </MKTypography>
        <div className="w-full mt-8 flex flex-col gap-y-20 lg:gap-y-36">
          {cards.map((card, index) => {
            return (
              <Service
                align={index % 2 == 0 ? "left" : "right"}
                alt={card.alt}
                category={card.category}
                img={card.img}
                text={card.text}
                textButton={card.textButton}
                title={card.title}
                urlButton={card.urlButton}
                externLink={card.externLink}
                key={index}
              />
            );
          })}
        </div>
      </section>
      <section className="py-8 flex flex-col gap-y-4">
        <MKTypography
          id="nosso-metodo"
          variant="h2"
          className="text-center lg:text-start"
          color={colors.dark.main}
          sx={({ breakpoints, typography: { size } }) => ({
            [breakpoints.down("md")]: {
              fontSize: size["4xl"],
            },
          })}
        >
          Nosso Metodo
        </MKTypography>

        <MKTypography
          variant="button"
          color={"text"}
          className="columns-1 md:columns-2 lg:columns-3 gap-x-20"
          sx={{ fontSize: "1.1rem" }}
        >
          {ourMethod}
        </MKTypography>
      </section>
    </div>
  );
}
