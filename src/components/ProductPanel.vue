<template>
  <div>
    <b-card tag="article" class="productCard m-1 mt-4">
      <b-card-title class="cardTitle">
        {{ data.name }}
      </b-card-title>
      <img class="cardImage" v-bind:src="data.images[0].urls.sm" />
      <b-card-text>
        {{ data.short_description.slice(0, 60).concat("...") }}
      </b-card-text>
      <b-link v-bind:to="'/products/' + data.id">
        <b-button variant="primary">See Product</b-button>
      </b-link>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    productId: String,
    name: String,
    data: Object,
  },
  mounted() {
    this.getProductDataFromApi();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.productCard {
  max-width: 300px;
}
.cardTitle {
  height: 100px;
}
.cardImage {
  max-width: 100%;
}
.card-body {
  height: 400px;
}
</style>
