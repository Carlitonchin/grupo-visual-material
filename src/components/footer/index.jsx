"use client";
import MKTypography from "@/components/MKTypography";
import Accordion from "./accordion";
import Link from "next/link";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

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
            <a
              target="_blank"
              href="https://www.google.com/maps/place/R.+Ver.+Romeu+Lauro+Werlang,+1490+-+Centro,+Francisco+Beltr%C3%A3o+-+PR,+85601-020/@-26.0829216,-53.0507821,17z/data=!3m1!4b1!4m6!3m5!1s0x94f072d5daf59271:0x704a1b6e631b8bc5!8m2!3d-26.0829216!4d-53.0507821!16s%2Fg%2F11c290444j?entry=ttu"
              className="fill-white flex duration-200 text-white hover:fill-orange-500 hover:text-orange-500"
            >
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
            </a>
          </div>
          <div className="w-full flex gap-x-4 mt-1 justify-start pl-8 md:justify-center md:pl-0 lg:justify-start items-center lg:pl-8">
            <a
              href="#"
              className="p-1 hover:bg-orange-500 duration-200 bg-white rounded-full"
            >
              <FacebookIcon className="w-7 h-7" />
            </a>
            <a
              href="#"
              className="p-1 hover:bg-orange-500 duration-200 bg-white rounded-full"
            >
              <YouTubeIcon className="w-7 h-7" />
            </a>
            <a
              href="#"
              className="p-1 hover:bg-orange-500 duration-200 bg-white rounded-full"
            >
              <InstagramIcon className="w-7 h-7" />
            </a>
            <a
              href="#"
              className="p-1 hover:bg-orange-500 duration-200 bg-white rounded-full"
            >
              <LinkedInIcon className="w-7 h-7" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
