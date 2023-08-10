"use client";
import MKTypography from "@/components/MKTypography";
import colors from "@/theme/base/colors";
import PhotoCard from "@/components/cards/PhotoCard";
import { useState } from "react";
import MKButton from "@/components/MKButton";

export default function Students({ students }) {
  const [showAll, setShowAll] = useState(false);
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
        {students
          .filter((_, index) => index < 4)
          .map((student) => (
            <PhotoCard text={student.text} url={student.url} />
          ))}
        {students.length > 4 &&
          students
            .filter((_, index) => index >= 4)
            .map((student) => (
              <PhotoCard
                className={`overflow-hidden relative ${
                  showAll
                    ? "scale-100 item-4 duration-200"
                    : "duration-500 w-0.5"
                }`}
                url={student.url}
                text={student.text}
              />
            ))}
      </div>
      <MKButton
        onClick={() => setShowAll(!showAll)}
        className={"text-md mt-2"}
        color="dark"
        variant="text"
        component={"button"}
      >
        <span>{showAll ? "Ver menos" : "Ver mais"}</span>
      </MKButton>
    </section>
  );
}
