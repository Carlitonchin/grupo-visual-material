"use client";
import Accordion from "./accordion";
import { Link } from "@nextui-org/link";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer({ footerInfo, links }) {
  return (
    <section
      id="footer-section"
      className="py-8 flex flex-col justify-center items-center bg-back"
    >
      <div className="flex w-full flex-col items-center lg:flex-row lg:justify-between xl:justify-center xl:gap-x-36 lg:items-end">
        <div className="w-full max-w-md lg:max-w-sm flex flex-col gap-y-2 text-left md:text-center items-center lg:text-start lg:items-start ">
          <img
            alt={footerInfo.alt_logo}
            className="h-auto w-44"
            src={footerInfo.img_logo}
          ></img>
          <span className=" text-white ">{footerInfo.descricao}</span>

          <div className="w-full">
            <span className=" text-white">{footerInfo.texto_copyright}</span>
          </div>
        </div>
        <div className="w-fit max-w-md lg:max-w-sm flex flex-row lg:flex-col flex-wrap mt-6 lg:mt-0 gap-y-1 gap-x-2 items-center justify-start md:justify-center lg:justify-start">
          {links.map((link, index) => (
            <div key={index} className="text-start w-fit lg:w-full">
              <Link href={link.url} className=" text-white hover:text-main">
                {link.texto}
              </Link>
              {index < links.length - 1 && (
                <span className="lg:hidden text-white">{" / "}</span>
              )}
            </div>
          ))}
        </div>
        <div className="w-full max-w-md lg:max-w-xs xl:max-w-sm text-start md:text-center items-center mt-6 lg:mt-0 lg:text-start lg:items-start flex flex-col gap-y-2">
          <div className="w-full flex flex-col items-start md:items-center lg:items-start gap-y-2">
            <a
              href={`tel:${footerInfo.telefone}`}
              className="fill-white duration-200 text-white hover:fill-main hover:text-main"
            >
              <LocalPhoneIcon className="duration-0 w-6 h-6 fill-inherit" />
              <span className=" ml-2 text-inherit inline-block">
                {footerInfo.telefone_formatado}
              </span>
            </a>
            <a
              href={`mailto:${footerInfo.email}`}
              className="fill-white duration-200 text-white hover:fill-main hover:text-main"
            >
              <EmailIcon className="duration-0 w-6 h-6 fill-inherit" />
              <span className=" ml-2 text-inherit inline-block">
                {footerInfo.email}
              </span>
            </a>
            <a
              target="_blank"
              href={footerInfo.googlemaps_url}
              className="fill-white flex duration-200 text-white hover:fill-main hover:text-main"
            >
              <LocationOnIcon className="duration-0 w-6 h-6 fill-inherit" />
              <span className=" ml-2 text-inherit inline-block">
                {footerInfo.endereco}
                <br></br>
                CNPJ: {footerInfo.cnpj}
              </span>
            </a>
          </div>
          <div className="w-full flex gap-x-4 mt-1 justify-start pl-8 md:justify-center md:pl-0 lg:justify-start items-center lg:pl-8">
            {Boolean(footerInfo?.facebook_url) && (
              <a
                target="_blank"
                aria-label="Facebook Grupo Visual"
                href={footerInfo?.facebook_url}
                className="p-1 hover:bg-main duration-200 bg-white rounded-full"
              >
                <FacebookIcon className="w-7 h-7" />
              </a>
            )}
            {Boolean(footerInfo?.youtube_url) && (
              <a
                target="_blank"
                aria-label="Canal de Youtube Grupo Visual"
                href={footerInfo?.youtube_url}
                className="p-1 hover:bg-main duration-200 bg-white rounded-full"
              >
                <YouTubeIcon className="w-7 h-7" />
              </a>
            )}
            {Boolean(footerInfo?.instagram_url) && (
              <a
                target="_blank"
                aria-label="Instagram Grupo Visual"
                href={footerInfo?.instagram_url}
                className="p-1 hover:bg-main duration-200 bg-white rounded-full"
              >
                <InstagramIcon className="w-7 h-7" />
              </a>
            )}
            {Boolean(footerInfo?.linkedin_url) && (
              <a
                target="_blank"
                aria-label="Linkedin Grupo Visual"
                href={footerInfo?.linkedin_url}
                className="p-1 hover:bg-main duration-200 bg-white rounded-full"
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
