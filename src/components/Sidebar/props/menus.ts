import AccountTreeIcon from "@mui/icons-material/AccountTree";
import BalanceIcon from "@mui/icons-material/Balance";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ForestIcon from "@mui/icons-material/Forest";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import SpaIcon from "@mui/icons-material/Spa";

const menus: MenuType[] = [
  {
    icon: HomeIcon,
    label: "主页",
    path: "home",
  },
  {
    icon: InfoIcon,
    label: "关于",
    path: "about",
  },
  {
    children: [
      {
        icon: FavoriteIcon,
        label: "子节点 1",
        path: "one",
      },
      {
        icon: BalanceIcon,
        label: "子节点 2",
        path: "two",
      },
    ],
    icon: AccountTreeIcon,
    label: "根节点",
    path: "node",
  },
  {
    children: [
      {
        children: [
          {
            icon: SpaIcon,
            label: "树叶 1-1",
            path: "one-1",
          },
        ],
        icon: SpaIcon,
        label: "树叶 1",
        path: "one",
      },
      {
        icon: SpaIcon,
        label: "树叶 2",
        path: "two",
      },
    ],
    icon: ForestIcon,
    label: "树根",
    path: "tree",
  },
];

export default menus;
