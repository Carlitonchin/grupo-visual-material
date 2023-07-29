// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";

// @mui icons
import SearchIcon from "@mui/icons-material/Search";

// Material Kit 2 React components
import MKInput from "@/components/MKInput";

import TextField from "@mui/material/TextField";

function InputIcon() {
  return (
    <div className="relative items-center flex ">
      <input
        placeholder="Buscar"
        type="text"
        className="rounded-md px-2 pl-8 py-1 outline-none focus:shadow-sm text-base"
      />
      <SearchIcon className="text-black absolute left-2" />
    </div>
  );
}

export default InputIcon;
