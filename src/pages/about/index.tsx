import SvgIcon from "@/components/SvgIcon";

import Common from "#/common";

const About: FC = () => {
  const { setLoading } = useContext(Common);

  const [id, setId] = useState("");
  const [icons, setIcons] = useState<string[]>([]);
  const [menuEl, setMenuEl] = useState<HTMLElement | null>(null);
  const [icon, setIcon] = useState("");

  const open = useMemo(() => Boolean(menuEl), [menuEl]);

  const getId = () => Math.floor(Date.now() / 1000).toString(36);

  const showLoading = () => {
    setLoading(!0);

    setTimeout(() => {
      setLoading(!1);
    }, 3000);
  };

  useEffect(() => {
    const regex = /.*\/icons\/loading\/(.*)\.svg/;

    const modules = import.meta.glob("~/icons/loading/*.svg", {
      eager: !0,
    });

    const icons: string[] = [];

    Object.keys(modules).forEach((key) => {
      const matches = key.match(regex);

      if (matches) {
        icons.push(matches[1]);
      }
    });

    setIcons(icons);
  }, []);

  return (
    <Box sx={{ padding: 3 }}>
      <Stack
        alignItems="center"
        direction="row"
        spacing={2}
        sx={{ marginBottom: 2 }}
      >
        <Button
          aria-controls={open ? "basic-menu" : void 0}
          aria-expanded={open}
          aria-haspopup
          color="primary"
          id="basic-btn"
          onClick={({ currentTarget }) => setMenuEl(currentTarget)}
          variant="contained"
        >
          icon
        </Button>

        <Button color="secondary" onClick={showLoading} variant="outlined">
          global
        </Button>

        <Button onClick={setId.bind(null, getId())} variant="outlined">
          generate
        </Button>

        {id && <Typography variant="h5">{id}</Typography>}

        <Menu
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          anchorEl={menuEl}
          id="basic-menu"
          onClose={setMenuEl.bind(null, null)}
          open={open}
        >
          {icons.map((icon, idx) => (
            <MenuItem
              key={idx}
              onClick={setIcon.bind(null, `loading/${icon}`)}
              value={icon}
            >
              {icon}
            </MenuItem>
          ))}
        </Menu>
      </Stack>

      {icon && (
        <SvgIcon
          name={icon}
          props={{
            sx: {
              backgroundColor: "divider",
              fontSize: 400,
            },
          }}
        />
      )}
    </Box>
  );
};

export default About;
