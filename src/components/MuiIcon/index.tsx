import Icon from "@mui/material/Icon";

import type { IconProps } from "@mui/material";

interface MuiIconProps {
  name: string;
  props?: IconProps;
}

const MuiIcon: FC<MuiIconProps> = ({ name, props }) => (
  <Icon
    baseClassName="mdi"
    className={`mdi-${name}`}
    sx={{ lineHeight: 1 }}
    {...props}
  />
);

export default MuiIcon;
