const getMenus = (): MenuType[] => [
  {
    icon: "flower-poppy",
    label: {
      en: "Allah Akbar!",
      zh: "家！",
    },
    path: "home",
  },
  {
    icon: "weather-dust",
    label: {
      en: "About",
      zh: "关于",
    },
    path: "about",
  },
  {
    children: [
      {
        icon: "heart",
        label: {
          en: "Child 1",
          zh: "子节点 1",
        },
        path: "one",
      },
      {
        icon: "scale-unbalanced",
        label: {
          en: "Child 2",
          zh: "子节点 2",
        },
        path: "two",
      },
    ],
    icon: "resistor-nodes",
    label: {
      en: "Node",
      zh: "节点",
    },
    path: "node",
  },
  {
    children: [
      {
        children: [
          {
            icon: "spa",
            label: {
              en: "Leaf 1-1",
              zh: "树叶 1-1",
            },
            path: "1-1",
          },
        ],
        icon: "grass",
        label: {
          en: "Leaf 1",
          zh: "树叶 1",
        },
        path: "1",
      },
      {
        icon: "leaf",
        label: {
          en: "Leaf 2",
          zh: "树叶 2",
        },
        path: "2",
      },
    ],
    icon: "forest",
    label: {
      en: "Tree",
      zh: "树根",
    },
    path: "tree",
  },
];

export { getMenus };
