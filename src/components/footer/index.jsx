"use client";
import MKTypography from "@/components/MKTypography";
import Accordion from "./accordion";
import Link from "next/link";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Footer() {
  return (
    <section className="py-10 flex flex-col justify-center items-center bg-gray-900 ">
      <MKTypography
        variant="h2"
        color={"#fff"}
        className="text-center w-full text-white"
        sx={({ breakpoints, typography: { size } }) => ({
          [breakpoints.down("md")]: {
            fontSize: size["4xl"],
          },
        })}
      >
        FAQ
      </MKTypography>
      <MKTypography
        variant="h4"
        color={"#fff"}
        className="text-center w-full mb-8 text-white"
        sx={({ breakpoints, typography: { size } }) => ({
          [breakpoints.down("md")]: {
            fontSize: size["4xl"],
          },
        })}
      >
        Perguntas e respostas mais frequentes
      </MKTypography>
      <Accordion />
      <div className="flex w-full flex-col items-center lg:flex-row lg:justify-center lg:gap-x-40 mt-12">
        <div className="flex flex-col gap-y-2 w-full px-4 md:px-20 lg:px-0 text-left md:text-center items-center lg:text-start lg:items-start lg:max-w-sm">
          <img
            alt="Logo Grupo Visual"
            className="h-auto w-44"
            src="grupo_visual_logo.webp"
          ></img>
          <MKTypography
            variant="body2"
            color={"#fff"}
            className=" text-white "
            sx={({ breakpoints, typography: { size } }) => ({
              [breakpoints.down("md")]: {
                fontSize: size["4xl"],
              },
            })}
          >
            Uma instituição de cursos profissionalizantes reconhecida pela
            credibilidade e compromisso com a formacao profissional dos seus
            estudantes
          </MKTypography>
          <div className="flex flex-wrap gap-x-2 w-full justify-start md:justify-center lg:justify-start">
            <MKTypography
              component={Link}
              href="/cursos"
              variant="body2"
              color={"#fff"}
              className=" text-white hover:text-orange-500"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["4xl"],
                },
              })}
            >
              Cursos
            </MKTypography>
            <span className="text-white">/</span>
            <MKTypography
              component={Link}
              href="/cursos"
              variant="body2"
              color={"#fff"}
              className=" text-white hover:text-orange-500"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["4xl"],
                },
              })}
            >
              Quem Somos
            </MKTypography>
            <span className="text-white">/</span>
            <MKTypography
              component={Link}
              href="/cursos"
              variant="body2"
              color={"#fff"}
              className=" text-white hover:text-orange-500"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["4xl"],
                },
              })}
            >
              Nosso Metodo
            </MKTypography>
            <span className="text-white">/</span>
            <MKTypography
              component={Link}
              href="/cursos"
              variant="body2"
              color={"#fff"}
              className=" text-white hover:text-orange-500"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["4xl"],
                },
              })}
            >
              Blog
            </MKTypography>
            <span className="text-white">/</span>
            <MKTypography
              component={Link}
              href="/cursos"
              variant="body2"
              color={"#fff"}
              className=" text-white hover:text-orange-500"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["4xl"],
                },
              })}
            >
              Contato
            </MKTypography>
            <span className="text-white">/</span>
            <MKTypography
              component={Link}
              href="/cursos"
              variant="body2"
              color={"#fff"}
              className=" text-white hover:text-orange-500"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["4xl"],
                },
              })}
            >
              Professores
            </MKTypography>
          </div>
          <div className="w-full">
            <MKTypography
              variant="body2"
              color={"#fff"}
              className=" text-white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["4xl"],
                },
              })}
            >
              ©2022 Grupo Visual. Todos os direitos reservados
            </MKTypography>
          </div>
        </div>
        <div className="w-full px-0 md:px-20 lg:px-0 text-start md:text-center items-center mt-6 lg:mt-0 lg:text-start lg:items-start lg:max-w-sm flex flex-col gap-y-2">
          {/*<MKTypography
            variant="h4"
            color={"#fff"}
            className=" w-full mb-2 text-white text-center"
            sx={({ breakpoints, typography: { size } }) => ({
              [breakpoints.down("md")]: {
                fontSize: size["4xl"],
              },
            })}
          >
            Fale Conosco
          </MKTypography>*/}
          <div className="w-full flex flex-col items-start md:items-center lg:items-start gap-y-2">
            <a
              href="tel:+554630554355"
              className="fill-white duration-200 text-white hover:fill-orange-500 hover:text-orange-500"
            >
              <LocalPhoneIcon className="duration-0 w-6 h-6 fill-inherit" />
              <MKTypography
                variant="body2"
                className=" ml-2 text-inherit inline-block"
                sx={({ breakpoints, typography: { size } }) => ({
                  [breakpoints.down("md")]: {
                    fontSize: size["4xl"],
                  },
                })}
              >
                (46) 3055-4355
              </MKTypography>
            </a>
            <a
              href="mailto:visualcursosfb@gmail.com"
              className="fill-white duration-200 text-white hover:fill-orange-500 hover:text-orange-500"
            >
              <EmailIcon className="duration-0 w-6 h-6 fill-inherit" />
              <MKTypography
                variant="body2"
                className=" ml-2 text-inherit inline-block"
                sx={({ breakpoints, typography: { size } }) => ({
                  [breakpoints.down("md")]: {
                    fontSize: size["4xl"],
                  },
                })}
              >
                visualcursosfb@gmail.com
              </MKTypography>
            </a>
            <span className="fill-white text-white flex">
              <LocationOnIcon className="duration-0 w-6 h-6 fill-inherit" />
              <MKTypography
                variant="body2"
                className=" ml-2 text-inherit inline-block"
                sx={({ breakpoints, typography: { size } }) => ({
                  [breakpoints.down("md")]: {
                    fontSize: size["4xl"],
                  },
                })}
              >
                Rua Romero Lauro Werlang, N 1490 - sala 101, Francisco Beltrao -
                PR<br></br>
                CNPJ: 25.067.781/0001-62
              </MKTypography>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
