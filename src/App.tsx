import CssBaseline from "@mui/material/CssBaseline";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import { Outlet } from "react-router-dom";

import { themes } from "@/styles";

import MyHeader from "#/MyHeader";
import MySidebar from "#/MySidebar";

import type { FC } from "react";

const Container = styled(Box)(({ theme }) => ({
  "& ::-webkit-scrollbar": {
    height: 6,
    width: 6,
  },
  "& ::-webkit-scrollbar-thumb": {
    "&:hover": {
      background: theme.palette.primary.light,
      cursor: "pointer",
    },
    background: theme.palette.primary.main,
  },
  "& ::-webkit-scrollbar-track": {
    background: theme.palette.divider,
  },
  display: "grid",
  gridTemplate: `auto 1fr / auto 1fr`,
  gridTemplateAreas: `
    "header header"
    "sidebar content"
  `,
  height: "100%",
}));

const Content = styled(Box)(({ theme }) => ({
  gridArea: "content",
  overflow: "hidden auto",
  padding: theme.spacing(2, 3),
}));

const App: FC = () => {
  const [open, toggleDrawer] = useToggle(!0);

  const [mode, setMode] = useState<ThemeMode>("light");

  const theme = useMemo(() => themes[mode], [mode]);

  useUpdateEffect(() => {
    localStorage.setItem("$theme", mode);
  }, [mode]);

  useEffect(() => {
    const theme = localStorage.getItem("$theme") ?? "light";

    setMode(theme as ThemeMode);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Container>
        <MyHeader mode={mode} setMode={setMode} toggleDrawer={toggleDrawer} />

        <MySidebar open={open} />

        <Content>
          <Outlet />
        </Content>
      </Container>
    </ThemeProvider>
  );
};

export default App;
