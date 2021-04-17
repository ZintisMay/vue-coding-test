<template>
  <div class="products">
    <div class="productSettings">
      <label for="">Page:</label>
      <select v-model="page">
        <option
          v-for="(option, index) in pages"
          v-bind:value="option"
          v-bind:key="index"
        >
          {{ option }}
        </option>
      </select>

      <label for="">Items per page:</label>
      <select v-model="limit">
        <option
          v-for="(option, index) in limitOptions"
          v-bind:value="option"
          v-bind:key="index"
        >
          {{ option }}
        </option>
      </select>

      <input v-model="searchTerm" placeholder="view all items..." />

      <button v-on:click="handleSearch">Search</button>
    </div>

    <div class="spaceAround" v-if="productData">
      <ProductCard
        v-for="(item, index) in productData.data"
        :key="index"
        :name="item.name"
        :productId="item.id"
        :data="item"
      />
    </div>
    <LoadingCircle v-else />
  </div>
</template>

<script>
import { getSTIFirestopProducts } from "../services/stiFirestopApi.js";
import ProductCard from "../components/ProductCard";
import LoadingCircle from "../components/LoadingCircle";
// import DUMMY_DATA from "../assets/dummyData.json";

export default {
  name: "Products",
  components: {
    ProductCard,
    LoadingCircle,
  },
  data: () => {
    return {
      searchTerm: "",
      productData: null,
      page: 1,
      pages: [1, 2, 3, 4, 5, 6, 7],
      limit: 5,
      limitOptions: [5, 10, 25, 50],
    };
  },
  methods: {
    handleSearch: function() {
      this.productData = null;
      console.log(this.page, this.limit, this.searchTerm);
      this.getProductDataFromApi();
    },

    getProductDataFromApi: function() {
      console.log("page, limit", this.page, this.limit);
      const queryOptions = {
        page: this.page,
        limit: this.limit,
        searchTerm: this.searchTerm,
      };
      getSTIFirestopProducts(queryOptions).then((res) => {
        this.productData = res.data;
      });
    },
  },
  mounted() {
    this.getProductDataFromApi();
  },
};
</script>

<style scoped>
label,
input {
  margin: 10px;
}
.spaceAround {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
