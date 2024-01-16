import SvgIcon from "@mui/material/SvgIcon";

import type { SvgIconProps } from "@mui/material";
import type { ElementType } from "react";

const modules: StrMap<ElementType> = import.meta.glob("~/icons/**/*.svg", {
  as: "react",
  eager: !0,
  import: "default",
});

interface IconProps {
  name?: string;
  props?: SvgIconProps;
  size?: StrNum;
}

const Icon: FC<IconProps> = ({ name = "", props, size }) => {
  const icon = useMemo(() => {
    const path = `/src/assets/icons/${name}.svg`;

    return modules[path];
  }, [name]);

  return (
    <SvgIcon
      component={icon ?? (() => <></>)}
      inheritViewBox
      sx={{ display: "block", fontSize: size }}
      {...props}
    />
  );
};

export default Icon;
