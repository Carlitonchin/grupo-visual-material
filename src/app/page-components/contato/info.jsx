"use client";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import HeaderText from "@/components/texts/header-text";
export default function Info({ info }) {
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "50vh",
          minHeight: "500px",
          maxHeight: "550px",
          backgroundImage: `url("${info.fundo}")`,
          backgroundSize: "cover",
	  backgroundColor: "#023457",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          textAlign: "center",
        }}
      >
        <div className="w-full h-full flex flex-col items-center justify-center pt-[150px] sm:pt-[80px]">
          <HeaderText font="Custom" variant="h1" className="text-white">
            {info.titulo}
          </HeaderText>
          <span className="text-white mt-2">{info.texto}</span>
          <div className="mt-4 text-center justify-center">
            <div className="flex justify-center">
              <PhoneInTalkOutlinedIcon
                sx={{
                  fill: "white",
                  width: "2rem",
                  height: "2rem",
                  marginRight: "0.25rem",
                }}
              />
              <HeaderText
                font="Custom"
                variant="h3"
                className="text-2xl text-white"
              >
                Telefone
              </HeaderText>
            </div>
            <span className="text-white text-base">
              <a href={`tel:${info.telefone}`}>{info.telefone_formatado}</a>
            </span>

            <div className="flex text-center justify-center  mt-4">
              <EmailOutlinedIcon
                sx={{
                  fill: "white",
                  width: "2rem",
                  height: "2rem",
                  marginRight: "0.25rem",
                }}
              />
              <HeaderText
                font="Custom"
                variant="h3"
                className="text-2xl text-white"
              >
                Email
              </HeaderText>
            </div>
            <span className="text-white text-base">
              <a href={`mailto:${info.email}`}>{info.email}</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
