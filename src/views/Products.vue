<template>
  <div class="products">
    <div class="productSettings">
      <label for="">Page:</label>
      <b-button v-on:click="handlePagination(-1)">&#8592; </b-button>
      <input class="pageInput" disabled v-bind:value="page" />
      <b-button v-on:click="handlePagination(1)">&#8594; </b-button>
      <label for="">Items per page:</label>
      <select v-model="limit" @change="handleLimitChange">
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

    <div class="productContainer" v-if="productData">
      <div class="productSpacingDiv" v-for="(item, index) in productData.data" 
        :key="index">
        <ProductCard
          :name="item.name"
          :productId="item.id"
          :data="item"
        />
      </div>
    </div>
    <ErrorMessage title="Error Loading Data" text="Check your internet connection and try again." v-else-if="error" />
    <ErrorMessage title="No More Items" text="Try going back a page!" v-else-if="productData && productData.length == 0" />
    <LoadingCircle v-else />
  </div>
</template>

<script>
import { getSTIFirestopProducts } from "../services/stiFirestopApi.js";
import ProductCard from "../components/ProductCard";
import LoadingCircle from "../components/LoadingCircle";
import ErrorMessage from "../components/ErrorMessage";

export default {
  name: "Products",
  components: {
    ProductCard,
    LoadingCircle,
    ErrorMessage,
  },
  data: () => {
    return {
      searchTerm: "",
      productData: null,
      page: 1,
      pages: [1, 2, 3, 4, 5, 6, 7],
      limit: 5,
      limitOptions: [5, 10, 25, 50],
      error: false,
    };
  },
  methods: {
    handleSearch: function() {
      console.log(this.page, this.limit, this.searchTerm);
      this.getProductDataFromApi();
    },
    handlePagination: function(n) {
      this.page += n;
      if (this.page < 0) {
        this.page = 0;
      } else if (this.productData?.length == 0) {
        this.page--;
      }else{
        this.getProductDataFromApi()
      }
    },
    handleLimitChange: function(){
      this.getProductDataFromApi()
    },

    getProductDataFromApi: function() {
        this.productData = null;
          this.error = false
      const queryOptions = {
        page: this.page,
        limit: this.limit,
        searchTerm: this.searchTerm,
      };
      getSTIFirestopProducts(queryOptions).then((res) => {
        this.productData = res.data;
      }).catch(err =>{
        if(err){
          this.error = true
        }
      })
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
.pageInput{
  width:20px;
}
.productContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.productSpacingDiv{
  width:33.3333333%;
  text-align: center;
  display:flex;
  justify-content:center;
}
</style>

      // <select v-model="page">
      //   <option
      //     v-for="(option, index) in pages"
      //     v-bind:value="option"
      //     v-bind:key="index"
      //   >
      //     {{ option }}
      //   </option>
      // </select>