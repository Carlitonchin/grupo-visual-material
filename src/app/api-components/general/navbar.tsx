import { getAreaAluno, getLogoMenu, getMenu } from "@/api/home/menu";
import DefaultNavbar from "@/components/examples/Navbars/DefaultNavbar";

export default async function Navbar() {
  const routes = await getMenu();
  const logoMenu = await getLogoMenu();
  const areaAluno = await getAreaAluno();
  return (
    <DefaultNavbar
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
  );
}
