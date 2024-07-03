import { NavbarMenuItem } from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import SearchInput from "@/components/inputs/SearchInput";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useState } from "react";

export default function MenuMobile({ courses, routes }) {
  const [expanded, setExpanded] = useState("");
  return (
    <>
      
        <NavbarMenuItem key="search-courses" className="pr-4 mt-4">
          <SearchInput courses={courses} mobile={true} />
        </NavbarMenuItem>
        {routes.map((route, index) => {
          if (!route?.collapse?.length)
            return (
              <NavbarMenuItem key={index} className="mt-4">
                <Link className="text-white w-full text-xl" href={route.route}>
                  {route.name}
                </Link>
              </NavbarMenuItem>
            );

          return (
            <NavbarMenuItem key={index} className="mt-4">
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  expanded == route.name
                    ? setExpanded("")
                    : setExpanded(route.name);
                }}
                className="text-white w-full text-xl"
                href={"#"}
              >
                <span className="flex gap-x-2 items-center">
                  <span>{route.name}</span>
                  {expanded == route.name ? (
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
                {route.collapse[0].collapse.map((subroute, subindex) => {
                  return (
                    <Link
                      className="text-white"
                      href={subroute.route}
                      key={subindex + index + 1}
                    >
                      {subroute.name}
                    </Link>
                  );
                })}
              </div>
            </NavbarMenuItem>
          );
        })}
      
    </>
  );
}
