"use client";
import { useEffect, useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import StarCard from "@/components/cards/StarCard";
import HeaderText from "@/components/texts/header-text";
var pesquisa = false;
function resultsText(number) {
  if (number == 1) return "1 curso encontrado";

  return `${number} cursos encontrados`;
}
export default function CoursesLists({ categories, courses }) {
  const [categoriesSelected, setCategoriesSelected] = useState([]);
  const [focusInput, setFocusInput] = useState(false);
  const [searchWhileInput, setSearchWhileInput] = useState("");
  const [inputCoursesFiltered, setInputCoursesFiltered] = useState(false);
  const [searchHovered, setSearchHovered] = useState(null);
  const [search, setSearch] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([].concat(courses));

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get("search") || "";
    setSearch(searchQuery.trim());
    let input = document.getElementById("search-course");
    if (input) input.value = searchQuery.trim();
  }, []);

  useEffect(() => {
    if (!searchWhileInput.trim()) {
      setInputCoursesFiltered([]);
      return;
    }

    setInputCoursesFiltered(
      courses.filter((c) =>
        c.text
          .trim()
          .toLowerCase()
          .includes(searchWhileInput.trim().toLowerCase())
      )
    );
  }, [searchWhileInput]);

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

  useEffect(() => {
    if (!inputCoursesFiltered?.length) {
      setSearchHovered(null);
      return;
    }

    if (
      searchHovered != null &&
      !inputCoursesFiltered.find((c) => c.id == searchHovered)
    ) {
      setSearchHovered(inputCoursesFiltered[0].id);
      return;
    }
  }, [inputCoursesFiltered]);

  function moveUpDown(step) {
    if (!inputCoursesFiltered?.length) return;

    const elem = inputCoursesFiltered.find((c) => c.id == searchHovered);
    let index = inputCoursesFiltered.indexOf(elem);

    index += step;
    if (index >= 0 && index < 5 && index < inputCoursesFiltered.length)
      setSearchHovered(inputCoursesFiltered[index].id);
    else setSearchHovered(null);
  }

  function handleKey(e) {
    if (e.key == "ArrowDown") {
      e.preventDefault();
      return moveUpDown(1);
    }
    if (e.key == "ArrowUp") {
      e.preventDefault();
      return moveUpDown(-1);
    }
    if (e.key == "Enter" && searchHovered) {
      e.preventDefault();
      let course = courses.find((c) => c.id == searchHovered);
      if (course) window.location.href = "/cursos" + course.url;
    }
  }

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
      <HeaderText
        className="text-center w-full mt-4 sm:mt-0"
        font="Custom"
        variant="h2"
      >
        Nossos Cursos
      </HeaderText>
      <HeaderText
        className="text-center w-full mt-0.5 font-bold"
        font="Custom"
        variant="h5"
      >
        Filtrar por categoria
      </HeaderText>

      <div className="flex max-w-3xl mt-4 flex-wrap w-full items-center justify-center gap-x-2 gap-y-2">
        {categories.map((cat) => {
          return (
            <span
              key={cat.id}
              style={{
                color: categoriesSelected.includes(cat.id) ? "#fff" : cat.color,
                border: "2px solid " + cat.color,
                "&:hover": {
                  backgroundColor: cat.color,
                },
                backgroundColor: categoriesSelected.includes(cat.id)
                  ? cat.color
                  : "transparent",
              }}
              className={`flex items-center justify-center p-2 relative rounded-md text-base font-bold uppercase cursor-pointer hover:text-white duration-200`}
              onClick={() => handleSelectCategory(cat.id)}
            >
              <HeaderText className="text-xs" variant="span">
                {cat.text}
              </HeaderText>

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
        })}
      </div>
      <div className="w-full max-w-3xl relative">
        <form
          onSubmit={handleSearch}
          className="w-full max-w-3xl flex bg-white rounded-md shadow-sm mt-6"
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            onKeyDown={handleKey}
            className="w-full"
            autoComplete="off"
            id="search-course"
            onInput={(e) => setSearchWhileInput(e.target.value)}
            onFocus={() => setFocusInput(true)}
            onBlur={(e) => {
              handleSearch(e);
              if (
                e?.relatedTarget?.getAttribute("data-group") == "search-group"
              ) {
                return;
              }
              e.preventDefault();
              e.stopPropagation();
              setSearchHovered(null);
              setFocusInput(false);
            }}
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
        {focusInput && inputCoursesFiltered.length > 0 && (
          <div className="absolute mt-1 rounded-sm shadow-md bg-white top-full flex flex-col w-full z-30">
            {inputCoursesFiltered.map((c, index) => {
              if (index > 4) return <></>;

              return (
                <a
                  onClick={() => setFocusInput(true)}
                  data-group="search-group"
                  key={c.id}
                  href={"/cursos" + c.url}
                  className={`hover:bg-gray-200 px-4 py-2 ${
                    searchHovered == c.id && "bg-gray-300"
                  } ${
                    index == 4 ||
                    (index == inputCoursesFiltered.length - 1 && "rounded-b-sm")
                  } ${index == 0 && "rounded-t-sm"}`}
                >
                  <span className="text-base">{c.text}</span>
                </a>
              );
            })}
          </div>
        )}
      </div>
      <div className="mt-4 md:mt-10 w-full xl:w-11/12 flex justify-center flex-wrap gap-y-4 md:gap-y-8">
        <span className="text-center w-full mt-0.5">
          {resultsText(filteredCourses?.length || 0)}
        </span>
        {filteredCourses?.length > 0 &&
          filteredCourses.map((course) => {
            return (
              <StarCard
                img={course.img}
                stars={course.stars}
                category={course.category}
                text={course.text}
                url={course.url}
                key={course.id}
                price={course.price}
              />
            );
          })}
      </div>
    </div>
  );
}
