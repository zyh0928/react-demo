import Group from "./Group";
import Item from "./Item";

import type { ListItemButtonProps } from "@mui/material/ListItemButton";
import type { Dispatch, SetStateAction } from "react";

interface MenuButtonProps extends ListItemButtonProps {
  indent: number;
}

export const MenuButton = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== "indent",
})<MenuButtonProps>(({ indent, theme: { spacing } }) => ({
  justifyContent: "center",
  minHeight: 48,
  padding: spacing(0, 2, 0, 2 + indent * 2),
}));

export const MenuIcon = styled(ListItemIcon)(({ theme: { spacing } }) => ({
  marginRight: spacing(2),
  minWidth: 0,
}));

interface NodeProps {
  expands: string[];
  setExpands: Dispatch<SetStateAction<string[]>>;
  indent?: number;
  props?: MenuType;
  root?: string;
}

const Node: FC<NodeProps> = ({
  expands,
  indent = 0,
  props,
  root,
  setExpands,
}) => {
  const { children, icon, label, path } = props ?? {};

  const { i18n } = useTranslation();

  const to = useMemo(() => `${root}/${path ?? ""}`, [root, path]);

  const title = useMemo(() => label?.[i18n.language], [label, i18n.language]);

  return Array.isArray(children) && children.length ? (
    <Group
      expands={expands}
      icon={icon}
      indent={indent}
      list={children}
      setExpands={setExpands}
      title={title}
      to={to}
    />
  ) : (
    <Item icon={icon} indent={indent} title={title} to={to} />
  );
};

export default Node;
