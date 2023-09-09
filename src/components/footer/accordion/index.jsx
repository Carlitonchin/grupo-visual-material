"use client";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MKTypography from "@/components/MKTypography";
import colors from "../../../theme/base/colors";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderBottom: "1px solid rgba(187, 185, 185, 0.708);",
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem", fill: "inherit" }} />
    }
    {...props}
  />
))(({ theme }) => ({
  width: "100%",
  backgroundColor: "#00000000",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },

  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  width: "100%",
}));

export default function MyAccordion({ faqs }) {
  const [expanded, setExpanded] = useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      {faqs.map((faq, index) => {
        return (
          <Accordion
            key={index}
            expanded={expanded === `panel${index + 1}`}
            onChange={handleChange(`panel${index + 1}`)}
            className="bg-transparent  text-white w-full md:w-[80%] lg:w-[70%] xl:w-[60%] lg:text-center"
            sx={{
              fill:
                expanded === `panel${index + 1}`
                  ? colors.warning.main
                  : "white",
            }}
          >
            <AccordionSummary
              className="w-full flex"
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <MKTypography
                variant="h6"
                color={"#fff"}
                className={" w-full"}
                sx={({ breakpoints, typography: { size } }) => ({
                  [breakpoints.down("md")]: {
                    fontSize: size["4xl"],
                  },
                  color:
                    expanded == `panel${index + 1}`
                      ? colors.warning.main
                      : "white",
                })}
              >
                {faq.pergunta}
              </MKTypography>
            </AccordionSummary>
            <AccordionDetails className="w-full">
              <MKTypography
                variant="body1"
                color={"#fff"}
                className="text-white w-full text-left"
                sx={({ breakpoints, typography: { size } }) => ({
                  [breakpoints.down("md")]: {
                    fontSize: size["4xl"],
                  },
                })}
              >
                {faq.resposta}
              </MKTypography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </>
  );
}
