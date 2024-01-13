import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { enUS, zhCN } from "@mui/material/locale";

import Header from "@/components/Header";
import Loading from "@/components/Loading";
import Sidebar from "@/components/Sidebar";
import { themes } from "@/styles";

import Common from "#/common";
import { langs } from "~/variables.json";

import type { Localization } from "@mui/material/locale";

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

const Content = styled(Box)({
  gridArea: "content",
  overflow: "hidden scroll",
});

const lng = langs[0].code;

const App: FC = () => {
  const { pathname } = useLocation();
  const { i18n } = useTranslation();

  const { loading } = useContext(Common);

  const [drawer, toggleDrawer] = useToggle(!0);

  const [mode, setMode] = useState("light");

  const theme = useMemo(() => {
    let locale: Localization = {};

    switch (i18n.language) {
      case "zh":
        locale = zhCN;
        break;
      case "en":
        locale = enUS;
        break;
    }

    return createTheme(themes[mode], locale);
  }, [mode, i18n.language]);

  useEffectOnce(() => {
    const theme = localStorage.getItem("$theme") ?? "light";

    setMode(theme);

    const [, locale] = pathname.split("/");

    const lang = langs.some(({ code }) => code === locale) ? locale : lng;

    i18n.changeLanguage(lang);
  });

  useUpdateEffect(() => {
    localStorage.setItem("$theme", mode);
  }, [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Container>
        <Header mode={mode} setMode={setMode} toggleDrawer={toggleDrawer} />

        <Sidebar drawer={drawer} />

        <Content component="main">
          <Outlet />
        </Content>

        <Loading loading={loading} />
      </Container>
    </ThemeProvider>
  );
};

export default App;
