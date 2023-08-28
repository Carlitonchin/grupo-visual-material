"use client";
import MKTypography from "@/components/MKTypography";
import colors from "@/theme/base/colors";
import MKButton from "@/components/MKButton";
import ListAltIcon from "@mui/icons-material/ListAlt";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import { useEffect, useState } from "react";

export default function SingleCourse({ course }) {
  const [fixCard, setFixCard] = useState(false);
  const [closeFooter, setCloseFooter] = useState(false);
  const [firstRender, setFirstRender] = useState(false);
  const [lgWidth, setLgWidth] = useState(false);
  useEffect(() => {
    function handleScroll() {
      if (!lgWidth) {
        if (fixCard) setFixCard(false);
        if (closeFooter) setCloseFooter(false);
        return;
      }
      let footer = document.getElementById("footer-section");
      const scrollY = window.scrollY;
      const footerTop = footer.offsetTop - footer.offsetHeight;
      if (scrollY - footerTop >= 80 && !closeFooter) setCloseFooter(true);
      else if (scrollY - footerTop < 80 && closeFooter) setCloseFooter(false);

      if (scrollY > 450 && !fixCard) setFixCard(true);
      else if (scrollY <= 450 && fixCard) setFixCard(false);
    }

    function handleResize() {
      const width = window.innerWidth;
      if (width >= 1024 && !lgWidth) {
        setLgWidth(true);
        setTimeout(() => handleScroll(), 200);
      } else if (width < 1024 && lgWidth) {
        setLgWidth(false);
        setTimeout(() => handleScroll(), 200);
      }
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    if (!firstRender) {
      setFirstRender(true);
      handleResize();
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div
      className={
        "mt-20  md:mt-16 flex flex-col items-center lg:items-start lg:flex-row " +
        (fixCard && " justify-end ") +
        (fixCard && closeFooter && " relative ")
      }
    >
      <div className="w-full flex flex-col items-center lg:items-end max-w-md">
        <div
          id="card-course-price"
          className={
            "w-full flex flex-col items-center lg:items-end max-w-md lg:pr-12 " +
            (fixCard && !closeFooter && " fixed top-4 self-start ") +
            (fixCard && closeFooter && " absolute bottom-0 self-start ")
          }
        >
          {!fixCard && (
            <>
              <MKTypography
                variant="button"
                textTransform="uppercase"
                sx={{
                  fontWeight: "bold",
                  color: course.category.color,
                  fontSize: "1rem",
                }}
              >
                {course.category.text}
              </MKTypography>

              <MKTypography
                variant="h3"
                color={colors.dark.main}
                textGradient
                sx={{ padding: 0, margin: 0, textAlign: "right" }}
              >
                {course.text}
              </MKTypography>
            </>
          )}

          <div className="w-full bg-white rounded-md shadow-lg mt-6">
            <div className="p-10 flex flex-col items-start w-full">
              <div className="flex w-full h-fit justify-between">
                <div>
                  <div className="flex items-center -mb-2">
                    <ListAltIcon
                      className="w-6 h-6 mr-1"
                      style={{ fill: course.category.color }}
                    />
                    <MKTypography
                      variant="button"
                      textTransform="uppercase"
                      color={colors.dark.main}
                      textGradient
                      sx={{
                        fontWeight: "bold",
                        fontSize: "0.9rem",
                      }}
                    >
                      Formato
                    </MKTypography>
                  </div>
                  <MKTypography
                    variant="button"
                    color={"text"}
                    sx={{
                      fontSize: "1rem",
                      marginLeft: "1.75rem",
                      marginBottom: "1rem",
                    }}
                  >
                    Online
                  </MKTypography>
                </div>

                <div>
                  <div className="flex items-center -mb-2">
                    <WatchLaterOutlinedIcon
                      className="w-6 h-6 mr-1"
                      style={{ fill: course.category.color }}
                    />
                    <MKTypography
                      variant="button"
                      textTransform="uppercase"
                      color={colors.dark.main}
                      textGradient
                      sx={{
                        fontWeight: "bold",
                        fontSize: "0.9rem",
                      }}
                    >
                      Duração
                    </MKTypography>
                  </div>
                  <MKTypography
                    variant="button"
                    color={"text"}
                    sx={{
                      fontSize: "1rem",
                      marginLeft: "1.75rem",
                      marginBottom: "1rem",
                    }}
                  >
                    3 horas
                  </MKTypography>
                </div>
              </div>
              <div className="flex items-center mt-6">
                <WorkspacePremiumOutlinedIcon
                  className="w-6 h-6 mr-1"
                  style={{ fill: course.category.color }}
                />
                <MKTypography
                  variant="button"
                  textTransform="uppercase"
                  color={colors.dark.main}
                  textGradient
                  sx={{
                    fontWeight: "bold",
                    fontSize: "0.9rem",
                  }}
                >
                  Certificação
                </MKTypography>
              </div>
              <MKTypography
                variant="button"
                color={"text"}
                sx={{
                  fontSize: "1rem",
                  marginLeft: "1.75rem",
                  marginBottom: "1rem",
                }}
              >
                Certificado válido em todo território nacional conforme a LDBE -
                LEI DE DIRETRIZES E BASE DA EDUCAÇÃO - LEI 9.394/96.
              </MKTypography>
            </div>
            <div className="w-full bg-gray-300 p-5 text-center flex flex-col items-center justify-center">
              <MKTypography
                variant="h3"
                color={colors.dark.main}
                textGradient
                sx={{ padding: 0, margin: 0 }}
              >
                R$ 4.000,00
              </MKTypography>
              <MKButton
                variant="gradient"
                fullWidth
                sx={{ marginTop: "1rem" }}
                href="/"
                color="info"
              >
                Matricule-se
              </MKButton>
              <MKButton
                variant="gradient"
                color="dark"
                fullWidth
                sx={{ marginTop: "0.5rem" }}
                href="#"
              >
                Adicionar ao carrinho
              </MKButton>
            </div>
          </div>
        </div>
      </div>
      <div
        id="info-course-container"
        className="w-full flex flex-col items-center"
        style={{ maxWidth: fixCard ? "calc(100% - 28rem)" : "100%" }}
      >
        <video
          style={{ width: "100%", maxWidth: "1000px" }}
          controls
          width="800"
          height="600"
          autoPlay
          muted
        >
          <source src={"/course-video.mp4"}></source>
        </video>
        <div
          className="flex flex-col"
          style={{ width: "100%", maxWidth: "1000px" }}
        >
          <MKTypography
            variant="h3"
            color={colors.dark.main}
            textGradient
            sx={{ padding: 0, marginTop: "2rem", marginBottom: "0.5rem" }}
          >
            Sobre o curso
          </MKTypography>
          <MKTypography
            variant="button"
            color={"text"}
            sx={{
              fontSize: "1rem",
            }}
          >
            O auxiliar de Necropsia é o profissional responsável por auxiliar o
            Médico Legista na identificação da causa da morte, já o
            tanatopraxista trabalha junto às clínicas de tanatopraxia ou
            fenerárias auxiliando na preparação e ornamentação dos corpos.
            <br></br>
            <br></br>O Auxiliar de Necrópsia vai auxiliar na identificação do
            cadáver, na comunicação com os familiares, vai auxiliar com manuseio
            do corpo realizando os procedimentos de abertura do cadáver,
            exposição dos órgãos para identificação de lesões que possam ter
            levado o indivíduo a óbito, ou seja, é ele o responsável por fazer o
            trabalho bruto, enquanto isso o médico legista acompanha e observa
            para identificar e desvendar a causa da morte. Logo após todo
            procedimento realizado é responsabilidade do auxiliar de Necropsia
            finalizar o procedimento fechar o corpo e fazer a liberação dele
            para a funerária e familiares.
            <br></br>
            <br></br>
            Ao final do curso o estudante recebe em sua casa, dois certificados,
            o de Auxiliar de Necropsia e o de Tanatopraxia com ênfase em
            Necromaquiagem. Além do mais, nossos certificados possuem um código
            de validação em nossa matriz que realmente comprovam sua validade.
            Nossos certificados são válidos em todo território nacional conforme
            a LDBE - LEI DE DIRETRIZES E BASE DA EDUCAÇÃO - LEI 9.394/96.
            Observação: Ressaltamos que para atuação no IML e Institutos de
            Perícia, é necessário ser aprovado em concurso público.
          </MKTypography>

          <MKTypography
            variant="h3"
            color={colors.dark.main}
            textGradient
            sx={{ padding: 0, marginTop: "2rem", marginBottom: "0.5rem" }}
          >
            Objetivo
          </MKTypography>
          <MKTypography
            variant="button"
            color={"text"}
            sx={{
              fontSize: "1rem",
            }}
          >
            O objetivo do curso é preparar profissionais de acordo com as
            competências e habilidades exigidas a esse ramo. Nosso curso é para
            você que está interessado em ingressar na carreira pública via de
            concurso público, ou na área privada.
            <br></br>
            <br></br>
            Na área pública você poderá atuar dentro do IML, no IGP (Instituto
            Geral de Perícia) ou também no SVO que é o (Serviços de Verificação
            de Óbito). E na esfera privada você pode trabalhar em Funerárias;
            Crematórios; Hospitais; Clínicas de conservação e Laboratórios de
            anatomia.
          </MKTypography>

          <MKTypography
            variant="h3"
            color={colors.dark.main}
            textGradient
            sx={{ padding: 0, marginTop: "2rem", marginBottom: "0.5rem" }}
          >
            Conteúdo
          </MKTypography>
          <MKTypography
            variant="button"
            color={"text"}
            sx={{
              fontSize: "1rem",
            }}
          >
            1º Medicina Legal
          </MKTypography>
          <MKTypography
            variant="button"
            color={"text"}
            sx={{
              fontSize: "1rem",
            }}
          >
            2º Ética Bioética e Biossegurança
          </MKTypography>
          <MKTypography
            variant="button"
            color={"text"}
            sx={{
              fontSize: "1rem",
            }}
          >
            3º Anatomia e Fisiologia Humana
          </MKTypography>
          <MKTypography
            variant="button"
            color={"text"}
            sx={{
              fontSize: "1rem",
            }}
          >
            4º Tanatologia
          </MKTypography>
          <MKTypography
            variant="button"
            color={"text"}
            sx={{
              fontSize: "1rem",
            }}
          >
            5º Traumatologia Forense
          </MKTypography>
          <MKTypography
            variant="button"
            color={"text"}
            sx={{
              fontSize: "1rem",
            }}
          >
            6º Técnicas de Necropsia
          </MKTypography>
        </div>
      </div>
    </div>
  );
}
