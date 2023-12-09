import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import type { Dispatch, FC, SetStateAction } from "react";
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

const MenuItemButton = styled(ListItemButton)<{ indent: number }>(
  ({ indent, theme: { spacing } }) => ({
    justifyContent: "center",
    minHeight: 48,
    padding: spacing(0, 2, 0, 2 + indent * 2),
  }),
);

const MenuItemIcon = styled(ListItemIcon)(({ theme: { spacing } }) => ({
  marginRight: spacing(2),
  minWidth: 0,
}));

const RouterLink = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => (
  <NavLink ref={ref} {...props} role={void 0} />
));

interface MenuNodeProps {
  expands: string[];
  setExpands: Dispatch<SetStateAction<string[]>>;
  indent?: number;
  props?: MenuType;
  root?: string;
}

const MenuNode: FC<MenuNodeProps> = ({
  expands,
  indent = 0,
  props,
  root,
  setExpands,
}) => {
  const { children, icon: Icon, label, path } = props ?? {};

  const { pathname } = useLocation();

  const isItem = useMemo(() => !children?.length, [children]);

  const to = useMemo(() => `${root}/${path ?? ""}`, [root, path]);

  const selected = useMemo(() => pathname.includes(to), [pathname, to]);

  const expand = useMemo(
    () => (!expands.length ? selected : expands.includes(to)),
    [expands, selected, to],
  );

  const toggle = () => {
    setExpands?.((prev) =>
      prev.includes(to) ? prev.filter((item) => item !== to) : prev.concat(to),
    );
  };

  return isItem ? (
    <MenuItem component={RouterLink} disablePadding to={to}>
      <MenuItemButton indent={indent}>
        <MenuItemIcon>
          <Icon />
        </MenuItemIcon>

        <ListItemText primary={label} />
      </MenuItemButton>
    </MenuItem>
  ) : (
    <>
      <ListItem disablePadding sx={{ display: "block" }}>
        <MenuItemButton indent={indent} onClick={toggle}>
          <MenuItemIcon>
            <Icon sx={{ color: selected ? "primary.main" : void 0 }} />
          </MenuItemIcon>

          <ListItemText
            primary={label}
            sx={{
              color: selected ? "primary.main" : void 0,
            }}
          />

          {expands?.includes(to) ? <ExpandMore /> : <ExpandLess />}
        </MenuItemButton>
      </ListItem>

      <Collapse in={expand} timeout="auto" unmountOnExit>
        {children?.map((item, idx) => (
          <MenuNode
            expands={expands}
            indent={indent + 1}
            key={idx}
            props={item}
            root={to}
            setExpands={setExpands}
          />
        ))}
      </Collapse>
    </>
  );
};

export default MenuNode;
