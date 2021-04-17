<template>
  <div class="product">
    <b-link class="link" v-bind:to="'/'">
      <h4>&larr; BACK</h4>
    </b-link>

    <b-jumbotron class="jumbo" v-if="product.name">
      <h1>{{ product.name }}</h1>

      <div
        class="centeredBGImage"
        v-bind:style="{
          backgroundImage: 'url(' + productImage + ')',
        }"
      ></div>
      <a class="productButton" v-bind:href="productLink" target="_blank"
        ><b-button class="productPageButton">See on STI</b-button></a
      >
      <p>{{ product.description }}</p>
    </b-jumbotron>
    <ErrorMessage title="Error Loading Data" v-else-if="error" />
    <LoadingCircle v-else />
  </div>
</template>

<script>
import { getSingleProductById } from "../services/stiFirestopApi.js";
import LoadingCircle from "../components/LoadingCircle";
import ErrorMessage from "../components/ErrorMessage";

const STI_ROOT_URL = "https://www.stifirestop.com/la/en/products/";

export default {
  name: "Product",
  components: {
    LoadingCircle,
    ErrorMessage,
  },
  data: () => {
    return {
      product: {},
      productImage: null,
      productLink: null,
      error: false,
    };
  },
  mounted() {
    getSingleProductById(this.$route.params.id)
      .then((res) => {
        const data = res?.data?.data;
        this.product = data;
        this.productImage = data?.images?.[0]?.urls?.lg;
        this.productLink = STI_ROOT_URL + data?.slug;
      })
      .catch((err) => {
        if (err) {
          this.error = true;
        }
      });
  },
};
</script>

<style scoped>
.jumbo > * {
  margin-bottom: 30px;
}
.centeredBGImage {
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-color: rgba(255, 255, 255, 1);
  width: 100%;
  height: 400px;
  margin-bottom: 20px;
}
.link {
  color: black;
  text-decoration: none;
  margin: 0px;
  padding: 3px;
}
.productButton {
  position: relative;
  bottom: 80px;
  left: 10px;
}
h4 {
  margin: 0;
}
.bigImage {
  width: 100%;
}
</style>
