import ResponsiveImage from "./ResponsiveImage.vue";
import ResponsiveImageWrapper from "./ResponsiveImageWrapper.vue";

module.exports = {
  install: function(Vue, options) {
    Vue.component("ResponsiveImage", ResponsiveImage);
    Vue.component("ResponsiveImageWrapper", ResponsiveImageWrapper);
  }
};
