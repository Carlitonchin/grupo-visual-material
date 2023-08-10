"use client";
import MKTypography from "@/components/MKTypography";
import colors from "@/theme/base/colors";
import PhotoCard from "@/components/cards/PhotoCard";

export default function Students() {
  return (
    <section className="py-10 flex flex-col justify-center items-center bg-gray-200">
      <MKTypography
        variant="h2"
        color={colors.dark.main}
        textGradient
        className="text-center w-full mb-8"
        sx={({ breakpoints, typography: { size } }) => ({
          [breakpoints.down("md")]: {
            fontSize: size["4xl"],
          },
        })}
      >
        Nossos Alunos
      </MKTypography>
      <div className="w-full h-fit flex flex-wrap gap-y-4 justify-center items-center">
        <PhotoCard />
        <PhotoCard />
        <PhotoCard />
        <PhotoCard />
        <PhotoCard />
      </div>
    </section>
  );
}
