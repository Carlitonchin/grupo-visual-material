import { getCourses } from "@/api/cursos/cursos";
import { getAreaAluno, getLogoMenu, getMenu } from "@/api/home/menu";
import NavbarNext from "@/components/navbarnext";

export default async function Navbar() {
  const routes = await getMenu();
  const logoMenu = await getLogoMenu();
  const areaAluno = await getAreaAluno();
  const courses = await getCourses();
  return (
    <NavbarNext
      routes={routes}
      courses={courses}
      urlLogo={logoMenu.url}
      altLogo={logoMenu.alt}
      urlButton={areaAluno.url}
      textButton={areaAluno.texto}
    />
  ); /*(
    <DefaultNavbar
      courses={courses}
      routes={routes}
      urlLogo={logoMenu.url}
      altLogo={logoMenu.alt}
      brand={"Grupo Visual"}
      action={{
        type: "external",
        route: areaAluno.url,
        label: areaAluno.texto,
        color: "white",
      }}
      light
      sticky
    />
  );*/
}
