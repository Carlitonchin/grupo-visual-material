"use client";
import MKTypography from "@/components/MKTypography";
import TextLink from "@/components/TextLink";

export default function ObrigadoComponent() {
  return (
    <div>
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          backgroundImage: `url("/bg1.jpeg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          textAlign: "center",
        }}
      >
        <div className="w-full h-full min-h-screen bg-gray-800 bg-opacity-75 bg-blur flex flex-col items-center justify-center">
          <img width={100} height={100} alt="sucesso" src="/sucesso.svg" />

          <MKTypography
            variant="h1"
            color="white"
            sx={({ breakpoints, typography: { size } }) => ({
              [breakpoints.down("md")]: {
                fontSize: size["4xl"],
              },
            })}
          >
            Pagamento realizado com sucesso!
          </MKTypography>

          <MKTypography className="max-w-2xl mt-8" variant="h4" color="white">
            Nossa equipe vai se comunicar com voçê para lhe falar os seguintes
            pasos. Obrigado por confiar na gente
          </MKTypography>

          <TextLink
            className={"mt-10 text-white hover:text-white"}
            text={"Ver mais cursos"}
            url={"/cursos"}
            extern={false}
          />
        </div>
      </div>
    </div>
  );
}
