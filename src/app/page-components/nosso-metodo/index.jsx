"use client";
import MKTypography from "@/components/MKTypography";

export default function InfoMethod() {
  return (
    <>
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
        className="absolute top-0 left-0"
      >
        <div className="w-full h-full pb-12 bg-gray-800 bg-opacity-75 bg-blur flex items-end justify-center">
          <MKTypography
            variant="h1"
            color="white"
            sx={({ breakpoints, typography: { size } }) => ({
              [breakpoints.down("md")]: {
                fontSize: size["4xl"],
              },
            })}
          >
            Nosso Método
          </MKTypography>
        </div>
      </div>
      <div style={{ height: "32vh", minHeight: "250px" }}></div>
      <div className="flex flex-col gap-y-4">
        <MKTypography
          variant="button"
          color={"text"}
          sx={{
            fontSize: "1.2rem",
          }}
        >
          Nosso método de ensino define a maneira com que buscamos organizar
          nossas propostas educativas, a fim de que possamos atingir o nosso
          objetivo de realmente fazer com que nosso estudante aprenda e
          desenvolva as potencialidades, as habilidades e as competências
          necessárias e compatíveis às exigências do mercado de trabalho atual.
          Nesse sentido a nossa metodologia está voltada em primeiro lugar, para
          uma qualificação profissional séria e comprometida que realmente supra
          as necessidades, carências e exigências do mercado de trabalho atual.
        </MKTypography>

        <MKTypography
          variant="button"
          color={"text"}
          sx={{
            fontSize: "1.2rem",
          }}
        >
          Nossos gestores e professores trabalham arduamente para entregar aos
          nossos estudantes um curso que seja em primeiro lugar, um diferencial
          em suas vidas e um curso que os tornem reconhecidos e diferenciados
          aonde quer que estejam, tanto pelo seu conhecimento quanto pela sua
          maneira de agir e pensar. Essa é nossa proposta para você, porém, é
          necessário frisar desde o princípio, que o principal responsável na
          construção de uma carreira de sucesso é você mesmo (a). Mas é nosso
          dever enquanto escola de qualificação, fornecer todo o aporte
          necessário para que possas concretizar seus sonhos e objetivos. Assim
          sendo, dispomos de uma equipe de excelentes profissionais, dotados de
          conhecimentos e munidos das ferramentas necessárias para que possamos
          levar você a construir o seu caminho de sucesso.
        </MKTypography>
        <MKTypography
          variant="button"
          color={"text"}
          sx={{
            fontSize: "1.2rem",
          }}
        >
          Nossos professores estarão sempre lhe orientando, tirando suas
          dúvidas, corrigindo seus trabalhos, fazendo apontamentos e mostrando o
          que precisa ser melhorado. Eles serão seus guias nessa jornada rumo a
          sua caminhada empreendedora de sucesso.
        </MKTypography>
        <MKTypography
          variant="button"
          color={"text"}
          sx={{
            fontSize: "1.2rem",
          }}
        >
          Ao matricular-se em nossos cursos, você contará também, além do apoio
          diário dos professores, com o apoio da nossa equipe de suporte
          técnico, que lhe ajudará com as dúvidas e dificuldades na plataforma
          ao decorrer do curso. Nesse sentido, sempre que o estudante tiver
          alguma dúvida ou uma dificuldade terá a quem recorrer. O Grupo Visual
          preocupado com o processo de aprendizagem de cada estudante, propôs um
          método que busca trabalhar com as mais variadas formas de
          aprendizagem.
        </MKTypography>
        <MKTypography
          variant="button"
          color={"text"}
          sx={{
            fontSize: "1.2rem",
          }}
        >
          Além do conteúdo das aulas, oferecemos aos nossos alunos lives
          semanais com os professores e/ou profissionais da área, justamente
          para aproximar o máximo possível a realidade da profissão aos nossos
          estudantes. Além do mais, nessas lives, os estudantes podem interagir
          e tirar as dúvidas ao vivo com os professores e/ou profissionais.
        </MKTypography>
        <MKTypography
          variant="button"
          color={"text"}
          sx={{
            fontSize: "1.2rem",
          }}
        >
          Por fim, nosso método avaliativo e pedagógico tem por objetivo
          apresentar-se como um termômetro, pelo qual indica ao estudante onde
          está precisando melhorar, como deve fazer para melhorar, conduzindo-o
          na construção de um conhecimento sólido e maduro que realmente
          contribua em sua formação profissional, pessoal ou acadêmica.
        </MKTypography>
      </div>
    </>
  );
}
