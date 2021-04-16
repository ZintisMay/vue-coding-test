<template>
  <div class="products">
    <div class="productSettings">
      <select v-model="page">
        <option
          v-for="(option, index) in pages"
          v-bind:value="option"
          v-bind:key="index"
        >
          {{ option }}
        </option>
      </select>

      <select v-model="limit">
        <option
          v-for="(option, index) in limitOptions"
          v-bind:value="option"
          v-bind:key="index"
        >
          {{ option }}
        </option>
      </select>

      <input v-model="searchTerm" />

      <button v-on:click="handleClick">Search</button>
    </div>
    <div class="spaceAround">
      <ProductCard
        v-for="(item, index) in productData.data"
        :key="index"
        :name="item.name"
        :data="item"
      />
    </div>
  </div>
</template>

<script>
import { querySTIFirestopApiForProducts } from "../services/stiFirestopApi.js";
import ProductCard from "../components/ProductCard";
// import DUMMY_DATA from "../assets/dummyData.json";

export default {
  name: "Products",
  components: {
    ProductCard,
  },
  data: () => {
    return {
      searchTerm: "",
      productData: {},
      page: 1,
      pages: [1, 2, 3, 4, 5, 6, 7],
      limit: 5,
      limitOptions: [5, 10, 25, 50],
    };
  },
  methods: {
    handleClick: function() {
      console.log(this.page, this.limit, this.searchTerm);
      this.getSetProductData();
    },

    submit() {
      alert("Submit Form");
    },
    getSetProductData: function() {
      console.log("page, limit", this.page, this.limit);
      const queryOptions = {
        page: this.page,
        limit: this.limit,
        searchTerm: this.searchTerm,
      };
      querySTIFirestopApiForProducts(queryOptions).then((res) => {
        this.productData = res.data;
      });
    },
  },
  mounted() {
    this.getSetProductData();
  },
};
</script>

<style scoped>
.spaceAround {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
