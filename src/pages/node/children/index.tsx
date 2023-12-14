import * as colors from "@mui/material/colors";

const NodeChild: FC = () => {
  const { title } = useParams();
  const [color, setColor] = useState("");

  const changeColor = () => {
    const color = Object.keys(colors).sort(() => Math.random() - 0.5)[0];

    setColor(color);
  };

  useUpdateEffect(changeColor, [title]);

  useEffect(changeColor, []);

  return (
    <Box bgcolor={color} sx={{ padding: 3 }}>
      <Typography variant="h5">Node Child: {title}</Typography>

      {JSON.stringify(color)}
    </Box>
  );
};

export default NodeChild;
