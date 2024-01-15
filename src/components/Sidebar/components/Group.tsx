import Node, { MenuButton, MenuIcon } from "./Node";

import type { Dispatch, SetStateAction } from "react";

interface GroupProps {
  expands: string[];
  indent: number;
  list: MenuType[];
  setExpands: Dispatch<SetStateAction<string[]>>;
  to: string;
  icon?: string;
  title?: string;
}

const Group: FC<GroupProps> = ({
  expands,
  icon,
  indent,
  list,
  setExpands,
  title,
  to,
}) => {
  const { pathname } = useLocation();

  const selected = useMemo(() => pathname.startsWith(to), [pathname, to]);

  const expand = useMemo(
    () => expands.some((item) => item.startsWith(to)),
    [expands, to],
  );

  const toggleExpand = () => {
    if (expands.some((item) => item.startsWith(to))) {
      setExpands(expands.filter((item) => !item.startsWith(to)));
    } else {
      setExpands(expands.concat(to));
    }
  };

  return (
    <>
      <ListItem disablePadding sx={{ display: "block" }}>
        <MenuButton indent={indent} onClick={toggleExpand}>
          <MenuIcon sx={{ color: selected ? "primary.main" : void 0 }}>
            <MdiIcon name={icon} />
          </MenuIcon>

          <ListItemText
            primary={title}
            sx={{
              color: selected ? "primary.main" : void 0,
            }}
          />

          <MdiIcon name={expand ? "chevron-down" : "chevron-up"} />
        </MenuButton>
      </ListItem>

      <Collapse in={expand} timeout="auto" unmountOnExit>
        {list.map((item, idx) => (
          <Node
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

export default Group;
