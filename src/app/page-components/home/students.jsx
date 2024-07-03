"use client";
import PhotoCard from "@/components/cards/PhotoCard";
import { useState } from "react";
import { Button } from "@nextui-org/button";
import HeaderText from "@/components/texts/header-text";

export default function Students({ students, texts }) {
  const [showAll, setShowAll] = useState(false);
  return (
    <section className="py-10 flex flex-col justify-center items-center bg-gray-200">
      <div data-aos-delay="200" my-data-aos="fade-down">
        <HeaderText variant="h2" className="text-center w-full mb-8">
          {texts.titulo}
        </HeaderText>
      </div>
      <div className="w-full h-fit flex flex-wrap gap-y-4 justify-center items-center">
        {students
          .filter((_, index) => index < 4)
          .map((student, i) => (
            <PhotoCard
              index={i + 1}
              animation
              key={i}
              text={student.text}
              url={student.url}
            />
          ))}
      </div>
      {students.length > 4 && (
        <div className="mt-4 w-full h-fit flex flex-wrap gap-y-4 justify-center items-center">
          {students
            .filter((_, index) => index >= 4)
            .map((student, i) => (
              <PhotoCard
                key={i + 4}
                className={`overflow-hidden relative ${
                  showAll ? "scale-100 item-4" : "duration-500 w-0 h-0"
                }`}
                url={student.url}
                text={student.text}
              />
            ))}
        </div>
      )}
      <div my-data-aos="zoom-in">
        <Button
          onClick={() => setShowAll(!showAll)}
          className={"text-md mt-2 duration-200 text-base font-semibold"}
          variant="light"
        >
          <span>{showAll ? texts.ver_menos : texts.ver_mais}</span>
        </Button>
      </div>
    </section>
  );
}
