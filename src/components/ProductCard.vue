<template>
  <div>
    <b-card tag="article" class="productCard m-1 mt-4">
      <b-card-title class="cardTitle">
        {{ data.name }}
      </b-card-title>
      <div
        class="centeredBGImage"
        v-bind:style="{
          backgroundImage: 'url(' + data.images[0].urls.sm + ')',
        }"
      ></div>

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
    productId: Number,
    name: String,
    data: Object,
  },
  mounted() {
    this.getProductDataFromApi();
    console.log("data", this.data);
  },
  methods: {
    getProductDataFromApi: function() {
      console.log("getProductDataFromApi");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.centeredBGImage {
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 100%;
  height: 200px;
  margin-bottom: 20px;
}
.productCard {
  max-width: 300px;
}
.cardTitle {
  height: 6rem;
}
.cardImage {
  max-width: 100%;
}
.card-body {
  height: 460px;
}
</style>
