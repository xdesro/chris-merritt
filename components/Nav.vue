<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__list-item">
        <nuxt-link
          to="/"
          :class="isHome ? 'nav__list-link nav__list-link--active' : 'nav__list-link'"
        >home</nuxt-link>
      </li>
      <li class="nav__list-item">
        <nuxt-link to="/#blog" class="nav__list-link">blog</nuxt-link>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  computed: {
    isHome() {
      return this.$router.currentRoute.fullPath === "/";
    }
  }
};
</script>