<template>
  <main class="main">
    <Intro />
    <!-- <Blog /> -->
  </main>
</template>

<script>
import Intro from "~/components/Intro";
import Blog from "~/components/Blog";
export default {
  components: { Intro, Blog },
  mounted() {
    // this.$router.push({ path: "#intro" });
  }
};
</script>