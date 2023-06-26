import { Fragment, useState } from "react";
import { useQuery } from "react-query";
import { Box, Divider, Drawer, List, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "./../../images/logo.png";
import logoText from "./../../images/logoText.png";
import ProfileIcon from "./../../images/profileIcon.png";
import CartIcon from "./../../images/cartIcon.png";
import PromoCode from "./../../images/PromoCode.png";
import Ad from "./../../images/ads.png";
import Discount1 from "./../../images/discount1.png";
import Discount2 from "./../../images/discount2.png";
import SearchBox from "../../components/SearchBox";
import Slider from "../../components/Slider";
import SectionHeader from "../../components/SectionHeader";
import ItemsCard from "../../components/ItemsCard";
import Navbar from "../../components/Navbar";
import SaleComponent from "../../components/SaleComponent";
import CircularLoader from "../../components/CircularLoader";
import {
  BrandsImages_API,
  CategoriesImages_API,
  FeaturedItems_API,
  MostViewedItems_API,
  SliderImages_API,
} from "../../APIs/API";

const Home = () => {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <CloseIcon sx={{ paddingLeft: 2, paddingTop: 1, paddingBottom: 1 }} />
        <Divider />
        <Box sx={styles.respLogoContainer}>
          <img src={logo} alt="Logo Icon" style={styles.image} />
          <img
            src={logoText}
            alt="Logo Icon"
            style={{ ...styles.image, ...{ paddingLeft: 10, width: 120 } }}
          />
        </Box>
      </List>
      <Divider />
      <List>
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
      </List>
    </Box>
  );

  const {
    isLoading: isLoadingSliderImage,
    isSuccess: isSuccessSliderImage,
    data: SliderImages,
  } = useQuery("GetSliderImages", SliderImages_API, {
    refetchOnWindowFocus: true,
  });
  const {
    isLoading: isLoadingCategoriesImages,
    isSuccess: isSuccessCategoriesImages,
    data: CategoriesImages,
  } = useQuery("GetCategoriesImages", CategoriesImages_API, {
    refetchOnWindowFocus: true,
  });
  const {
    isLoading: isLoadingBrandsImages,
    isSuccess: isSuccessBrandsImages,
    data: BrandsImages,
  } = useQuery("GetBrandsImages", BrandsImages_API, {
    refetchOnWindowFocus: true,
  });

  const {
    isLoading: isLoadingFeaturedItems,
    isSuccess: isSuccessFeaturedItems,
    data: FeaturedItems,
  } = useQuery("GetFeaturedItems", FeaturedItems_API, {
    refetchOnWindowFocus: true,
  });

  const {
    isLoading: isLoadingMostViewedItems,
    isSuccess: isSuccessMostViewedItems,
    data: MostViewedItems,
  } = useQuery("GetMostViewedItems", MostViewedItems_API, {
    refetchOnWindowFocus: true,
  });

  const PromoCodes = [
    { key: 1, image: PromoCode },
    { key: 2, image: PromoCode },
    { key: 3, image: PromoCode },
  ];

  const Ads = [
    { key: 1, image: Ad },
    { key: 2, image: Ad },
    { key: 3, image: Ad },
  ];

  return (
    <>
      <SaleComponent />
      <Box sx={styles.headerContainer}>
        <Box sx={styles.logoContainer}>
          <img src={logo} alt="Logo Icon" style={styles.image} />
          <img
            src={logoText}
            alt="Logo Icon"
            style={{ ...styles.image, ...{ paddingLeft: 10, width: 120 } }}
          />
        </Box>
        <Box sx={styles.searchBoxContainer}>
          <SearchBox />
        </Box>
        <Box sx={styles.headerActionsContainer}>
          <Fragment>
            <MenuIcon
              sx={{ display: { xs: "block", md: "none", lg: "none" } }}
              onClick={toggleDrawer("left", true)}
            />
            <Drawer
              anchor={"left"}
              open={state["left"]}
              onClose={toggleDrawer("left", false)}
            >
              {list("left")}
            </Drawer>
          </Fragment>
          <Box>
            <Typography sx={styles.translation}>العربية</Typography>
          </Box>
          <Box sx={styles.headerActionsIconsContainer}>
            <Box>
              <img
                src={ProfileIcon}
                alt="Profile Icon"
                style={{
                  ...styles.image,
                  ...{
                    paddingLeft: 10,
                    paddingRight: 10,
                  },
                }}
              />
            </Box>
            <Box>
              <img
                src={CartIcon}
                alt="Cart Icon"
                style={{
                  ...styles.image,
                  ...{
                    paddingLeft: 10,
                    paddingRight: 10,
                  },
                }}
              />
            </Box>
          </Box>
        </Box>
        <Box sx={styles.responsiveSearchBoxContainer}>
          <SearchBox />
        </Box>
      </Box>
      <Navbar />
      {isLoadingSliderImage && <CircularLoader />}
      {!isLoadingSliderImage && isSuccessSliderImage && (
        <Slider
          images={SliderImages?.data?.results}
          imgStyle={styles.sliderImageStyle}
          showIndicators
        />
      )}

      <SectionHeader title="Main Categories" />
      <Box sx={styles.sliderContainer}>
        {isLoadingCategoriesImages && <CircularLoader />}
        {!isLoadingCategoriesImages && isSuccessCategoriesImages && (
          <Slider
            images={CategoriesImages?.data?.results}
            style={styles.sliderStyle}
            imgStyle={styles.categoriesImageStyle}
            centerMode
            showIndicators={false}
          />
        )}
      </Box>
      <Box>
        <Slider images={PromoCodes} showIndicators />
      </Box>
      <SectionHeader title="Popular Brands" />
      <Box sx={styles.sliderContainer}>
        {isLoadingBrandsImages && <CircularLoader />}
        {!isLoadingBrandsImages && isSuccessBrandsImages && (
          <Slider
            images={BrandsImages?.data?.results}
            style={styles.sliderStyle}
            imgStyle={{
              ...styles.sliderImageStyle,
              ...styles.brandsImage,
            }}
            centerMode
            showIndicators={false}
            bg
          />
        )}
      </Box>
      <Box>
        <Slider images={Ads} showIndicators />
      </Box>
      <SectionHeader title="Featured Items" />
      <Box sx={styles.itemsContainer}>
        {isLoadingFeaturedItems && <CircularLoader />}
        {!isLoadingFeaturedItems &&
          isSuccessFeaturedItems &&
          FeaturedItems?.data?.results?.map((item) => {
            return (
              <Box key={item?.key} sx={styles.itemsCard}>
                <ItemsCard
                  img={item?.image}
                  title={item?.name}
                  price={item?.price_before_sale}
                  offer={item?.price_before_sale - item?.price_after_sale}
                />
              </Box>
            );
          })}
      </Box>
      <SectionHeader title="Most Viewed items" />
      <Box sx={styles.itemsContainer}>
        {isLoadingMostViewedItems && <CircularLoader />}
        {!isLoadingMostViewedItems &&
          isSuccessMostViewedItems &&
          MostViewedItems?.data?.results?.map((item) => {
            return (
              <Box key={item?.key} sx={styles.itemsCard}>
                <ItemsCard
                  img={item?.image}
                  title={item?.name}
                  price={item?.price_before_sale}
                  offer={item?.price_before_sale - item?.price_after_sale}
                />
              </Box>
            );
          })}
      </Box>
      <Box sx={styles.discountContainer}>
        <img src={Discount1} style={styles.discountImage} alt="discount" />
        <img src={Discount2} style={styles.discountImage} alt="discount" />
      </Box>
      <Divider />
      <Box sx={styles.footer}>
        <Box>
          <Typography variant="h6" sx={styles.footerNavTitle}>
            Active Trending
          </Typography>
          <Typography variant="h6" sx={styles.footerNav}>
            Men
          </Typography>
          <Typography variant="h6" sx={styles.footerNav}>
            Women
          </Typography>
          <Typography variant="h6" sx={styles.footerNav}>
            Kids
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" sx={styles.footerNavTitle}>
            About Us
          </Typography>
          <Typography variant="h6" sx={styles.footerNav}>
            About Company
          </Typography>
          <Typography variant="h6" sx={styles.footerNav}>
            Connect Us
          </Typography>
          <Typography variant="h6" sx={styles.footerNav}>
            Our Branches
          </Typography>
        </Box>
        <Box></Box>
      </Box>
      <Divider />
      <Typography variant="h6" sx={styles.copyright}>
        Copyright © 2022 All Rights Reserved
      </Typography>
    </>
  );
};

const styles = {
  headerContainer: {
    display: "flex",
    flexDirection: {
      xs: "column",
      md: "row",
      lg: "row",
    },
    justifyContent: "space-between",
    margin: 5,
  },
  logoContainer: {
    alignSelf: "center",
    display: { xs: "none", md: "flex", lg: "flex" },
  },
  respLogoContainer: {
    paddingLeft: 2,
    paddingTop: 1,
    alignSelf: "center",
    display: { xs: "flex", md: "none", lg: "none" },
  },
  image: {
    width: 30,
    height: 30,
  },
  searchBoxContainer: {
    display: { xs: "none", md: "flex", lg: "flex" },
    width: "60%",
  },
  responsiveSearchBoxContainer: {
    display: { xs: "flex", md: "none", lg: "none" },
    width: "100%",
  },
  headerActionsContainer: {
    display: "flex",
    alignSelf: "center",
    justifyContent: "space-between",
    width: { xs: "100%", md: "10%", lg: "10%" },
  },
  translation: {
    width: "100%",
    fontWeight: 500,
    alignSelf: "center",
    fontSize: 20,
    color: "#702283",
    fontFamily: "system-ui",
    display: { xs: "none", md: "block", lg: "block" },
  },
  headerActionsIconsContainer: {
    display: "flex",
  },
  sliderContainer: {
    marginBottom: 10,
  },
  sliderStyle: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  sliderImageStyle: {
    height: 540,
  },
  categoriesImageStyle: {
    width: "50%",
  },
  brandsImage: {
    display: "block",
    width: "100%",
    height: "auto",
  },
  itemsContainer: {
    display: "flex",
    flexWrap: "nowrap",
    "overflow-x": "scroll",
  },
  itemsCard: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
  },
  discountContainer: {
    display: "flex",
    justifyContent: "space-between",
    padding: 5,
  },
  discountImage: {
    width: "48%",
  },
  footer: {
    display: "flex",
    justifyContent: { xs: "end", md: "space-between", lg: "space-between" },
    paddingBottom: 10,
  },
  footerNavTitle: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    color: "#2E2E2E",
    fontSize: "22px",
    fontWeight: "600",
  },
  footerNav: {
    paddingLeft: 10,
    paddingTop: 2,
    color: "#2E2E2E",
    fontSize: "16px",
    cursor: "pointer",
    "&:hover": {
      color: "#2D2F7D",
      opacity: 0.8,
    },
  },
  copyright: {
    fontSize: "12px",
    color: "#2E2E2E",
    paddingTop: 3,
    paddingBottom: 3,
    textAlign: "center",
  },
  navbarItem: {
    paddingLeft: 2,
    paddingTop: 1,
    color: "#000",
    fontSize: "16px",
    cursor: "pointer",
    "&:hover": {
      opacity: 0.8,
    },
  },
};

export default Home;
