/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// react-router components
import { Link } from "@nextui-org/link";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Collapse from "@mui/material/Collapse";
import MuiLink from "@mui/material/Link";

// Material Kit 2 React components
import MKBox from "@/components/MKBox";
import MKTypography from "@/components/MKTypography";

// Material Kit 2 React example components
import DefaultNavbarDropdown from "@/components/examples/Navbars/DefaultNavbar/DefaultNavbarDropdown";

import SearchInput from "@/components/inputs/SearchInput";
import { grey } from "@mui/material/colors";

function DefaultNavbarMobile({ routes, open, light }) {
  const [collapse, setCollapse] = useState("");

  const handleSetCollapse = (name) =>
    collapse === name ? setCollapse(false) : setCollapse(name);

  const renderNavbarItems = routes.map(
    ({
      name,
      icon,
      collapse: routeCollapses,
      href,
      route,
      collapse: navCollapse,
    }) => (
      <>
        <DefaultNavbarDropdown
          key={name}
          name={name}
          icon={icon}
          collapseStatus={name === collapse}
          onClick={() => handleSetCollapse(name)}
          href={href}
          route={route}
          light={light}
          collapse={Boolean(navCollapse)}
        >
          <MKBox
            sx={{
              height: "fit-content",
              maxHeight: "15rem",
              overflowY: "auto",
            }}
          >
            {routeCollapses &&
              routeCollapses.map((item) => (
                <MKBox key={item.name} px={2}>
                  {item.collapse ? (
                    <>
                      {item.collapse.map((el) => (
                        <a key={el.route} href={el.route}>
                          <MKTypography
                            key={el.name}
                            minWidth="11.25rem"
                            display="block"
                            variant="button"
                            color="white"
                            textTransform="capitalize"
                            fontWeight="regular"
                            py={0.625}
                            px={2}
                            sx={({
                              palette: { grey, dark },
                              borders: { borderRadius },
                            }) => ({
                              borderRadius: borderRadius.md,
                              cursor: "pointer",
                              transition: "all 300ms linear",

                              "&:hover": {
                                backgroundColor: grey[200],
                                color: dark.main,
                              },
                            })}
                          >
                            {el.name}
                          </MKTypography>
                        </a>
                      ))}
                    </>
                  ) : (
                    <MKBox
                      key={item.key}
                      display="block"
                      component={item.route ? Link : MuiLink}
                      to={item.route ? item.route : ""}
                      href={item.href ? item.href : ""}
                      target={item.href ? "_blank" : ""}
                      rel={item.href ? "noreferrer" : "noreferrer"}
                      sx={({
                        palette: { grey, dark },
                        borders: { borderRadius },
                      }) => ({
                        borderRadius: borderRadius.md,
                        cursor: "pointer",
                        transition: "all 300ms linear",
                        py: 1,
                        px: 1.625,

                        "&:hover": {
                          backgroundColor: grey[200],
                          color: dark.main,

                          "& *": {
                            color: dark.main,
                          },
                        },
                      })}
                    >
                      <MKTypography
                        display="block"
                        variant="button"
                        fontWeight="bold"
                        textTransform="capitalize"
                      >
                        {item.name}
                      </MKTypography>
                    </MKBox>
                  )}
                </MKBox>
              ))}
          </MKBox>
        </DefaultNavbarDropdown>
      </>
    )
  );

  return (
    <Collapse in={Boolean(open)} timeout="auto" unmountOnExit>
      <div className="w-full rounded-md mt-8">
        <SearchInput mobile={true} />
      </div>
      <MKBox width="calc(100% + 1.625rem)" my={2} ml={-2}>
        {renderNavbarItems}
      </MKBox>
    </Collapse>
  );
}

// Typechecking props for the DefaultNavbarMobile
DefaultNavbarMobile.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
  open: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
};

export default DefaultNavbarMobile;
