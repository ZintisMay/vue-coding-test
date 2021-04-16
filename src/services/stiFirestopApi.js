import axios from "axios";

async function querySTIFirestopApiForProducts({ page, limit, searchTerm }) {
  console.log("querySTIFirestopApiForProducts", page, limit, searchTerm);
  const url = querySTIFirestopApiForProductsUrl();
  return axios.get(url);

  function querySTIFirestopApiForProductsUrl() {
    let url = `https://api.stifirestop.com/products?load%5b%5d=images`;
    if (page >= 0) {
      url += `&page=${page}`;
    }
    if (limit >= 0) {
      url += `&limit=${limit}`;
    }
    if (searchTerm.length >= 0) {
      url += `&search=${searchTerm}`;
    }
    return url;
  }
}

export { querySTIFirestopApiForProducts };
