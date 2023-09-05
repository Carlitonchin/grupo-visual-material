"use client";
import MKTypography from "@/components/MKTypography";
import colors from "@/theme/base/colors";
import WhoVideo from "./video";
import Service from "./service";

export default function Who() {
  return (
    <div className="bg-gray-200">
      <div
        style={{
          width: "100%",
          height: "55vh",
          minHeight: "400px",
          backgroundImage: `url("/bg1.jpeg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          textAlign: "center",
        }}
      >
        <div className="w-full px-4 h-full bg-gray-800 bg-opacity-75 bg-blur flex flex-col items-center justify-center">
          <MKTypography
            variant="h2"
            color="white"
            sx={({ breakpoints, typography: { size } }) => ({
              [breakpoints.down("md")]: {
                fontSize: size["4xl"],
              },
            })}
          >
            Conheça o Grupo Visual
          </MKTypography>
        </div>
      </div>
      <WhoVideo />
      <section className=" bg-white">
        <MKTypography
          variant="h2"
          className="text-center lg:text-start"
          color={colors.dark.main}
          sx={({ breakpoints, typography: { size } }) => ({
            [breakpoints.down("md")]: {
              fontSize: size["4xl"],
            },
          })}
        >
          Serviços Oferecidos
        </MKTypography>
        <div className="w-full mt-8 flex flex-col gap-y-20 lg:gap-y-36">
          <Service
            align={"left"}
            alt={"servico"}
            category={"Gestao Academica"}
            img={"/bg2.jpg"}
            text={
              "Este é o coração da Escola Virtual.Gov! Por meio dela, instituições gerenciam seus cursos, a abertura de turmas e o andamento das inscrições. É o local onde servidores e cidadãos têm acesso ao catálogo unificado, calendário de turmas, histórico escolar e emissão de certificado. Tudo por meio de um acesso único e simplificado."
            }
            textButton={"Saiba mais"}
            title={"Secretaria Virtual"}
            urlButton={"/cursos"}
          />

          <Service
            align={"right"}
            alt={"servico"}
            category={"Gestao Academica"}
            img={"/bg2.jpg"}
            text={
              "Este é o coração da Escola Virtual.Gov! Por meio dela, instituições gerenciam seus cursos, a abertura de turmas e o andamento das inscrições. É o local onde servidores e cidadãos têm acesso ao catálogo unificado, calendário de turmas, histórico escolar e emissão de certificado. Tudo por meio de um acesso único e simplificado."
            }
            textButton={"Saiba mais"}
            title={"Secretaria Virtual"}
            urlButton={"/cursos"}
          />

          <Service
            align={"left"}
            alt={"servico"}
            category={"Gestao Academica"}
            img={"/bg2.jpg"}
            text={
              "Este é o coração da Escola Virtual.Gov! Por meio dela, instituições gerenciam seus cursos, a abertura de turmas e o andamento das inscrições. É o local onde servidores e cidadãos têm acesso ao catálogo unificado, calendário de turmas, histórico escolar e emissão de certificado. Tudo por meio de um acesso único e simplificado."
            }
            textButton={"Saiba mais"}
            title={"Secretaria Virtual"}
            urlButton={"/cursos"}
          />

          <Service
            align={"right"}
            alt={"servico"}
            category={"Gestao Academica"}
            img={"/bg2.jpg"}
            text={
              "Este é o coração da Escola Virtual.Gov! Por meio dela, instituições gerenciam seus cursos, a abertura de turmas e o andamento das inscrições. É o local onde servidores e cidadãos têm acesso ao catálogo unificado, calendário de turmas, histórico escolar e emissão de certificado. Tudo por meio de um acesso único e simplificado."
            }
            textButton={"Saiba mais"}
            title={"Secretaria Virtual"}
            urlButton={"/cursos"}
          />
        </div>
      </section>
      <section className="py-8 flex flex-col gap-y-4">
        <MKTypography
          id="nosso-metodo"
          variant="h2"
          className="text-center lg:text-start"
          color={colors.dark.main}
          sx={({ breakpoints, typography: { size } }) => ({
            [breakpoints.down("md")]: {
              fontSize: size["4xl"],
            },
          })}
        >
          Nosso Metodo
        </MKTypography>

        <MKTypography
          variant="button"
          color={"text"}
          className="columns-1 md:columns-2 lg:columns-3 gap-x-20"
          sx={{ fontSize: "1.1rem" }}
        >
          Entre 2013 e 2016, a Enap alcançou avanços significativos no campo da
          educação a distância, a exemplo da ampliação dos cursos ofertados
          (100%) e dos certificados emitidos (400%), bem como a internalização
          dos serviços de hospedagem e administração do seu ambiente virtual de
          aprendizagem, de produção multimídia e de planejamento educacional. A
          Escola Virtual de Governo surgiu, em 2017, como uma proposta para
          superar a fragmentação dos serviços de hospedagem e gestão acadêmica,
          buscando garantir a continuidade dos serviços de capacitação a
          distância do serviço público e solucionar problemas estruturantes que
          tenham origem na oferta descentralizada de cursos. Saiba mais sobre o
          surgimento da Escola Virtual de Governo. As primeiras adesões à Escola
          Virtual de Governo aconteceram em uma cerimônia realizada na Enap no
          dia 6 de dezembro de 2017. A Escola Virtual segue na jornada de
          ampliar sua capacidade como hub de conhecimento, abrindo o leque de
          possibilidades e buscando engajamento dos usuários interessados para
          que a plataforma evolua ainda mais e consolide-se como um centro de
          propagação da capacitação online. Atualmente, diversas instituições
          fazem parte da EV.G como conteudistas, ou seja, ofertando cursos
          produzidos em parceria conosco ou migrando cursos prontos para
          hospedagem na plataforma da EV.G. A fim de simplificar e tornar mais
          eficazes e diretas as parcerias, a EV.G baseia-se na Portaria Enap no
          83, de 03 de junho de 2014, que versa sobre os termos de autorização
          de uso dos cursos. Sendo assim, os parceiros estão assegurados que a
          permanência de seus cursos na plataforma é perene (salvo manifestação
          contrária do próprio parceiro para que o curso seja alterado ou
          precise ser retirado da EV.G). Para saber mais sobre adesão da sua
          instituição à EV.G, escreva para parcerias.evg@enap.gov.br
        </MKTypography>
      </section>
    </div>
  );
}
