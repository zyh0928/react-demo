import MenuItem from "./components/MenuItem";
import menus from "./props/menus";

import type { FC } from "react";

const Nav = styled(List, {
  shouldForwardProp: (prop) => prop !== "open",
})<Recordable & { open: boolean }>(
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

const Sidebar: FC<{ open: boolean }> = ({ open }) => {
  const [expands, setExpands] = useState<string[]>([]);

  return (
    <Nav component="nav" open={open}>
      {menus.map((item, idx) => (
        <MenuItem
          expands={expands}
          key={idx}
          props={item}
          setExpands={setExpands}
        />
      ))}
    </Nav>
  );
};

export default Sidebar;
