"use client";
import { useState, useEffect } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import TeacherCard from "./teacher-card";
import HeaderText from "@/components/texts/header-text";

export default function TeachersList({ categories, teachers, text }) {
  const [categoriesSelected, setCategoriesSelected] = useState([]);
  function handleSelectCategory(id) {
    if (categoriesSelected.includes(id)) {
      setCategoriesSelected(categoriesSelected.filter((c) => c != id));
      return;
    }

    setCategoriesSelected(categoriesSelected.concat([id]));
  }
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    var _isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    setIsMobile(_isMobile);
  }, []);
  return (
    <div className="z-20">
      <div className="z-20 flex mt-10 mb-4 flex-wrap w-full items-center justify-center gap-x-2 gap-y-2">
        <HeaderText
          variant="h4"
          id="text-teachers"
          className="text-center w-full mb-4 px-4 z-20 font-bold"
        >
          {text}
        </HeaderText>

        {/*categories.map((cat) => {
          return (
            <span
              key={cat.id}
              style={{
                color: categoriesSelected.includes(cat.id) ? "#fff" : cat.color,
                border: "2px solid " + cat.color,
                "&:hover": !isMobile
                  ? {
                      backgroundColor: cat.color,
                    }
                  : undefined,

                backgroundColor: categoriesSelected.includes(cat.id)
                  ? cat.color
                  : "transparent",
              }}
              fontWeight="bold"
              className={`z-20 px-4 py-2 relative uppercase text-base font-bold rounded-md cursor-pointer ${
                !isMobile && "hover:text-white"
              } duration-200`}
              textTransform="uppercase"
              onClick={(e) => {
                handleSelectCategory(cat.id);
                const text = document.getElementById("text-teachers");
                setTimeout(() => {
                  e.target.blur();
                  e.target.parentNode.blur();
                }, 500);
              }}
            >
              <HeaderText variant="span">{cat.text}</HeaderText>

              {categoriesSelected.includes(cat.id) && (
                <div className="absolute -top-2 -right-2 flex justify-center items-center w-6 h-6">
                  <span className="bg-white w-3 h-3 z-0 absolute"></span>
                  <CancelIcon
                    sx={{
                      width: "1.5rem",
                      height: "1.5rem",
                      fill: "#ef4444",
                      zIndex: "10",
                    }}
                  />
                </div>
              )}
            </span>
          );
        })*/}
      </div>
      <div className="z-20 w-full h-fit flex flex-wrap gap-y-4 justify-center items-center">
        {teachers
          .filter(
            (t) =>
              categoriesSelected.length == 0 ||
              categoriesSelected.includes(t.category.id)
          )
          .map((teacher, i) => (
            <TeacherCard
              slug={teacher.slug}
              key={teacher.id}
              text={teacher.text}
              url={teacher.url}
              title={teacher.title}
            />
          ))}
      </div>
    </div>
  );
}
