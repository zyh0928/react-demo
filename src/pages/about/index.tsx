const About: FC = () => {
  const data = useLocation();

  return (
    <Box sx={{ minHeight: 1200 }}>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Box>
  );
};

export default About;
