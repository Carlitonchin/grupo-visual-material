"use client";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
export default function Info({ info }) {
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "45vh",
          minHeight: "460px",
          maxHeight: "500px",
          backgroundImage: `url("${info.fundo}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          textAlign: "center",
        }}
      >
        <div className="w-full h-full pb-12 bg-gray-800 bg-opacity-75 bg-blur flex flex-col items-center justify-end">
          <h1 className="text-white">{info.titulo}</h1>
          <span className="text-white">{info.texto}</span>
          <div className="mt-4 text-center justify-center">
            <div className="flex justify-center">
              <PhoneInTalkOutlinedIcon className="fill-white w-8 h-8 mr-1" />
              <h3 className="text-2xl text-white">Telefone</h3>
            </div>
            <span className="text-white text-base">
              <a href={`tel:${info.telefone}`}>{info.telefone_formatado}</a>
            </span>

            <div className="flex text-center justify-center  mt-4">
              <EmailOutlinedIcon className="w-8 h-8 fill-white mr-1" />
              <h3 className="text-2xl text-white">Email</h3>
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
