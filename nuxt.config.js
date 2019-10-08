export default {
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
