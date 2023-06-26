import { Box, Typography } from "@mui/material";

const ItemsCard = ({ img, title, price, offer }) => {
  return (
    <Box>
      <img src={img} style={styles.image} alt="itemImage" />
      <Box sx={styles.container}>
        <Typography variant="subtitle1" sx={styles.title}>
          {title}
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Typography
            variant="h3"
            sx={{
              ...styles.price,
              ...{
                color: offer !== 0 ? "#BA0829" : "#2D2F7D",
              },
            }}
          >
            EGP {price}
          </Typography>
          {offer !== 0 && (
            <Typography variant="h6" sx={styles.offer}>
              Save {offer}
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};

const styles = {
  image: {
    width: "180px",
    height: "176px",
  },
  container: {
    width: "100%",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "ui-monospace",
  },
  price: {
    alignSelf: "flex-end",
    fontWeight: "bold",
    width: "130px",
    fontSize: 28,
  },
  offer: {
    color: "#BA0829",
    alignSelf: "flex-end",
    fontWeight: "bold",
    paddingLeft: 2,
    width: "70px",
    fontSize: 16,
  },
};

export default ItemsCard;
