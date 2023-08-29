"use client";
import MKTypography from "@/components/MKTypography";
import colors from "@/theme/base/colors";

export default function Brand() {
  return (
    <section className="flex justify-center items-center flex-wrap gap-x-8 md:gap-x-12 lg:gap-x-16 xl:justify-between gap-y-4">
      <MKTypography
        variant="h2"
        color={colors.dark.main}
        textGradient
        className="text-center w-full"
        sx={({ breakpoints, typography: { size } }) => ({
          [breakpoints.down("md")]: {
            fontSize: size["4xl"],
          },
        })}
      >
        Brand Partners
      </MKTypography>
      <img
        className="w-auto max-w-md max-h-28 h-auto"
        src="logo1.png"
        alt="banco do brasil"
      ></img>
      <img
        className="w-auto max-w-md max-h-28 h-auto"
        src="logo2.png"
        alt="nubank"
      ></img>
      <img
        className="w-auto max-w-md max-h-28 h-auto"
        src="logo3.png"
        alt="nike"
      ></img>
      <img
        className="w-auto max-w-md max-h-28 h-auto"
        src="logo4.png"
        alt="microsoft"
      ></img>
      <img
        className="w-auto max-w-md max-h-28 h-auto"
        src="logo5.png"
        alt="hello"
      ></img>
      <img
        className="w-auto max-w-md max-h-28 h-auto"
        src="logo6.png"
        alt="amazon"
      ></img>
    </section>
  );
}
