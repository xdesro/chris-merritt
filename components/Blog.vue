<template>
  <section class="blog" id="blog">
    <h2 class="blog__header">
      <nuxt-link to="#blog">Blog</nuxt-link>
    </h2>
    <ul class="blog-list">
      <BlogListItem />
      <BlogListItem />
      <BlogListItem />
      <BlogListItem />
      <BlogListItem />
    </ul>
  </section>
</template>

<script>
import BlogListItem from "~/components/BlogListItem";
export default {
  components: { BlogListItem }
};
</script>