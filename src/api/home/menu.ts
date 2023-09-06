import { strapiGet } from "../constant";

interface propsMenu {
  name: string;
  route: string;
  rowsPerColumn?: number | undefined;
  columns?: Number | undefined;
  collapse?: any[] | undefined;
}

interface logoMenuProps {
  alt: string;
  url: string;
}

export const getMenu = async () => {
  let menu = [];
  const resp = await strapiGet("menus");
  for (let i = 0; i < resp.length; i++) {
    const item = resp[i].attributes;
    const itemMenu: propsMenu = {
      name: item.texto,
      route: item.url,
    };

    for (let j = 0; j < item.filhos.data.length; j++) {
      if (j == 0) {
        itemMenu.columns = 1;
        itemMenu.rowsPerColumn = 2;
        itemMenu.collapse = [{ collapse: [] }];
      }
      const filhoItem = item.filhos.data[j].attributes;
      if (itemMenu.collapse?.length)
        itemMenu.collapse[0].collapse.push({
          name: filhoItem.texto,
          route: filhoItem.url,
        });
    }

    menu.push(itemMenu);
  }
  return menu;
};

export const getLogoMenu = async () => {
  const logoMenu: logoMenuProps = {
    alt: "",
    url: "",
  };

  const resp = await strapiGet("logo-menu");
  const item = resp.attributes;

  logoMenu.alt = item.alt;
  logoMenu.url = item.url;

  return logoMenu;
};

export const getAreaAluno = async () => {
  const resp = await strapiGet("area-aluno");
  const item = resp.attributes;
  return item;
};
