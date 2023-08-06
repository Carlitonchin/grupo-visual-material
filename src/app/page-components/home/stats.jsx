"use client";
import MKTypography from "@/components/MKTypography";
import colors from "@/theme/base/colors";

export default function Stats({ stats }) {
  return (
    <section className="py-10 bg-gray-200 flex flex-col items-center md:items-start md:flex-row gap-y-10 justify-center gap-x-16 lg:gap-x-24 xl:gap-x-32">
      {stats.map((elem) => (
        <div className="flex relative">
          <div className="w-fit text-center">
            <div className="relative w-full text-center">
              <MKTypography
                variant="h2"
                color={colors.dark.main}
                textGradient
                className="absolute "
                sx={({ breakpoints, typography: { size } }) => ({
                  [breakpoints.down("md")]: {
                    fontSize: size["6xl"],
                  },
                })}
              >
                +
              </MKTypography>
              <MKTypography
                variant="h2"
                className="ml-7"
                color={colors.dark.main}
                textGradient
                sx={({ breakpoints, typography: { size } }) => ({
                  [breakpoints.down("md")]: {
                    fontSize: size["4xl"],
                  },
                })}
              >
                {elem.count}
              </MKTypography>
            </div>

            <MKTypography variant="h4" className="text-center ml-7">
              {elem.title}
            </MKTypography>
            <MKTypography
              className="text-center ml-7"
              variant="body2"
              color="text"
            >
              {elem.description}
            </MKTypography>
          </div>
        </div>
      ))}
    </section>
  );
}
