<template>
  <section class="post">
    <h1 class="post__title">{{ post.fields.title }}</h1>
    <time class="post__date" :datetime="post.fields.publishDate">
      {{ postDate }}
    </time>
    <div class="post__content rendered" v-html="postContent" />
  </section>
</template>

<script>
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

const renderOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      // render the EMBEDDED_ASSET as you need
      return `
        <img
          src="https:${node.data.target.fields.file.url}"
          height="${node.data.target.fields.file.details.image.height}"
          width="${node.data.target.fields.file.details.image.width}"
          alt="${node.data.target.fields.description}"
        />`;
    },
  },
};
export default {
  layout: "blog",
  data() {
    return {
      slug: this.$route.params.slug,
    };
  },
  computed: {
    post() {
      let post = this.$store.state.posts.filter((el) => el.fields.slug === this.slug);
      return post[0];
    },
    postDate() {
      return new Date(this.post.fields.publishDate).toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
    },
    postContent() {
      return documentToHtmlString(this.post.fields.body, renderOptions);
    },
  },
  head() {
    return {
      title: this.post.fields.title,
    };
  },
};
</script>
