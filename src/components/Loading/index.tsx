import Backdrop from "@mui/material/Backdrop";
import SvgIcon from "@mui/material/SvgIcon";

import type { ElementType } from "react";

type Modules = Recordable<ElementType>;

interface LoadingProps {
  loading: boolean;
}

const Empty: FC = () => <></>;

const Loading: FC<LoadingProps> = ({ loading }) => {
  const icon = useMemo(() => {
    if (!loading) return;

    const modules: Modules = import.meta.glob("~/icons/loading/*.svg", {
      as: "react",
      eager: !0,
      import: "default",
    });

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
        component={icon ?? Empty}
        inheritViewBox
        sx={{ display: "block", fontSize: 256 }}
      />
    </Backdrop>
  );
};

export default Loading;
