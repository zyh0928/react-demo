import SvgIcon from "@mui/material/SvgIcon";

import type { SvgIconProps } from "@mui/material";
import type { ComponentProps } from "react";

type Modules = Recordable<ComponentProps<"svg"> | undefined>;

interface IconProps {
  name?: string;
  props?: SvgIconProps;
  size?: GenericScalar;
}

const Icon: FC<IconProps> = ({ name = "", props, size }) => {
  const icon = useMemo(() => {
    const path = `/src/assets/icons/${name}.svg`;

    const modules: Modules = import.meta.glob("~/icons/**/*.svg", {
      as: "react",
      eager: !0,
      import: "default",
    });

    return modules[path];
  }, [name]);

  return (
    <SvgIcon
      component={icon}
      inheritViewBox
      sx={{ display: "block", fontSize: size }}
      {...props}
    />
  );
};

export default Icon;
