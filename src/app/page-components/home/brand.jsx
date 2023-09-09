"use client";
import MKTypography from "@/components/MKTypography";
import colors from "@/theme/base/colors";

export default function Brand({ brands, title }) {
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
        {title}
      </MKTypography>
      {brands.map((brand, index) => (
        <img
          className="w-auto max-w-md max-h-28 h-auto"
          src={brand.img}
          alt={brand.alt}
          key={index}
        ></img>
      ))}
    </section>
  );
}
