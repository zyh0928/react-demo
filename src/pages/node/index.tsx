import NodeChild from "./children";

interface NodeProps {
  [key: string]: unknown;
}

const Node: FC<NodeProps> = () => (
  <Box sx={{ padding: 3 }}>
    <Typography variant="h3">Node PAGE</Typography>

    <Outlet />
  </Box>
);

export default Node;

export { NodeChild };
