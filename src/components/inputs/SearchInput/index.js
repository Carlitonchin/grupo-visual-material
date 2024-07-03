import SearchIcon from "@mui/icons-material/Search";
import { useState, useRef, useEffect } from "react";

function InputIcon({ classNameContainer, className, mobile, courses }) {
  const [focusInput, setFocusInput] = useState(false);
  const [hoverInput, setHoverInput] = useState(false);
  const refInput = useRef(null);
  const refContainer = useRef(null);
  const [search, setSearch] = useState("");
  const [coursesFiltered, setCoursesFiltered] = useState([]);
  const [searchHovered, setSearchHovered] = useState(null);

  function putFocusOnInput() {
    refInput.current.focus();
  }

  function handleSubmit(e) {
    e.preventDefault();
    window.location.href = "/cursos?search=" + (refInput?.current?.value || "");
  }

  useEffect(() => {
    if (!search.trim()) {
      setCoursesFiltered([]);
      return;
    }

    setCoursesFiltered(
      courses.filter((c) =>
        c.text.trim().toLowerCase().includes(search.trim().toLowerCase())
      )
    );
  }, [search]);

  useEffect(() => {
    if (!coursesFiltered?.length) {
      setSearchHovered(null);
      return;
    }

    if (
      searchHovered != null &&
      !coursesFiltered.find((c) => c.id == searchHovered)
    ) {
      setSearchHovered(coursesFiltered[0].id);
      return;
    }
  }, [coursesFiltered]);

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

  function moveUpDown(step) {
    if (!coursesFiltered?.length) return;

    const elem = coursesFiltered.find((c) => c.id == searchHovered);
    let index = coursesFiltered.indexOf(elem);

    index += step;
    if (index >= 0 && index < 5 && index < coursesFiltered.length)
      setSearchHovered(coursesFiltered[index].id);
    else setSearchHovered(null);
  }

  useEffect(() => {
    if (mobile) return;
    if (!refContainer?.current) return;

    if (!focusInput && !hoverInput) {
      if (refContainer.current.classList?.contains("w-10")) return;
      refContainer.current.classList?.remove("w-72");
      refContainer.current.classList?.add("w-10");

      return;
    }

    if (refContainer.current.classList?.contains("w-72")) return;
    refContainer.current.classList?.remove("w-10");
    refContainer.current.classList?.add("w-72");
  }, [focusInput, hoverInput]);

  return (
    <form
      onSubmit={handleSubmit}
      ref={refContainer}
      onClick={putFocusOnInput}
      className={
        `relative items-center flex cursor-pointer transition-all duration-300 text-black ` +
        classNameContainer
      }
    >
      <input
        ref={refInput}
        data-group="search-group"
        placeholder="Buscar"
        onMouseEnter={() => setHoverInput(true)}
        onMouseLeave={(e) => {
          if (e?.relatedTarget?.getAttribute("data-group") == "search-group") {
            return;
          }
          setHoverInput(false);
        }}
        onFocus={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setFocusInput(true);
        }}
        onBlur={(e) => {
          if (e?.relatedTarget?.getAttribute("data-group") == "search-group") {
            return;
          }
          e.preventDefault();
          e.stopPropagation();
          setSearchHovered(null);
          setFocusInput(false);
        }}
        onKeyDown={handleKey}
        onInput={(e) => setSearch(e.target.value)}
        type="text"
        className={
          `rounded-md w-full ${
            !mobile && "cursor-pointer"
          } focus:cursor-text px-2 pl-8 py-1 outline-none focus:shadow-sm text-base ` +
          className
        }
      />
      <SearchIcon
        onMouseEnter={() => setHoverInput(true)}
        onMouseLeave={(e) => {
          if (e?.relatedTarget?.getAttribute("data-group") == "search-group") {
            return;
          }
          setHoverInput(false);
        }}
        onClick={putFocusOnInput}
        className={`text-black w-5 h-5 absolute transition-all duration-300 left-2.5 cursor-pointer`}
      />
      {focusInput && coursesFiltered.length > 0 && (
        <div className="absolute z-50 mt-1 rounded-sm shadow-md bg-white top-full flex flex-col w-full">
          {coursesFiltered.map((c, index) => {
            if (index > 4) return <></>;

            return (
              <a
                onClick={() => setFocusInput(true)}
                data-group="search-group"
                key={c.id}
                href={"/cursos" + c.url}
                className={`hover:bg-gray-300 px-4 py-2 ${
                  searchHovered == c.id && "bg-gray-300"
                } ${
                  index == 4 ||
                  (index == coursesFiltered.length - 1 && "rounded-b-sm")
                } ${index == 0 && "rounded-t-sm"}`}
              >
                <span>{c.text}</span>
              </a>
            );
          })}
        </div>
      )}
    </form>
  );
}

export default InputIcon;
