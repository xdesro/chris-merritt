<template>
  <section class="intro" id="intro">
    <h1>
      <span class="chris">Chris Merritt</span>
      is a project manager at
      <a class="faculty" href="https://faculty.com">
        <Icon name="faculty" />Faculty
      </a> and the managing partner at
      <a class="atlas-local" href="https://www.atlaslocal.com/">
        <Icon name="atlas-local" />
        <span>Atlas Local</span>
      </a> in Greenville, South Carolina.
    </h1>
    <p>
      You can
      <del>
        read his
        <a href="#blog">blog</a>
      </del>, contact him
      <a href="mailto:hello@chrismerritt.cc">by email</a>, or check him out on
      <a class="linkedin" href="https://www.linkedin.com/in/chrisbmerritt">
        <Icon name="linkedin" />
        <span>LinkedIn</span>
      </a>,
      <a class="twitter" href="https://twitter.com/chrismerritt">
        <Icon name="twitter" />
        <span>Twitter</span>
      </a>, or
      <a class="instagram" href="https://www.instagram.com/chrisbmerritt/">
        <Icon name="instagram" />
        <span>Instagram</span>
      </a>.
    </p>
  </section>
</template>

<script>
import Icon from "~/components/Icon";

export default {
  components: { Icon },
  mounted() {
    this.$nextTick(() => {
      document.addEventListener("scroll", this.handleScroll);
    });
  },
  methods: {
    handleScroll(e) {
      const atlo = this.$el.querySelector(".atlo-svg");
      atlo.style.setProperty("--rotate", `${window.scrollY / 10}deg`);
    }
  }
};
</script>