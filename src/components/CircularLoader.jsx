import { Box, CircularProgress } from "@mui/material";

const CircularLoader = () => {
  return (
    <Box sx={styles.container}>
      <CircularProgress size={100} />
    </Box>
  );
};
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
  },
};
export default CircularLoader;
