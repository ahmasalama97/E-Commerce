import { Box, useMediaQuery } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ArrowRight from "../images/right.png";
import ArrowLeft from "../images/left.png";
import ImageBG from "../images/imageBG.png";

const Slider = ({ images, imgStyle, centerMode, showIndicators, bg }) => {
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <Carousel
      infiniteLoop
      showThumbs={false}
      interval="5000"
      centerMode={centerMode}
      centerSlidePercentage={200 / 6}
      showIndicators={showIndicators}
      renderArrowNext={(clickHandler, hasNext) =>
        hasNext && (
          <div onClick={clickHandler} style={styles.arrowNextContainer}>
            <img style={styles.arrow} src={ArrowRight} alt="arrow right" />
          </div>
        )
      }
      renderArrowPrev={(clickHandler, hasPrev) =>
        hasPrev && (
          <div onClick={clickHandler} style={styles.arrowPrevContainer}>
            <img style={styles.arrow} src={ArrowLeft} alt="arrow left" />
          </div>
        )
      }
    >
      {images?.map((i) => {
        return (
          <Box sx={bg ? { ...styles.container } : null}>
            {bg && <img src={ImageBG} style={imgStyle} alt="bgImage" />}
            <img
              src={i.image}
              style={
                bg
                  ? {
                      ...styles.overlay,
                      imgStyle,
                      ...{ padding: matches ? 50 : 10 },
                    }
                  : imgStyle
              }
              alt="sliderImage"
            />
          </Box>
        );
      })}
    </Carousel>
  );
};

const styles = {
  overlay: {
    position: "absolute",
    bottom: "10px",
    width: "50%",
    transition: ".5s ease",
    opacity: 1,
    color: "#fff",
    fontSize: "20px",
    textAlign: "center",
  },

  container: {
    display: "inline-flex",
    width: "50%",
  },
  arrowNextContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 50,
    zIndex: 20,
    cursor: "pointer",
  },
  arrowPrevContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 50,
    zIndex: 20,
    cursor: "pointer",
  },
  arrow: {
    height: "30px",
    width: "30px",
  },
};

export default Slider;
