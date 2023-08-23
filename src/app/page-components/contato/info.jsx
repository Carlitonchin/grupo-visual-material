"use client";
import MKTypography from "@/components/MKTypography";
import colors from "@/theme/base/colors";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
export default function Info() {
  return (
    <div className="w-fit min-w-fit max-w-full h-fit lg:mb-36">
      <div>
        <MKTypography
          variant="h1"
          className="text-4xl"
          color={colors.dark.main}
          textGradient
        >
          Fale Conosco
        </MKTypography>
        <MKTypography variant="body1" color={colors.dark.main} mt={0.5}>
          Atendemos todo o Brasil
        </MKTypography>
      </div>
      <div className="mt-8">
        <div className="flex items-center">
          <PhoneInTalkOutlinedIcon className="w-8 h-8" />
          <MKTypography
            variant="h3"
            color={colors.dark.main}
            textGradient
            className="ml-4 text-2xl"
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
          variant="body2"
          color={colors.dark.main}
          className="ml-12"
        >
          <a href={"tel:+554630554355"}>(46) 3055-4355</a>
        </MKTypography>
      </div>
      <div className="flex items-center mt-8">
        <EmailOutlinedIcon className="w-8 h-8" />
        <MKTypography
          variant="h3"
          color={colors.dark.main}
          textGradient
          className="ml-4 text-2xl"
          sx={({ breakpoints, typography: { size } }) => ({
            [breakpoints.down("md")]: {
              fontSize: size["4xl"],
            },
          })}
        >
          Email
        </MKTypography>
      </div>
      <MKTypography variant="body2" color={colors.dark.main} className="ml-12">
        <a href={"mailto:grupovisualfb@gmail.com"}>grupovisualfb@gmail.com</a>
      </MKTypography>
    </div>
  );
}
