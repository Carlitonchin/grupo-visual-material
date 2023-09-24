import { NavbarMenuItem } from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import SearchInput from "@/components/inputs/SearchInput";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useState } from "react";

export default function MenuMobile() {
  const [expanded, setExpanded] = useState("");
  return (
    <>
      <NavbarMenuItem className="pr-4">
        <SearchInput courses={[]} mobile={true} />
      </NavbarMenuItem>

      <NavbarMenuItem className="mt-4">
        <Link className="text-white w-full text-xl" href={"/cursos"}>
          Cursos
        </Link>
      </NavbarMenuItem>
      <NavbarMenuItem>
        <Link
          onClick={(e) => {
            e.preventDefault();
            expanded == "Sobre" ? setExpanded("") : setExpanded("Sobre");
          }}
          className="text-white w-full text-xl"
          href={"#"}
        >
          <span className="flex gap-x-2 items-center">
            <span>Sobre</span>
            {expanded == "Sobre" ? (
              <ExpandMoreIcon className="w-6 h-6 fill-white" />
            ) : (
              <ExpandLessIcon className="w-6 h-6 fill-white" />
            )}
          </span>
        </Link>

        <div
          className={`${
            expanded == "Sobre" ? "pl-2 py-1 h-fit" : "h-0 p-0"
          } flex flex-col gap-y-1 h-0 overflow-hidden`}
        >
          <Link className="text-white w-full text-lg" href={"/sobre"}>
            Sobre
          </Link>
          <Link className="text-white w-full text-lg" href={"/sobre"}>
            Sobre
          </Link>
        </div>
      </NavbarMenuItem>
      <NavbarMenuItem>
        <Link className="text-white w-full text-xl" href={"/contato"}>
          Contato
        </Link>
      </NavbarMenuItem>
      <NavbarMenuItem>
        <Link className="text-white w-full text-xl" href={"/blog"}>
          Blog
        </Link>
      </NavbarMenuItem>
    </>
  );
}
