"use client";
import MKTypography from "@/components/MKTypography";
import colors from "@/theme/base/colors";
import { useEffect, useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import StarCard from "@/components/cards/StarCard";
import { useSearchParams } from "next/navigation";

var pesquisa = false;
function resultsText(number) {
  if (number == 1) return "1 curso encontrado";

  return `${number} cursos encontrados`;
}
export default function CoursesLists({ categories, courses }) {
  const [categoriesSelected, setCategoriesSelected] = useState([]);
  const [search, setSearch] = useState("");
  const params = useSearchParams();
  const [searchQuery, _] = useState(params.get("search") || "");
  const [filteredCourses, setFilteredCourses] = useState([].concat(courses));

  useEffect(() => {
    setSearch(searchQuery?.trim() || "");
    let input = document.getElementById("search-course");
    if (input) input.value = searchQuery?.trim() || "";
  }, [searchQuery]);

  useEffect(() => {
    let newCourses = courses;
    if (categoriesSelected?.length)
      newCourses = newCourses.filter((c) =>
        categoriesSelected.includes(c.category.id)
      );

    if (search?.trim()) {
      newCourses = newCourses.filter((c) =>
        c.text.trim().toLowerCase().includes(search?.trim().toLowerCase())
      );
    }

    setFilteredCourses(newCourses);
  }, [categoriesSelected, search]);
  function handleSelectCategory(id) {
    if (categoriesSelected.includes(id)) {
      setCategoriesSelected(categoriesSelected.filter((c) => c != id));
      return;
    }

    setCategoriesSelected(categoriesSelected.concat([id]));
  }

  function handleSearch(e) {
    e.preventDefault();
    e.stopPropagation();
    if (pesquisa) return;
    pesquisa = true;
    setTimeout(() => {
      pesquisa = false;
    }, 200);
    let input = document.getElementById("search-course");
    setSearch(input?.value || "");
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
      <form
        onSubmit={handleSearch}
        className="w-full max-w-3xl flex bg-white rounded-md shadow-sm mt-6"
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          className="w-full"
          id="search-course"
          onBlur={handleSearch}
          placeholder="Pesquisar"
          inputProps={{ "aria-label": "pesquisar" }}
        />
        <IconButton
          onClick={handleSearch}
          type="button"
          sx={{ p: "10px" }}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </form>

      <div className="mt-4 md:mt-10 w-full xl:w-11/12 flex justify-center flex-wrap gap-y-4 md:gap-y-8">
        <MKTypography
          variant="body1"
          textGradient
          className="text-center w-full"
          color={colors.dark.main}
          mt={0.5}
        >
          {resultsText(filteredCourses?.length || 0)}
        </MKTypography>
        {filteredCourses?.length > 0 &&
          filteredCourses.map((course) => {
            return (
              <StarCard
                img={course.img}
                stars={course.stars}
                category={course.category}
                text={course.text}
                url={course.url}
                key={Math.random()}
              />
            );
          })}
      </div>
    </div>
  );
}
