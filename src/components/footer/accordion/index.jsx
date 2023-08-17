"use client";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
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

export default function MyAccordion() {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        className="bg-transparent  text-white w-full md:w-[80%] lg:w-[70%] xl:w-[60%] lg:text-center"
        sx={{ fill: expanded === "panel1" ? colors.warning.main : "white" }}
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
              color: expanded == "panel1" ? colors.warning.main : "white",
            })}
          >
            COMO FAÇO PARA INGRESSAR NO SETOR PÚBLICO E PRIVADO?
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
            No setor público a forma de ingressar é por meio de concurso
            público, já no setor privado por meio de entrevista de emprego.
          </MKTypography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        className="bg-transparent  text-white w-full md:w-[80%] lg:w-[70%] xl:w-[60%] lg:text-center"
        sx={{ fill: expanded === "panel2" ? colors.warning.main : "white" }}
      >
        <AccordionSummary
          className="w-full"
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <MKTypography
            variant="h6"
            color={"#fff"}
            className=" w-full"
            sx={({ breakpoints, typography: { size } }) => ({
              [breakpoints.down("md")]: {
                fontSize: size["4xl"],
              },
              color: expanded == "panel2" ? colors.warning.main : "white",
            })}
          >
            QUAL O TEMPO DE DURAÇÃO DO CURSO?
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
            O curso de Auxiliar de Necropsia com Ênfase em Necromaquiagem tem um
            carga horária de 300 horas, assistindo em média 3 aulas por semana o
            curso terá a duração de 12 meses. As aulas são objetivas com a
            duração média de 30 minutos cada.
          </MKTypography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        className="bg-transparent  text-white w-full md:w-[80%] lg:w-[70%] xl:w-[60%] lg:text-center"
        sx={{ fill: expanded === "panel3" ? colors.warning.main : "white" }}
      >
        <AccordionSummary
          className="w-full"
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <MKTypography
            variant="h6"
            color={"#fff"}
            className=" w-full"
            sx={({ breakpoints, typography: { size } }) => ({
              [breakpoints.down("md")]: {
                fontSize: size["4xl"],
              },
              color: expanded == "panel3" ? colors.warning.main : "white",
            })}
          >
            VALIDADE E RECONHECIMENTO DOS NOSSOS CERFITICADOS?
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
            Nossa Instituição tem certificação reconhecida em todo território
            nacional e é amparada pela lei dos cursos livres LDBE Nº 9.394/96
            (Lei das diretrizes e bases da educação) conforme decreto Nº
            5.154/04.
          </MKTypography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
