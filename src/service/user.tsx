import AccountTreeIcon from "@mui/icons-material/AccountTree";
import BalanceIcon from "@mui/icons-material/Balance";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ForestIcon from "@mui/icons-material/Forest";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import SpaIcon from "@mui/icons-material/Spa";

const getMenus = (): MenuType[] => [
  {
    icon: HomeIcon,
    label: {
      en: "Allah Akbar!",
      zh: "家！",
    },
    path: "home",
  },
  {
    icon: InfoIcon,
    label: {
      en: "About",
      zh: "关于",
    },
    path: "about",
  },
  {
    children: [
      {
        icon: FavoriteIcon,
        label: {
          en: "Child 1",
          zh: "子节点 1",
        },
        path: "one",
      },
      {
        icon: BalanceIcon,
        label: {
          en: "Child 2",
          zh: "子节点 2",
        },
        path: "two",
      },
    ],
    icon: AccountTreeIcon,
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
            icon: SpaIcon,
            label: {
              en: "Leaf 1-1",
              zh: "树叶 1-1",
            },
            path: "one-1",
          },
        ],
        icon: SpaIcon,
        label: {
          en: "Leaf 1",
          zh: "树叶 1",
        },
        path: "one",
      },
      {
        icon: SpaIcon,
        label: {
          en: "Leaf 2",
          zh: "树叶 2",
        },
        path: "two",
      },
    ],
    icon: ForestIcon,
    label: {
      en: "Tree",
      zh: "树根",
    },
    path: "tree",
  },
];

export { getMenus };
