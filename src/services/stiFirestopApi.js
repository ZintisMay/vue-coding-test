import axios from "axios";

async function querySTIFirestopApiForProducts() {
  console.log("querySTIFirestopApiForProducts");
  const url = querySTIFirestopApiForProductsUrl();

  return axios.get(url);
}

function querySTIFirestopApiForProductsUrl(page, limit) {
  console.log("querySTIFirestopApiForProductsUrl", page, limit);
  let url = `https://api.stifirestop.com/products?load%5b%5d=images`;
  if (page >= 0) {
    url += `&page=${page}`;
  }
  if (limit >= 0) {
    url += `&limit=${limit}`;
  }
  return url;
}

export default querySTIFirestopApiForProducts;
