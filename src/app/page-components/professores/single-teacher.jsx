"use client";
import { courses } from "@/api/routes";
import MKTypography from "@/components/MKTypography";
import StarCard from "@/components/cards/StarCard";
import colors from "@/theme/base/colors";

export default function SingleTeacher({ teacher }) {
  return (
    <>
      <div
        className={
          "mt-20  md:mt-16 flex flex-col-reverse gap-y-4 gap-x-36 items-center lg:items-start lg:flex-row w-full max-w-5xl m-auto"
        }
      >
        <div className="flex flex-col w-full lg:max-w-[500px]">
          <MKTypography
            variant="h3"
            className="text-center lg:text-start"
            color={colors.dark.main}
            textGradient
            sx={{
              padding: 0,
              margin: 0,
            }}
          >
            {teacher.title}
          </MKTypography>

          <MKTypography
            variant="body1"
            className="text-center lg:text-start"
            color={colors.dark.main}
            textGradient
            sx={{
              padding: 0,
              margin: 0,
            }}
          >
            {teacher.text}
          </MKTypography>

          <MKTypography
            variant="button"
            color={"text"}
            sx={{
              fontSize: "1rem",
              marginTop: "1rem",
            }}
          >
            O auxiliar de Necropsia é o profissional responsável por auxiliar o
            Médico Legista na identificação da causa da morte, já o
            tanatopraxista trabalha junto às clínicas de tanatopraxia ou
            fenerárias auxiliando na preparação e ornamentação dos corpos. O
            Auxiliar de Necrópsia vai auxiliar na identificação do cadáver, na
            comunicação com os familiares, vai auxiliar com manuseio do corpo
            realizando os procedimentos de abertura do cadáver, exposição dos
            órgãos para identificação de lesões que possam ter levado o
            indivíduo a óbito, ou seja, é ele o responsável por fazer o trabalho
            bruto, enquanto isso o médico legista acompanha e observa para
            identificar e desvendar a causa da morte. Logo após todo
            procedimento realizado é responsabilidade do auxiliar de Necropsia
            finalizar o procedimento fechar o corpo e fazer a liberação dele
            para a funerária e familiares. Ao final do curso o estudante recebe
            em sua casa, dois certificados, o de Auxiliar de Necropsia e o de
            Tanatopraxia com ênfase em Necromaquiagem. Além do mais, nossos
            certificados possuem um código de validação em nossa matriz que
            realmente comprovam sua validade. Nossos certificados são válidos em
            todo território nacional conforme a LDBE - LEI DE DIRETRIZES E BASE
            DA EDUCAÇÃO - LEI 9.394/96. Observação: Ressaltamos que para atuação
            no IML e Institutos de Perícia, é necessário ser aprovado em
            concurso público.
          </MKTypography>
        </div>
        <div className="w-full relative sm:w-[400px] sm:h-[400px]">
          <img
            className="w-full h-full rounded-sm"
            alt="profesor"
            src={teacher.url}
          ></img>
          <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-transparent via-transparent to-gray-200" />
          <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-t from-transparent via-transparent to-gray-200" />
          <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-r from-transparent via-transparent to-gray-200" />
          <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-l from-transparent via-transparent to-gray-200" />
        </div>
      </div>
      <div className="w-full mt-8 lg:mt-12">
        <MKTypography
          variant="h3"
          className="text-center px-4 w-full"
          color={colors.dark.main}
          textGradient
        >
          Cursos com participação do profissional
        </MKTypography>

        <div className="flex flex-wrap pt-4 gap-y-4 justify-center">
          {courses
            .filter((c, index) => index <= 2)
            .map((course) => {
              return (
                <StarCard
                  category={course.category}
                  img={course.img}
                  stars={course.stars}
                  text={course.text}
                  url={course.url}
                  key={course.id}
                />
              );
            })}
        </div>
      </div>
    </>
  );
}
