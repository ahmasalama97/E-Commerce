import { Box, Typography } from "@mui/material";

const SaleComponent = () => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.SaleContainer}>
        <Typography sx={styles.navbarItem}>
          White Friday Sales Up To 70% Off
        </Typography>
      </Box>
    </Box>
  );
};
const styles = {
  container: {
    backgroundColor: "#2D2F87",
    display: "flex",
  },
  SaleContainer: {
    flex: 1,
    margin: "0.5%",
  },
  navbarItem: {
    color: "#fff",
    fontSize: "14px",
    cursor: "pointer",
    textAlign: "center",
  },
};
export default SaleComponent;
