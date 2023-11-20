import { indigo } from "@mui/material/colors";

import type { FC } from "react";

const About: FC = () => {
  return (
    <Box sx={{ backgroundColor: indigo[500], height: 2000 }}>
      <Typography color="whitesmoke" variant="h3">
        ABOUT PAGE
      </Typography>
    </Box>
  );
};

export default About;
