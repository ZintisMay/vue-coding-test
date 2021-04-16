<template>
  <div>
    <b-card
      title="Card Title"
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >
      <img class="cardImage" v-bind:src="data.images[0].urls.sm" />
      <b-card-text>
        {{ data.name }}
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cardImage {
  width: 100%;
}
</style>
