"use client";
import MKTypography from "@/components/MKTypography";

export default function TitleSingleBlog({ blog }) {
  return (
    <div
      className="h-[400px]"
      style={{
        width: "100%",
        backgroundImage: `url("${blog.img}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        textAlign: "center",
      }}
    >
      <div className="w-full px-4 h-full bg-gray-800 bg-opacity-75 bg-blur flex flex-col items-center justify-end pb-12">
        <MKTypography
          variant="h2"
          color="white"
          sx={({ breakpoints, typography: { size } }) => ({
            [breakpoints.down("md")]: {
              fontSize: size["4xl"],
            },
          })}
        >
          {blog.titulo}
        </MKTypography>
      </div>
    </div>
  );
}
