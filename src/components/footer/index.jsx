"use client";
import MKTypography from "@/components/MKTypography";
import Accordion from "./accordion";

export default function Footer() {
  return (
    <section className="py-10 flex flex-col justify-center items-center bg-gray-900 ">
      <MKTypography
        variant="h2"
        color={"#fff"}
        className="text-center w-full text-white"
        sx={({ breakpoints, typography: { size } }) => ({
          [breakpoints.down("md")]: {
            fontSize: size["4xl"],
          },
        })}
      >
        FAQ
      </MKTypography>
      <MKTypography
        variant="h4"
        color={"#fff"}
        className="text-center w-full mb-8 text-white"
        sx={({ breakpoints, typography: { size } }) => ({
          [breakpoints.down("md")]: {
            fontSize: size["4xl"],
          },
        })}
      >
        Perguntas e respostas mais frequentes
      </MKTypography>
      <Accordion />
      <div className="flex flex-col items-center lg:flex-row lg:justify-center">
        <div></div>
      </div>
    </section>
  );
}
