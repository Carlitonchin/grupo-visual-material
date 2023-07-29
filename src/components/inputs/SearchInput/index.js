import SearchIcon from "@mui/icons-material/Search";

function InputIcon({ classNameContainer, className }) {
  return (
    <div className={"relative items-center flex " + classNameContainer}>
      <input
        placeholder="Buscar"
        type="text"
        className={
          "rounded-md w-5 focus:w-full px-2 pl-8 py-1 outline-none focus:shadow-sm text-base " +
          className
        }
      />
      <SearchIcon className="text-black absolute left-2" />
    </div>
  );
}

export default InputIcon;
