import { Typography, useMediaQuery } from "@mui/material";

const SectionHeader = ({ title }) => {
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <Typography
      variant="h4"
      sx={{
        ...styles.container,
        ...{ fontSize: matches ? 30 : 16, paddingLeft: matches ? 10 : 3 },
      }}
    >
      {title}
    </Typography>
  );
};
const styles = {
  container: {
    paddingTop: 5,
    paddingBottom: 5,
    fontFamily: "SF Pro Display",
    fontWeight: "bold",
    color: "#2D2F78",
    textAlign: "left",
  },
};
export default SectionHeader;
