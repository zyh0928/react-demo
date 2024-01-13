import Backdrop from "@mui/material/Backdrop";
import SvgIcon from "@mui/material/SvgIcon";

import type { ElementType } from "react";

type Modules = Recordable<ElementType>;

const modules: Modules = import.meta.glob("~/icons/loading/*.svg", {
  as: "react",
  eager: !0,
  import: "default",
});

interface LoadingProps {
  loading: boolean;
}

const Loading: FC<LoadingProps> = ({ loading }) => {
  const icon = useMemo(() => {
    if (!loading) return;

    const keys = Object.keys(modules);

    if (!keys.length) return;

    const key = keys[Math.floor(Math.random() * keys.length)];

    return modules[key];
  }, [loading]);

  return (
    <Backdrop
      open={loading}
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <SvgIcon
        component={icon ?? (() => <></>)}
        inheritViewBox
        sx={{ display: "block", fontSize: 256 }}
      />
    </Backdrop>
  );
};

export default Loading;
