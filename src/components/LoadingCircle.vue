<template>
  <div class="centered">
    <img src="/images/loadingCircle.gif" />
  </div>
</template>

<script>
export default {
  name: "LoadingCircle",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.centered {
  margin-top: 10vh;
  display: flex;
  justify-content: center;
}
img {
  height: 200px;
  width: 200px;
}
</style>
