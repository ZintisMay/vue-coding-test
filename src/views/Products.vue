<template>
  <div class="products">
    <div class="spaceAround">
      <ProductCard
        v-for="(item, index) in productList.data"
        :key="index"
        :name="item.name"
        :data="item"
      />
    </div>
  </div>
</template>

<script>
import querySTIFirestopApiForProducts from "../services/stiFirestopApi.js";
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
    querySTIFirestopApiForProducts(1, 10).then((res) => {
      console.log("mounted product response", res);
    });
  },
  methods: {
    generateSTIFirestopApiCall: function() {},
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
