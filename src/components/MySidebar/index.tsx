import { useLocation } from "react-router-dom";
import { v4 } from "uuid";

import { sidebarWidth } from "~/variables.json";

import MenuItem from "./components/MenuItem";
import menus from "./props/menus";

import type { FC } from "react";

const Sidebar = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ open, theme }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    transition: theme.transitions.create("width", {
      duration: theme.transitions.duration.enteringScreen,
      easing: theme.transitions.easing.sharp,
    }),
    whiteSpace: "nowrap",
    width: sidebarWidth,
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        duration: theme.transitions.duration.leavingScreen,
        easing: theme.transitions.easing.sharp,
      }),
      width: theme.spacing(7),
    }),
  },
  gridArea: "sidebar",
  overflow: "hidden auto",
}));

const MySidebar: FC<{ open: boolean }> = ({ open }) => {
  const { pathname } = useLocation();

  const [expands, setExpands] = useState<string[]>([]);

  return (
    <Sidebar open={open} variant="permanent">
      <List component="nav">
        {menus.map((item) => (
          <MenuItem
            expands={expands}
            key={v4()}
            open={open}
            pathname={pathname}
            props={item}
            setExpands={setExpands}
          />
        ))}
      </List>
    </Sidebar>
  );
};

export default MySidebar;
