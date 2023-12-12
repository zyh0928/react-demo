import { MenuButton, MenuIcon } from "./Node";

import type { LinkProps } from "react-router-dom";

const MenuItem = styled(ListItem)<Recordable>(({ theme: { palette } }) => ({
  "&.active": {
    ".MuiSvgIcon-root": {
      color: palette.primary.contrastText,
    },
    backgroundColor: palette.primary.main,
    color: palette.primary.contrastText,
  },
  color: "inherit",
  display: "block",
}));

const RouterLink = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => (
  <NavLink ref={ref} {...props} role={void 0} />
));

interface ItemProps {
  indent: number;
  to: string;
  icon?: ReactNode;
  title?: string;
}

const Item: FC<ItemProps> = ({ icon, indent, title, to }) => {
  return (
    <MenuItem component={RouterLink} disablePadding to={to}>
      <MenuButton indent={indent}>
        <MenuIcon>{icon}</MenuIcon>

        <ListItemText primary={title} />
      </MenuButton>
    </MenuItem>
  );
};

export default Item;
