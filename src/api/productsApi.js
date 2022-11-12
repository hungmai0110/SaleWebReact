import axiosClient from "./axiosClient";

const productsApi = {
  getProducts() {
    const url = "/products";
    return axiosClient.get(url);
  },
  getPromoProduct() {
    const url = `/products?tag=promo`;
    return axiosClient.get(url);
  },
  getSellingProduct() {
    const url = `/products?tag=bestsell`;
    return axiosClient.get(url);
  },
  getProductById(id) {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },
  getProductsSort(sort) {
    const url = `/products?_sort=promo_price&_order=${sort}`;
    return axiosClient.get(url);
  },
  getProductsSearch(value) {
    const url = `/products?q=${value}`;
    return axiosClient.get(url);
  },
};

export default productsApi;
