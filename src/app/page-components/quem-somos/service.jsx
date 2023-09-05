import MKTypography from "@/components/MKTypography";
import colors from "@/theme/base/colors";
import MKButton from "@/components/MKButton";
import Link from "next/link";

export default function Service({
  align,
  img,
  alt,
  category,
  title,
  text,
  textButton,
  urlButton,
}) {
  return (
    <div
      className={
        "flex flex-col lg:flex-row w-full" +
        (align != "left" && "justify-end lg:flex-row-reverse")
      }
    >
      <img
        className="w-full lg:max-w-[500px] "
        style={{ minWidth: "500px" }}
        width={500}
        height={500}
        alt={alt}
        src={img}
      />
      <div
        className={
          "w-full lg:max-w-2xl flex flex-col " +
          (align != "left" && " lg:items-end")
        }
      >
        <div
          className={
            "flex flex-col py-2 px-4 w-full lg:max-w-md border-b-8 border-orange-500 " +
            (align != "left" && " lg:items-end")
          }
        >
          <MKTypography
            variant="button"
            color={"text"}
            sx={{ fontSize: "1.5rem" }}
          >
            {category}
          </MKTypography>
          <MKTypography
            variant="h3"
            color={colors.dark.main}
            sx={({ breakpoints, typography: { size } }) => ({
              [breakpoints.down("md")]: {
                fontSize: size["4xl"],
              },
            })}
          >
            {title}
          </MKTypography>
        </div>
        <div
          className={
            "w-full flex flex-col h-fit py-2 px-4 " +
            (align != "left" && " lg:text-right lg:items-end")
          }
        >
          <MKTypography
            variant="button"
            color={"text"}
            sx={{ fontSize: "1.1rem" }}
          >
            {text}
          </MKTypography>

          <MKButton
            className="w-full md:w-fit mt-4"
            variant="gradient"
            color="dark"
            component={Link}
            href={urlButton}
          >
            {textButton}
          </MKButton>
        </div>
      </div>
    </div>
  );
}
