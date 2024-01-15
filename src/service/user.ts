import sleep from "@/utils/sleep";

export const getRoutes = async (): Promise<MenuType[]> => {
  await sleep(1000);

  const base: MenuType[] = [
    {
      icon: "flower-poppy",
      id: 1,
      label: {
        en: "Allah Akbar!",
        zh: "家！",
      },
      path: "home/index",
      route: "home",
    },
    {
      id: 11,
      path: "home",
      redirect: !0,
      route: "",
      type: "router",
    },
    {
      icon: "weather-dust",
      id: 2,
      label: {
        en: "About",
        zh: "关于",
      },
      path: "about/index",
      route: "about",
    },
  ];

  const node: MenuType[] = [
    {
      icon: "resistor-nodes",
      id: 3,
      label: {
        en: "Node",
        zh: "节点",
      },
      path: "node/index",
      route: "node",
    },
    {
      id: 301,
      parentId: 3,
      path: "node/id/index",
      route: ":id",
      type: "router",
    },
    {
      id: 302,
      parentId: 3,
      path: "two",
      redirect: !0,
      route: "",
      type: "router",
    },
    {
      icon: "heart",
      id: 311,
      label: {
        en: "Child 1",
        zh: "子节点 1",
      },
      parentId: 3,
      route: "one",
      type: "menu",
    },
    {
      icon: "scale-unbalanced",
      id: 312,
      label: {
        en: "Child 2",
        zh: "子节点 2",
      },
      parentId: 3,
      route: "two",
      type: "menu",
    },
  ];

  const tree: MenuType[] = [
    {
      icon: "forest",
      id: 4,
      label: {
        en: "Tree",
        zh: "树根",
      },
      route: "tree",
    },
    {
      id: 401,
      parentId: 4,
      path: "a",
      redirect: !0,
      route: "",
      type: "router",
    },
    {
      icon: "spa",
      id: 411,
      label: {
        en: "Leaf A",
        zh: "树叶 A",
      },
      parentId: 4,
      path: "tree/a/index",
      route: "a",
    },
    {
      icon: "spa",
      id: 412,
      label: {
        en: "Leaf B",
        zh: "树叶 B",
      },
      parentId: 4,
      path: "tree/b/index",
      route: "b",
    },
    {
      icon: "grass",
      id: 413,
      label: {
        en: "Leaf M",
        zh: "树叶 M",
      },
      parentId: 4,
      route: "m",
    },
    {
      id: 4131,
      parentId: 413,
      path: "c",
      redirect: !0,
      route: "",
      type: "router",
    },
    {
      icon: "spa-outline",
      id: 414,
      label: {
        en: "Leaf C",
        zh: "树叶 C",
      },
      parentId: 413,
      // if path is not set, page will not be rendered
      path: "error/index",
      route: "c",
    },
  ];

  return base.concat(node, tree);
};
