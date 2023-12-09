import type { FC } from "react";

const NotFound: FC = () => {
  const { t } = useTranslation("common");

  return (
    <Box sx={({ spacing }) => ({ padding: spacing(3) })}>
      <Typography align="center" variant="h3">
        {t("error.404")}
      </Typography>
    </Box>
  );
};

export default NotFound;
