import { Box, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.navbarItemsContainer}>
        <Typography sx={styles.navbarItem}>Top Deals</Typography>
        <Typography sx={styles.navbarItem}>Deals of the Day</Typography>
        <Typography sx={styles.navbarItem}>Men</Typography>
        <Typography sx={styles.navbarItem}>Women</Typography>
        <Typography sx={styles.navbarItem}>Kids</Typography>
        <Typography sx={styles.navbarItem}>New</Typography>
        <Typography sx={styles.navbarItem}>Brands</Typography>
        <Typography sx={styles.navbarItem}>Sports</Typography>
        <Typography sx={styles.navbarItem}>Accessories</Typography>
        <Typography sx={{ ...styles.navbarItem, ...{ color: "#FFD800" } }}>
          Sale
        </Typography>
      </Box>
    </Box>
  );
};
const styles = {
  container: {
    backgroundColor: "#000",
    display: { xs: "none", md: "flex", lg: "flex" },
  },
  navbarItemsContainer: {
    flex: 1,
    margin: "1%",
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 50,
  },
  navbarItem: {
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
    "&:hover": {
      opacity: 0.8,
    },
  },
};
export default Navbar;
