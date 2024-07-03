"use client";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

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
    <div
      my-data-aos="fade-down"
      className="w-full h-fit flex items-center justify-center flex-col"
    >
      {faqs.map((faq, index) => {
        return (
          <Accordion
            key={index}
            expanded={expanded === `panel${index + 1}`}
            onChange={handleChange(`panel${index + 1}`)}
            sx={{
              fill: "black",
              backgroundColor: "transparent",
              color: "black",
            }}
            className={` bg-transparent   w-full md:w-[80%] lg:w-[70%] xl:w-[60%] lg:text-center`}
          >
            <AccordionSummary
              className="w-full flex"
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <h4 className={" w-full text-black text-sm font-bold"}>
                {faq.pergunta}
              </h4>
            </AccordionSummary>
            <AccordionDetails className="w-full">
              <span className="text-slate-800 w-full text-left">
                {faq.resposta}
              </span>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
