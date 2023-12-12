import Common from "#/common";

import Node from "./components/Node";

import type { ListProps } from "@mui/material/List";

interface NavProps extends ListProps {
  open: boolean;
}

const Nav = styled(List, {
  shouldForwardProp: (prop) => prop !== "open",
})<NavProps>(
  ({
    open,
    theme: {
      palette,
      transitions: { create, duration, easing },
    },
  }) => ({
    backgroundColor: palette.background.paper,
    position: "relative",
    transition: create("width", {
      duration: duration.enteringScreen,
      easing: easing.sharp,
    }),
    whiteSpace: "nowrap",
    width: 240,
    ...(!open && {
      overflowX: "hidden",
      transition: create("width", {
        duration: duration.leavingScreen,
        easing: easing.sharp,
      }),
      width: 0,
    }),
    borderRight: `1px solid ${palette.divider}`,
    gridArea: "sidebar",
    overflow: "hidden auto",
  }),
);

interface SidebarProps {
  open: boolean;
}

const Sidebar: FC<SidebarProps> = ({ open }) => {
  const { i18n } = useTranslation();
  const { menus } = useContext(Common);
  const { pathname } = useLocation();

  const [expands, setExpands] = useState<string[]>([]);

  const resetExpands = useCallback(() => {
    const paths = pathname.split("/");

    const expands: string[] = [];

    if (paths.length > 3) {
      paths.slice(2, paths.length - 1).reduce((prev, curr) => {
        const path = `${prev}/${curr}`;

        expands.push(path);

        return path;
      }, `/${i18n.language}`);
    }

    setExpands(expands);
  }, [pathname, i18n.language]);

  useUpdateEffect(() => {
    resetExpands();
  }, [i18n.language]);

  useEffectOnce(resetExpands);

  return (
    <Nav component="nav" open={open}>
      {menus?.map((item, idx) => (
        <Node
          expands={expands}
          key={idx}
          props={item}
          root={`/${i18n.language}`}
          setExpands={setExpands}
        />
      ))}
    </Nav>
  );
};

export default Sidebar;
