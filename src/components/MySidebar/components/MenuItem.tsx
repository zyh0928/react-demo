import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import { v4 } from "uuid";

import type { Dispatch, FC, SetStateAction } from "react";
import type { LinkProps } from "react-router-dom";

const MenuItem = styled(ListItem, {
  shouldForwardProp: (prop) => prop !== "selected",
})<Recordable & { selected: boolean }>(({ selected, theme: { palette } }) => ({
  backgroundColor: selected ? palette.primary.main : "inherit",
  color: selected ? palette.primary.contrastText : "inherit",
  display: "block",
  // paddingLeft: spacing(indent * 2),
}));

const MenuItemButton = styled(ListItemButton)<{ indent: number }>(
  ({ indent, theme: { spacing } }) => ({
    justifyContent: "center",
    minHeight: 48,
    padding: spacing(0, 3, 0, 3 + indent * 2),
  }),
);

const MenuItemIcon = styled(ListItemIcon, {
  shouldForwardProp: (prop) => prop !== "open",
})<{ open: boolean }>(({ open, theme: { spacing } }) => ({
  justifyContent: "center",
  marginBottom: 2,
  marginRight: open ? spacing(3) : "auto",
  minWidth: 0,
}));

const RouterLink = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => (
  <Link ref={ref} {...props} role={void 0} />
));

interface MenuNodeProps {
  expands?: string[];
  indent?: number;
  open: boolean;
  pathname: string;
  props: MenuType;
  root?: string;
  setExpands?: Dispatch<SetStateAction<string[]>>;
}

const MenuNode: FC<MenuNodeProps> = ({
  expands,
  indent = 0,
  open,
  pathname,
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

  const to = useMemo(() => root + (path ?? ""), [path, root]);

  const isGroup = useMemo(() => !!children?.length, [children]);

  const selected = useMemo(() => pathname.includes(to), [pathname, to]);

  const expand = useMemo(
    () => (!expands?.length ? selected : expands?.includes(to)),
    [expands, selected, to],
  );

  return (
    <>
      {!isGroup && (
        <MenuItem
          component={RouterLink}
          disablePadding
          selected={selected}
          to={to}
        >
          <MenuItemButton indent={indent}>
            <MenuItemIcon open={open}>
              <Icon sx={{ color: selected ? contrastText : "inherit" }} />
            </MenuItemIcon>

            <ListItemText primary={label} sx={{ opacity: open ? 1 : 0 }} />
          </MenuItemButton>
        </MenuItem>
      )}

      {isGroup && (
        <>
          <ListItem disablePadding sx={{ display: "block" }}>
            <MenuItemButton
              indent={indent}
              onClick={() =>
                setExpands?.((prev) =>
                  prev.includes(to)
                    ? prev.filter((item) => item !== to)
                    : prev.concat(to),
                )
              }
            >
              <MenuItemIcon open={open}>
                <Icon sx={{ color: selected ? main : void 0 }} />
              </MenuItemIcon>

              <ListItemText
                primary={label}
                sx={{
                  color: selected ? main : void 0,
                  opacity: open ? 1 : 0,
                }}
              />

              {open &&
                (expands?.includes(to) ? <ExpandMore /> : <ExpandLess />)}
            </MenuItemButton>
          </ListItem>

          <Collapse in={expand} timeout="auto" unmountOnExit>
            {children?.map((item) => (
              <MenuNode
                expands={expands}
                indent={indent + 1}
                key={v4()}
                open={open}
                pathname={pathname}
                props={item}
                root={to + "/"}
                setExpands={setExpands}
              />
            ))}
          </Collapse>
        </>
      )}
    </>
  );
};

export default MenuNode;
