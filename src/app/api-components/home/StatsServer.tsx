import Stats from "@/app/page-components/home/stats";

export default async function StatsServer() {
  return (
    <Stats
      stats={[
        {
          count: "4.000",
          title: "Alunos",
          description: "formados em todo Brasil",
        },
        {
          count: "30",
          title: "Cursos",
          description: "profissionalizantes",
        },
        {
          count: "20",
          title: "Professores",
          description: "atuantes na sua área",
        },
      ]}
    />
  );
}
