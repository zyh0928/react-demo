import type { FC } from "react";

const Image = styled("img")({
  display: "block",
  margin: "0 auto",
  maxWidth: "100%",
});

interface NotFoundProps {
  code?: number;
}

const NotFound: FC<NotFoundProps> = ({ code = 404 }) => (
  <Box sx={({ spacing }) => ({ padding: spacing(3) })}>
    <Image src={`https://http.cat/${code}`} />
  </Box>
);

export default NotFound;
