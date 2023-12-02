import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Link, useLocation } from "react-router-dom";

import type { Dispatch, FC, SetStateAction } from "react";
import type { LinkProps } from "react-router-dom";

const MenuItem = styled(ListItem, {
  shouldForwardProp: (prop) => prop !== "selected",
})<Recordable & { selected: boolean }>(({ selected, theme: { palette } }) => ({
  backgroundColor: selected ? palette.primary.main : "inherit",
  color: selected ? palette.primary.contrastText : "inherit",
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
  <Link ref={ref} {...props} role={void 0} />
));

interface MenuNodeProps {
  expands?: string[];
  indent?: number;
  props?: MenuType;
  root?: string;
  setExpands?: Dispatch<SetStateAction<string[]>>;
}

const MenuNode: FC<MenuNodeProps> = ({
  expands,
  indent = 0,
  props,
  root = "/",
  setExpands,
}) => {
  const { children, icon: Icon, label, path } = props ?? {};

  const {
    palette: {
      primary: { contrastText, main },
    },
  } = useTheme();

  const { pathname } = useLocation();

  const to = useMemo(() => root + (path ?? ""), [path, root]);

  const isItem = useMemo(() => !children?.length, [children]);

  const selected = useMemo(() => pathname.includes(to), [pathname, to]);

  const expand = useMemo(
    () => (!expands?.length ? selected : expands?.includes(to)),
    [expands, selected, to],
  );

  const toggle = () => {
    setExpands?.((prev) =>
      prev.includes(to) ? prev.filter((item) => item !== to) : prev.concat(to),
    );
  };

  return isItem ? (
    <MenuItem component={RouterLink} disablePadding selected={selected} to={to}>
      <MenuItemButton indent={indent}>
        <MenuItemIcon>
          <Icon sx={{ color: selected ? contrastText : "inherit" }} />
        </MenuItemIcon>

        <ListItemText primary={label} />
      </MenuItemButton>
    </MenuItem>
  ) : (
    <>
      <ListItem disablePadding sx={{ display: "block" }}>
        <MenuItemButton indent={indent} onClick={toggle}>
          <MenuItemIcon>
            <Icon sx={{ color: selected ? main : void 0 }} />
          </MenuItemIcon>

          <ListItemText
            primary={label}
            sx={{
              color: selected ? main : void 0,
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
            root={to + "/"}
            setExpands={setExpands}
          />
        ))}
      </Collapse>
    </>
  );
};

export default MenuNode;
