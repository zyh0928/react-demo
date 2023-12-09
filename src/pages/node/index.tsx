import NodeOne from "./children/One";
import NodeTwo from "./children/Two";

import type { FC } from "react";

interface NodeProps {
  [key: string]: unknown;
}

const Node: FC<NodeProps> = () => {
  return (
    <Box sx={{ backgroundColor: "darkgrey" }}>
      NODE PAGE
      <Outlet />
    </Box>
  );
};

export default Node;

export { NodeOne, NodeTwo };
