import axios from "axios";

const axiosheaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const SliderImages_API = (axiosdata) => {
  const axiosfetch = axios({
    method: "get",
    url: `https://api-task.bit68.com/en/api/slider_image/`,
    headers: axiosheaders,
    data: axiosdata,
  });
  return axiosfetch;
};

export const CategoriesImages_API = (axiosdata) => {
  const axiosfetch = axios({
    method: "get",
    url: `https://api-task.bit68.com/en/api/categories/`,
    headers: axiosheaders,
    data: axiosdata,
  });
  return axiosfetch;
};

export const BrandsImages_API = (axiosdata) => {
  const axiosfetch = axios({
    method: "get",
    url: `https://api-task.bit68.com/en/api/brands/`,
    headers: axiosheaders,
    data: axiosdata,
  });
  return axiosfetch;
};

export const FeaturedItems_API = (axiosdata) => {
  const axiosfetch = axios({
    method: "get",
    url: `https://api-task.bit68.com/en/api/items?type=featured`,
    headers: axiosheaders,
    data: axiosdata,
  });
  return axiosfetch;
};

export const MostViewedItems_API = (axiosdata) => {
  const axiosfetch = axios({
    method: "get",
    url: `https://api-task.bit68.com/en/api/items?type=most_viewed`,
    headers: axiosheaders,
    data: axiosdata,
  });
  return axiosfetch;
};
