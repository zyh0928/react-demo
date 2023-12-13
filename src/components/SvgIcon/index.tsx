import SvgIcon from "@mui/material/SvgIcon";

// import getAssetsFile from "@/utils/getAssetsFile";

import type { SvgIconProps } from "@mui/material";
import type { ComponentProps } from "react";

interface IconType {
  default: ComponentProps<"svg">;
}

type Modules = Record<string, IconType | undefined>;

interface MdiIconProps {
  name?: string;
  props?: SvgIconProps;
  size?: GenericScalar;
}

const MdiIcon: FC<MdiIconProps> = ({ name = "", props, size }) => {
  const icon = useMemo(() => {
    const path = `/src/assets/icons/${name}.svg`;

    const modules: Modules = import.meta.glob("~/icons/**/*.svg", {
      as: "react",
      eager: !0,
    });

    return modules[path]?.default;
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

export default MdiIcon;
