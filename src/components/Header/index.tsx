import { AppBar } from "@mui/material";
import { blue, yellow } from "@mui/material/colors";
import { useTitle } from "react-use";

import SvgIcon from "@/components/SvgIcon";

import Common from "#/common";
import { langs } from "~/variables.json";

const ModeSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase": {
    "&.Mui-checked": {
      "& + .MuiSwitch-track": {
        backgroundColor: blue[300],
        opacity: 1,
      },
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff",
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      color: "#fff",
      transform: "translateX(22px)",
    },
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
  },
  "& .MuiSwitch-thumb": {
    "&:before": {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#000",
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      content: "''",
      height: "100%",
      left: 0,
      position: "absolute",
      top: 0,
      width: "100%",
    },
    backgroundColor: theme.palette.mode === "dark" ? blue.A700 : yellow.A700,
    height: 32,
    width: 32,
  },
  "& .MuiSwitch-track": {
    backgroundColor: yellow[100],
    borderRadius: 10,
    opacity: 1,
  },
  height: 34,
  padding: 7,
  width: 62,
}));

interface HeaderProps {
  mode: string;
  setMode: (mode: string) => void;
  toggleDrawer: () => void;
}

const Header: FC<HeaderProps> = ({ mode, setMode, toggleDrawer }) => {
  const navigate = useNavigate();
  const { i18n, t } = useTranslation<"a" | "b">();
  const { pathname } = useLocation();

  const { menus } = useContext(Common);

  const [current, setCurrent] = useState<MenuType>();
  const [menuEl, setMenuEl] = useState<HTMLElement | null>(null);

  const open = useMemo(() => Boolean(menuEl), [menuEl]);

  const toggleLang = (lng: string) => () => {
    i18n.changeLanguage(lng);

    const route = pathname.split("/").slice(2).join("/");

    navigate(`/${lng}/${route}`, { replace: !0 });
  };

  const getCurrentMenu = useCallback(
    (paths: string[]) => {
      if (!paths.length) return;

      let node = menus.find((item) => item.route === paths[0]);

      paths.slice(1).forEach((path) => {
        node = node?.children?.find((item) => item.route === path) ?? node;
      });

      return node;
    },
    [menus],
  );

  useTitle(current?.label?.[i18n.language] || t("common:error.404"));

  useEffect(() => {
    const paths = pathname.split("/").slice(2);

    const current = getCurrentMenu(paths);

    setCurrent(current);
  }, [pathname, getCurrentMenu]);

  return (
    <AppBar position="relative" sx={{ gridArea: "header" }}>
      <Toolbar variant="dense">
        <IconButton
          aria-label="open drawer"
          color="inherit"
          edge="start"
          onClick={toggleDrawer}
          sx={{ mr: 3 }}
        >
          <MdiIcon name="menu" />
        </IconButton>

        <Typography flexGrow="1" noWrap variant="h5">
          {current?.label?.[i18n.language] || t("common:error.404")}
        </Typography>

        <Stack alignItems="center" direction="row" spacing={3} useFlexGap>
          <ModeSwitch
            checked={mode === "dark"}
            onChange={(_, checked) => setMode(checked ? "dark" : "light")}
          />

          <IconButton
            aria-controls={open ? "i18n-menu" : void 0}
            aria-expanded={open}
            aria-haspopup
            color="inherit"
            id="i18n-btn"
            onClick={({ currentTarget }) => setMenuEl(currentTarget)}
          >
            <MdiIcon name="translate" />
          </IconButton>

          <Menu
            MenuListProps={{
              "aria-labelledby": "i18n-btn",
            }}
            anchorEl={menuEl}
            id="i18n-menu"
            onClose={setMenuEl.bind(null, null)}
            open={open}
          >
            {langs.map(({ code, label }, idx) => (
              <MenuItem key={idx} onClick={toggleLang(code)}>
                <ListItemIcon>
                  <SvgIcon name={code} />
                </ListItemIcon>

                <ListItemText>{label}</ListItemText>
              </MenuItem>
            ))}
          </Menu>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
