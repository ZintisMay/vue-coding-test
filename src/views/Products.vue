<template>
  <div class="products">
    Products
    {{ page }}
    {{ limit }}
    <b-row>
      <ProductCard
        v-for="(item, index) in productList.data"
        :key="index"
        :name="item.name"
        :data="item"
      />
    </b-row>
  </div>
</template>

<script>
import axios from "axios";
import ProductCard from "../components/ProductCard";
import DUMMY_DATA from "../assets/dummyData.json";

export default {
  name: "Products",
  components: {
    ProductCard,
  },
  data: () => {
    return {
      productList: DUMMY_DATA,
      page: 0,
      limit: 10,
    };
  },
  mounted() {
    console.log(this.productList);
    const url = this.generateSTIFirestopApiCall();
    console.log("url", url);
    axios.get(url).then((response) => {
      console.log(response);
      this.productList = response;
    });
  },
  methods: {
    generateSTIFirestopApiCall: function() {
      let url = `https://api.stifirestop.com/products?load%5b%5d=images`;
      if (this.page >= 0) {
        url += `&page=${this.page}`;
      }
      if (this.limit) {
        url += `&limit=${this.limit}`;
      }
      return url;
    },
  },
};
</script>
