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

export default function Footer({ faqTexts, faqs, footerInfo, links }) {
  return (
    <section
      id="footer-section"
      className="py-10 flex flex-col justify-center items-center bg-gray-900 "
    >
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
        {faqTexts.titulo}
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
        {faqTexts.descricao}
      </MKTypography>
      <Accordion faqs={faqs} />
      <div className="flex w-full flex-col items-center lg:flex-row lg:justify-center lg:gap-x-40 mt-12">
        <div className="flex flex-col gap-y-2 w-full px-4 md:px-20 lg:px-0 text-left md:text-center items-center lg:text-start lg:items-start lg:max-w-sm">
          <img
            alt={footerInfo.alt_logo}
            className="h-auto w-44"
            src={footerInfo.img_logo}
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
            {footerInfo.descricao}
          </MKTypography>
          <div className="flex flex-wrap gap-x-2 w-full justify-start md:justify-center lg:justify-start">
            {links.map((link, index) => (
              <>
                <MKTypography
                  component={Link}
                  href={link.url}
                  variant="body2"
                  color={"#fff"}
                  className=" text-white hover:text-orange-500"
                  sx={({ breakpoints, typography: { size } }) => ({
                    [breakpoints.down("md")]: {
                      fontSize: size["4xl"],
                    },
                  })}
                >
                  {link.texto}
                </MKTypography>
                {index < links.length - 1 && (
                  <span className="text-white">/</span>
                )}
              </>
            ))}
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
              {footerInfo.texto_copyright}
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
              href={`tel:${footerInfo.telefone}`}
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
                {footerInfo.telefone_formatado}
              </MKTypography>
            </a>
            <a
              href={`mailto:${footerInfo.email}`}
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
                {footerInfo.email}
              </MKTypography>
            </a>
            <a
              target="_blank"
              href={footerInfo.googlemaps_url}
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
                {footerInfo.endereco}
                <br></br>
                CNPJ: {footerInfo.cnpj}
              </MKTypography>
            </a>
          </div>
          <div className="w-full flex gap-x-4 mt-1 justify-start pl-8 md:justify-center md:pl-0 lg:justify-start items-center lg:pl-8">
            {Boolean(footerInfo?.facebook_url) && (
              <a
                target="_blank"
                href={footerInfo?.facebook_url}
                className="p-1 hover:bg-orange-500 duration-200 bg-white rounded-full"
              >
                <FacebookIcon className="w-7 h-7" />
              </a>
            )}
            {Boolean(footerInfo?.youtube_url) && (
              <a
                target="_blank"
                href={footerInfo?.youtube_url}
                className="p-1 hover:bg-orange-500 duration-200 bg-white rounded-full"
              >
                <YouTubeIcon className="w-7 h-7" />
              </a>
            )}
            {Boolean(footerInfo?.instagram_url) && (
              <a
                target="_blank"
                href={footerInfo?.instagram_url}
                className="p-1 hover:bg-orange-500 duration-200 bg-white rounded-full"
              >
                <InstagramIcon className="w-7 h-7" />
              </a>
            )}
            {Boolean(footerInfo?.linkedin_url) && (
              <a
                target="_blank"
                href={footerInfo?.linkedin_url}
                className="p-1 hover:bg-orange-500 duration-200 bg-white rounded-full"
              >
                <LinkedInIcon className="w-7 h-7" />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
