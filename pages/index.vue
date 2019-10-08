<template>
  <main class="main">
    <Header />
    <Blog />
  </main>
</template>

<script>
import Header from "~/components/Header";
import Blog from "~/components/Blog";
export default {
  components: { Header, Blog }
};
</script>