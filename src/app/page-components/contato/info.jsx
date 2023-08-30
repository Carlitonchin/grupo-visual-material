"use client";
import MKTypography from "@/components/MKTypography";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
export default function Info() {
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "45vh",
          minHeight: "460px",
          maxHeight: "500px",
          backgroundImage: `url("/bg1.jpeg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          textAlign: "center",
        }}
      >
        <div className="w-full h-full pb-12 bg-gray-800 bg-opacity-75 bg-blur flex flex-col items-center justify-end">
          <MKTypography
            variant="h1"
            color="white"
            sx={({ breakpoints, typography: { size } }) => ({
              [breakpoints.down("md")]: {
                fontSize: size["4xl"],
              },
            })}
          >
            Fale Conosco
          </MKTypography>
          <MKTypography variant="body1" color="white" mt={1}>
            Atendemos todo o Brasil
          </MKTypography>
          <div className="mt-4 text-center justify-center">
            <div className="flex justify-center">
              <PhoneInTalkOutlinedIcon className="fill-white w-8 h-8" />
              <MKTypography
                variant="h3"
                color={"white"}
                className="text-2xl"
                sx={({ breakpoints, typography: { size } }) => ({
                  [breakpoints.down("md")]: {
                    fontSize: size["4xl"],
                  },
                })}
              >
                Telefone
              </MKTypography>
            </div>
            <MKTypography variant="body2" color={"white"}>
              <a href={"tel:+554630554355"}>(46) 3055-4355</a>
            </MKTypography>

            <div className="flex text-center justify-center  mt-4">
              <EmailOutlinedIcon className="w-8 h-8 fill-white" />
              <MKTypography
                variant="h3"
                color={"white"}
                className="text-2xl"
                sx={({ breakpoints, typography: { size } }) => ({
                  [breakpoints.down("md")]: {
                    fontSize: size["4xl"],
                  },
                })}
              >
                Email
              </MKTypography>
            </div>
            <MKTypography variant="body2" color={"white"}>
              <a href={"mailto:grupovisualfb@gmail.com"}>
                grupovisualfb@gmail.com
              </a>
            </MKTypography>
          </div>
        </div>
      </div>
    </div>
  );
}
