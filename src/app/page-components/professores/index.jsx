"use client";
import MKTypography from "@/components/MKTypography";
import colors from "@/theme/base/colors";
import TeachersList from "./teachers-list";

export default function ProfessoresPage() {
  return (
    <div className="h-fit relative">
      <div className="w-full">
        <div
          className="logos flex"
          style={{ width: `${2 * 400 * 8}px`, height: "400px" }}
        >
          <div className="logos-slide flex" style={{ width: `${400 * 8}px` }}>
            <img alt="proffesor jirafales" src="student1.webp"></img>
            <img alt="proffesor jirafales" src="student2.webp"></img>
            <img alt="proffesor jirafales" src="student2.webp"></img>
            <img alt="proffesor jirafales" src="student2.webp"></img>
            <img alt="proffesor jirafales" src="student2.webp"></img>
            <img alt="proffesor jirafales" src="student2.webp"></img>
            <img alt="proffesor jirafales" src="student2.webp"></img>
            <img alt="proffesor jirafales" src="student2.webp"></img>
          </div>

          <div className="logos-slide flex" style={{ width: `${400 * 8}px` }}>
            <img alt="proffesor jirafales" src="student1.webp"></img>
            <img alt="proffesor jirafales" src="student2.webp"></img>
            <img alt="proffesor jirafales" src="student2.webp"></img>
            <img alt="proffesor jirafales" src="student2.webp"></img>
            <img alt="proffesor jirafales" src="student2.webp"></img>
            <img alt="proffesor jirafales" src="student2.webp"></img>
            <img alt="proffesor jirafales" src="student2.webp"></img>
            <img alt="proffesor jirafales" src="student2.webp"></img>
          </div>
        </div>
      </div>
      <div
        className="absolute top-0 left-0 flex justify-center items-end z-20"
        style={{ width: "100%", height: "400px" }}
      >
        <MKTypography
          variant="h2"
          color={colors.dark.main}
          textGradient
          className="text-center w-full mb-4"
          sx={({ breakpoints, typography: { size } }) => ({
            [breakpoints.down("md")]: {
              fontSize: size["4xl"],
            },
          })}
        >
          Nossos professores
        </MKTypography>
      </div>

      <div
        className="z-10 bg-gradient-to-t from-gray-200 via-gray-200 to-transparent"
        style={{
          position: "absolute",
          top: "200px",
          height: "400px",
          left: "0",
          width: `${400 * 2 * 8}px`,
        }}
      ></div>
      <section
        className="z-20 bg-gray-200"
        style={{
          width: "100%",
          height: "fit-content",
          minHeight: "200px",
          paddingTop: "1rem",
          paddingBottom: "2rem",
        }}
      >
        <TeachersList
          categories={[
            {
              id: 1,
              text: "Marketing",
              color: "#00a",
            },
            { id: 2, text: "Programacao", color: "#a00" },
            { id: 3, text: "Empresa", color: "#0a0" },
          ]}
          teachers={[
            {
              url: "student1.webp",
              title: "Maria Javier",
              text: "Master en ciencias. Professora da PUCPR",
            },
            {
              url: "student1.webp",
              title: "Maria Javier",
              text: "Master en ciencias. Professora da PUCPR",
            },
            {
              url: "student1.webp",
              title: "Maria Javier",
              text: "Master en ciencias. Professora da PUCPR",
            },
            {
              url: "student1.webp",
              title: "Maria Javier",
              text: "Master en ciencias. Professora da PUCPR",
            },
            {
              url: "student2.webp",
              title: "Maria Javier",
              text: "Master en ciencias. Professora da PUCPR",
            },
            {
              url: "student2.webp",
              title: "Maria Javier",
              text: "Master en ciencias. Professora da PUCPR",
            },
            {
              url: "student2.webp",
              title: "Maria Javier",
              text: "Master en ciencias. Professora da PUCPR",
            },
            {
              url: "student2.webp",
              title: "Maria Javier",
              text: "Master en ciencias. Professora da PUCPR",
            },
          ]}
        />
      </section>
    </div>
  );
}
