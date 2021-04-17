<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand
        ><b-link class="link" v-bind:to="'/'"
          >STI FIRESTOP</b-link
        ></b-navbar-brand
      >
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style>
.link {
  margin: 10px;
  color: white;
  font-size: 24px;
}
</style>
