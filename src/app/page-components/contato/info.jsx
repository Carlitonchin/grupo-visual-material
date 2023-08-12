"use client";
import MKTypography from "@/components/MKTypography";
import colors from "@/theme/base/colors";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
export default function Info() {
  return (
    <div className="min-w-fit max-w-full h-fit">
      <div>
        <MKTypography
          variant="h1"
          color={colors.dark.main}
          textGradient
          sx={({ breakpoints, typography: { size } }) => ({
            [breakpoints.down("md")]: {
              fontSize: size["4xl"],
            },
          })}
        >
          Fale Conosco
        </MKTypography>
        <MKTypography variant="body1" color={colors.dark.main} mt={0.5}>
          Atendemos todo o Brasil
        </MKTypography>
      </div>
      <div className="mt-8">
        <div className="flex items-center">
          <PhoneInTalkOutlinedIcon className="w-10 h-10" />
          <MKTypography
            variant="h3"
            color={colors.dark.main}
            textGradient
            className="ml-4"
            sx={({ breakpoints, typography: { size } }) => ({
              [breakpoints.down("md")]: {
                fontSize: size["4xl"],
              },
            })}
          >
            Telefone
          </MKTypography>
        </div>
        <MKTypography
          variant="body1"
          color={colors.dark.main}
          className="ml-14"
        >
          <a href={"tel:+554630554355"}>(46) 3055-4355</a>
        </MKTypography>
      </div>
      <div className="flex items-center mt-8">
        <EmailOutlinedIcon className="w-10 h-10" />
        <MKTypography
          variant="h3"
          color={colors.dark.main}
          textGradient
          className="ml-4"
          sx={({ breakpoints, typography: { size } }) => ({
            [breakpoints.down("md")]: {
              fontSize: size["4xl"],
            },
          })}
        >
          Email
        </MKTypography>
      </div>
      <MKTypography variant="body1" color={colors.dark.main} className="ml-14">
        <a href={"mailto:grupovisualfb@gmail.com"}>grupovisualfb@gmail.com</a>
      </MKTypography>
    </div>
  );
}
