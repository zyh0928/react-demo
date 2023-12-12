import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import MuiIcon from "@/components/MuiIcon";

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

  const selected = useMemo(() => pathname.includes(to), [pathname, to]);

  const expand = useMemo(() => expands.includes(to), [expands, to]);

  const toggle = () => {
    setExpands((prev) =>
      prev.includes(to) ? prev.filter((item) => item !== to) : prev.concat(to),
    );
  };

  return (
    <>
      <ListItem disablePadding sx={{ display: "block" }}>
        <MenuButton indent={indent} onClick={toggle}>
          <MenuIcon sx={{ color: selected ? "primary.main" : void 0 }}>
            <MuiIcon name={icon ?? ""} />
          </MenuIcon>

          <ListItemText
            primary={title}
            sx={{
              color: selected ? "primary.main" : void 0,
            }}
          />

          {expand ? <ExpandMore /> : <ExpandLess />}
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
