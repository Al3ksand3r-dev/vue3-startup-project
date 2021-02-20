module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
              @import "@/styles/globals/_variables.scss";
              @import "@/styles/globals/_mixins.scss";
            `,
      },
    },
  },
};
