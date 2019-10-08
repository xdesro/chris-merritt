import pkg from "./package";
export default {
  head: {
    htmlAttrs: {
      lang: "en"
    },
    title: pkg.headMeta.title,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        itemprop: "description",
        content: pkg.headMeta.description
      },
      { name: "theme-color", content: pkg.headMeta.themeColor },
      { name: "msapplication-TileColor", content: pkg.headMeta.themeColor },
      { name: "image", content: pkg.headMeta.imageUrl },
      { itemprop: "name", content: pkg.headMeta.title },
      { itemprop: "image", content: pkg.headMeta.imageUrl },
      { name: "twitter:card", content: "summary" },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: pkg.headMeta.title
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: pkg.headMeta.description
      },
      { name: "twitter:site", content: pkg.headMeta.twitter },
      { name: "twitter:creator", content: pkg.headMeta.twitter },
      { name: "twitter:image:src", content: pkg.headMeta.imageUrl },
      { hid: "og:title", name: "og:title", content: pkg.headMeta.title },
      {
        hid: "og:description",
        name: "og:description",
        content: pkg.headMeta.description
      },
      { name: "og:image", content: pkg.headMeta.imageUrl },
      { hid: "og:url", name: "og:url", content: pkg.headMeta.siteUrl },
      { name: "og:site_name", content: pkg.headMeta.title },
      { name: "og:locale", content: "en_US" },
      { name: "og:type", content: "website" }
    ]
  },
  css: ["@/assets/scss/style.scss"],
  router: {
    linkExactActiveClass: "nav__list-link--active",
    scrollBehavior: async (to, from, savedPosition) => {
      if (savedPosition) {
        return savedPosition;
      }
      const findElement = async (hash, x) => {
        return (
          document.querySelector(hash) ||
          new Promise((resolve, reject) => {
            if (x > 50) {
              return resolve();
            }
            setTimeout(() => {
              resolve(findEl(hash, ++x || 1));
            }, 100);
          })
        );
      };
      // if (to.fullPath === "/#") {
      //   if ("scrollBehavior" in document.documentElement.style) {
      //     console.log(window.scrollTo({ top: 0, behavior: "smooth" }));
      //     return window.scrollTo({ top: 0, behavior: "smooth" });
      //   } else {
      //     return window.scrollTo(0, 0);
      //   }
      // }

      if (to.hash) {
        let el = await findElement(to.hash);
        if ("scrollBehavior" in document.documentElement.style) {
          return window.scrollTo({ top: el.offsetTop, behavior: "smooth" });
        } else {
          return window.scrollTo(0, el.offsetTop);
        }
      }
      if ("scrollBehavior" in document.documentElement.style) {
        return window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        return window.scrollTo(0, 0);
      }
    }
  }
};
