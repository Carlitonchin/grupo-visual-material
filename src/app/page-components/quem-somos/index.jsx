"use client";
import MKTypography from "@/components/MKTypography";

export default function Who() {
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "35vh",
          minHeight: "300px",
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
            O Grupo Visual
          </MKTypography>
          <MKTypography variant="body1" color="white" mt={1}>
            Saiba mais sobre a empresa de cursos profissionalizantes que mais
            cresce no Brasil
          </MKTypography>
        </div>
      </div>
      <section className="bg-gray-200 flex flex-col gap-y-4 py-8">
        <MKTypography
          variant="button"
          color={"text"}
          sx={{
            fontSize: "1.2rem",
          }}
        >
          Uma instituição de cursos profissionalizantes reconhecida pela
          credibilidade e compromisso com a formação profissional dos seus
          estudantes. Com uma vasta experiência na área de treinamentos e nos
          mais variados cursos profissionalizantes.
        </MKTypography>

        <MKTypography
          variant="button"
          color={"text"}
          sx={{
            fontSize: "1.2rem",
          }}
        >
          Os cursos possuem uma linguagem simples, prática e moderna que atendem
          da melhor maneira possível o público alvo em questão, proporcionando
          um processo de aprendizagem interativo, dinâmico e acessível a
          qualquer pessoa que tenha acesso à Internet.
        </MKTypography>
        <MKTypography
          variant="button"
          color={"text"}
          sx={{
            fontSize: "1.2rem",
          }}
        >
          Há anos atuando no mercado, o Grupo Visual se transformou rapidamente
          em uma referência no mercado virtual, com certificado válido (Cursos
          Livres), investindo não apenas na qualidade de seu material didático,
          como também em profissionais qualificados, para atender estudantes de
          qualquer lugar do Brasil.
        </MKTypography>
        <MKTypography
          variant="button"
          color={"text"}
          sx={{
            fontSize: "1.2rem",
          }}
        >
          Hoje o Grupo Visual orgulhosamente disponibiliza cursos de primeira
          linha, visando o mercado de trabalho e qualificação dos alunos.
        </MKTypography>
      </section>
      <div
        style={{
          width: "100%",
          height: "fit-content",
          backgroundImage: `url("/bg1.jpeg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          textAlign: "center",
        }}
      >
        <div className="w-full z-10 px-4 py-8 h-full bg-gray-800 bg-opacity-75 bg-blur flex flex-col items-center justify-center">
          <MKTypography
            variant="h3"
            color="white"
            sx={({ breakpoints, typography: { size } }) => ({
              [breakpoints.down("md")]: {
                fontSize: size["4xl"],
              },
            })}
          >
            O Grupo Visual é formado por:
          </MKTypography>
          <MKTypography variant="body1" color="white" mt={1}>
            GRUPO VISUAL CURSOS PROFISSIONALIZANTES - EIRELE - CNPJ
            25.067.781/0001-62
          </MKTypography>
          <MKTypography variant="body1" color="white" mt={1}>
            C.J. RAMOS & CIA LTDA - ME - CNPJ 22.940.734/0001-93
          </MKTypography>
          <MKTypography variant="body1" color="white" mt={1}>
            C.J. RAMOS - TREINAMENTO PROFISSIONAL LTDA - CNPJ
            33.156.914/0001-03.
          </MKTypography>
        </div>
      </div>
    </div>
  );
}
