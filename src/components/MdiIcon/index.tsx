import Icon from "@mui/material/Icon";

import type { IconProps } from "@mui/material";

interface MdiIconProps {
  name?: string;
  props?: IconProps;
}

const MdiIcon: FC<MdiIconProps> = ({ name = "", props }) => (
  <Icon
    baseClassName="mdi"
    className={`mdi-${name}`}
    sx={{ lineHeight: 1 }}
    {...props}
  />
);

export default MdiIcon;
