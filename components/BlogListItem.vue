<template>
  <li class="blog-list-item">
    <span class="blog-list-item__date">{{ postDate }}</span>
    <span class="blog-list-item__title">{{ post.title }}</span>
    <p class="blog-list-item__description" v-html="post.excerpt"></p>
    <a :href="`/blog/${post.slug}`" class="blog-list-item__link">
      view the post—
    </a>
  </li>
</template>

<script>
export default {
  props: ["post"],
  computed: {
    postDate() {
      return new Date(this.post.publishDate).toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
    },
  },
};
</script>
