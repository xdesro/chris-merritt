<template>
  <div class="app">
    <Nav />
    <nuxt />
    <BackgroundImage />
  </div>
</template>
<script>
import Nav from "~/components/Nav";
import BackgroundImage from "~/components/BackgroundImage";
export default {
  components: {
    Nav,
    BackgroundImage
  }
};
</script>