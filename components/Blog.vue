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
  components: { BlogListItem },
  data() {
    return {
      isActive: false
    };
  },
  watch: {
    isActive() {
      if (this.isActive) {
        this.$router.push("/#blog");
      } else {
        this.$router.push("/");
      }
    }
  },
  mounted() {
    document.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll(e) {
      console.log(window.scrollY >= this.$el.offsetTop);
      if (window.scrollY >= this.$el.offsetTop) {
        this.isActive = true;
        // this.$router.push({ path: "/#blog" });
      } else {
        this.isActive = false;
        // this.$router.push({ path: "/#intro" });
      }
    }
  }
};
</script>