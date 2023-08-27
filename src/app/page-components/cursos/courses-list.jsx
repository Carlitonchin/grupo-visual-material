"use client";
import MKTypography from "@/components/MKTypography";
import colors from "@/theme/base/colors";
import { useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import StarCard from "@/components/cards/StarCard";

export default function CoursesLists({ categories, courses }) {
  const [categoriesSelected, setCategoriesSelected] = useState([]);

  function handleSelectCategory(id) {
    if (categoriesSelected.includes(id)) {
      setCategoriesSelected(categoriesSelected.filter((c) => c != id));
      return;
    }

    setCategoriesSelected(categoriesSelected.concat([id]));
  }
  return (
    <div className="flex flex-col justify-center items-center">
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
        Nossos Cursos
      </MKTypography>
      <MKTypography
        variant="h5"
        textGradient
        className="text-center w-full"
        color={colors.dark.main}
        mt={0.5}
      >
        Selecione um ou mais filtros abaixo:
      </MKTypography>
      <div className="flex mt-2 flex-wrap w-full items-center justify-center gap-x-2 gap-y-2">
        {categories.map((cat) => {
          return (
            <MKTypography
              key={cat.id}
              variant="button"
              sx={{
                color: categoriesSelected.includes(cat.id) ? "#fff" : cat.color,
                border: "2px solid " + cat.color,
                "&:hover": {
                  backgroundColor: cat.color,
                },
                backgroundColor: categoriesSelected.includes(cat.id)
                  ? cat.color
                  : "transparent",
              }}
              fontWeight="bold"
              className={`px-4 py-2 relative rounded-full cursor-pointer hover:text-white duration-200`}
              textTransform="uppercase"
              onClick={() => handleSelectCategory(cat.id)}
            >
              <span>{cat.text}</span>
              {categoriesSelected.includes(cat.id) && (
                <div className="absolute -top-2 -right-2 flex justify-center items-center w-6 h-6">
                  <span className="bg-white w-3 h-3 z-0 absolute"></span>
                  <CancelIcon className="w-6 h-6  fill-red-500 z-10" />
                </div>
              )}
            </MKTypography>
          );
        })}
      </div>
      <form className="w-full max-w-3xl flex bg-white rounded-md shadow-sm mt-6">
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          className="w-full"
          placeholder="Pesquisar"
          inputProps={{ "aria-label": "pesquisar" }}
        />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      </form>

      <div className="mt-4 md:mt-10 w-full xl:w-11/12 flex justify-center flex-wrap gap-y-4 md:gap-y-8">
        {courses.map((course, index) => {
          return (
            <StarCard
              className={"h-10"}
              img={course.img}
              stars={course.stars}
              category={course.category}
              text={course.text}
              url={course.url}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}
