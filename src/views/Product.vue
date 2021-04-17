<template>
  <div class="product">
    <h1>PRODUCT ID: {{ $route.params.id }}</h1>
    <b-jumbotron v-if="product.name">
      <h1>{{ product.name }}</h1>
      <img class="bigImage" v-bind:src="productImage" />
      <p>{{ product.description }}</p>
    </b-jumbotron>
    <LoadingCircle v-else />
  </div>
</template>

<script>
// @ is an alias to /src
import { getSingleProductById } from "../services/stiFirestopApi.js";
import LoadingCircle from "../components/LoadingCircle";

export default {
  name: "Product",
  components: {
    LoadingCircle,
  },
  data: () => {
    return {
      product: {},
      productImage: null,
    };
  },
  mounted() {
    console.log("product id", this.$route.params.id);
    getSingleProductById(this.$route.params.id).then((res) => {
      this.product = res.data.data;
      this.productImage = res.data.data.images[0].urls.lg;
      console.log("product.vue res", res.data.data);
    });
  },
};
</script>

<style scoped>
.bigImage {
  width: 100%;
}
</style>
