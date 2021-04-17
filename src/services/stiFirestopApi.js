import axios from "axios";

async function getSingleProductById(id) {
  const url = `https://api.stifirestop.com/products/${id}?load%5b%5d=images`;
  return axios.get(url);
}

async function getSTIFirestopProducts({ page, limit, searchTerm }) {
  const url = generateProductsUrlWithQueries();
  return axios.get(url);

  function generateProductsUrlWithQueries() {
    let url = `https://api.stifirestop.com/products?load%5b%5d=images`;
    if (page >= 0) {
      url += `&page=${page}`;
    }
    if (limit >= 0) {
      url += `&limit=${limit}`;
    }
    if (searchTerm.trim().length >= 0) {
      url += `&search=${searchTerm}`;
    }
    return url;
  }
}

export { getSTIFirestopProducts, getSingleProductById };
