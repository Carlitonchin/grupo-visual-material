"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import SearchInput from "@/components/inputs/SearchInput";
import { Button } from "@nextui-org/button";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuMobile from "./menumobile";
import { useEffect, useState } from "react";

export default function NavbarNext({
  routes,
  courses,
  urlLogo,
  altLogo,
  urlButton,
  textButton,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hideOnScroll, setHideOnScroll] = useState(true);

  /*useEffect(() => {
    setTimeout(() => {
      setHideOnScroll(!isMenuOpen);
    }, 500);
  }, [isMenuOpen]);*/
  return (
    <Navbar
      maxWidth="xl"
      isBlurred={false}
      shouldHideOnScroll={hideOnScroll}
      className={`bg-back fixed bg-opacity-90 top-0 text-white py-1 sm:py-2 h-[150px] sm:h-[80px] px-4`}
      onMenuOpenChange={(value)=>{setIsMenuOpen(value); setHideOnScroll(!value);}}
    >
      <div className="flex flex-col w-full">
        <NavbarContent className="w-full">
          <NavbarBrand>
            <a href="/">
              <img width={120} height={50} src={urlLogo} alt={altLogo} />
            </a>
          </NavbarBrand>

          <a
            href={urlButton}
            target="_blank"
            className="hidden sm:block lg:hidden"
          >
            <Button variant="shadow" className="bg-white uppercase font-bold">
              {textButton}
            </Button>
          </a>

          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            className="lg:hidden px-8"
          />
        </NavbarContent>

        <a href={urlButton} target="_blank" className="w-full sm:hidden">
          <Button
            variant="shadow"
            className="bg-white w-full uppercase font-bold"
          >
            {textButton}
          </Button>
        </a>
      </div>
      <NavbarContent className="hidden lg:flex gap-4 gap-x-8" justify="center">
        <SearchInput courses={courses} />
        {routes.map((route, index) => {
          if (!route?.collapse?.length)
            return (
              <NavbarItem key={index}>
                <Link className="text-white text-base" href={route.route}>
                  {route.name}
                </Link>
              </NavbarItem>
            );

          return (
            <Dropdown key={index}>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent text-white text-base"
                  radius="sm"
                  endContent={<ExpandMoreIcon className="w-4 h-4 fill-white" />}
                  variant="light"
                >
                  {route.name}
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="menu">
                {route.collapse[0].collapse.map((subroute, subindex) => (
                  <DropdownItem key={index + subindex + 1}>
                    <Link
                      className="text-slate-900 w-full"
                      href={subroute.route}
                    >
                      {subroute.name}
                    </Link>
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          );
        })}
      </NavbarContent>
      <a href={urlButton} target="_blank" className="hidden lg:block ml-12">
        <Button variant="shadow" className="bg-white font-bold uppercase">
          {textButton}
        </Button>
      </a>

      <div
        className={`bg-black flex flex-col gap-y-3  bg-opacity-90 fixed ${
          isMenuOpen ? "h-fit p-6 pt-2 opacity-100" : "h-0 p-0 opacity-0"
        } left-0 top-[150px] sm:top-[80px] w-screen list-none text-white overflow-hidden duration-500 ease-in-out transition-all`}
      >
        <MenuMobile courses={courses} routes={routes} />
      </div>
    </Navbar>
  );
}