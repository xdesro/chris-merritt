<template>
  <main class="main">
    <Header />
    <!-- <Blog /> -->
  </main>
</template>

<script>
import Header from "~/components/Header";
import Blog from "~/components/Blog";
export default {
  components: { Header, Blog },
  mounted() {
    console.log(
      "%cCoded with 💛 by @xdesro in 2019. — https://henry.codes",
      "color: white; font-family:monospace; font-size: 15px; background-image: linear-gradient(to right, hsl(349, 75%, 57%), hsl(38, 100%, 58%));padding: 24px;"
    );
  }
};
</script>