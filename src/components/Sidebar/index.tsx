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
  drawer: boolean;
}

const Sidebar: FC<SidebarProps> = ({ drawer }) => {
  const { i18n } = useTranslation();
  const { pathname } = useLocation();

  const { menus } = useContext(Common);

  const [expands, setExpands] = useState<string[]>([]);

  const resetExpands = useCallback(() => {
    setExpands([pathname]);
  }, [pathname]);

  useUpdateEffect(resetExpands, [i18n.language]);

  useEffectOnce(resetExpands);

  return (
    <Nav component="nav" open={drawer}>
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
