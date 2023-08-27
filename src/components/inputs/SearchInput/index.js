import SearchIcon from "@mui/icons-material/Search";
import { useState, useRef, useEffect } from "react";

function InputIcon({ classNameContainer, className, mobile }) {
  const [focusInput, setFocusInput] = useState(false);
  const refInput = useRef(null);
  const refContainer = useRef(null);

  function putFocusOnInput() {
    refInput.current.focus();
  }

  function handleSubmit(e) {
    e.preventDefault();
    window.location.href = "/cursos?search=" + (refInput?.current?.value || "");
  }

  useEffect(() => {
    if (mobile) return;
    if (!refContainer?.current) return;

    if (!focusInput) {
      if (refContainer.current.classList?.contains("w-10")) return;
      refContainer.current.classList?.remove("w-72");
      refContainer.current.classList?.add("w-10");

      return;
    }

    if (refContainer.current.classList?.contains("w-72")) return;
    refContainer.current.classList?.remove("w-10");
    refContainer.current.classList?.add("w-72");
  }, [focusInput]);

  return (
    <form
      onSubmit={handleSubmit}
      ref={refContainer}
      onClick={putFocusOnInput}
      className={
        `relative items-center flex cursor-pointer transition-all duration-300 ` +
        classNameContainer
      }
    >
      <input
        ref={refInput}
        placeholder="Buscar"
        onFocus={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setFocusInput(true);
        }}
        onBlur={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setFocusInput(false);
        }}
        type="text"
        className={
          `rounded-md w-full ${
            !mobile && "cursor-pointer"
          } focus:cursor-text px-2 pl-8 py-1 outline-none focus:shadow-sm text-base ` +
          className
        }
      />
      <SearchIcon
        onClick={putFocusOnInput}
        className={`text-black w-5 h-5 absolute transition-all duration-300 left-2.5 cursor-pointer`}
      />
    </form>
  );
}

export default InputIcon;
