import Rick from "./src/components/Rick.vue";

Rick.install = function (Vue) {
  Vue.component(Rick.name, Rick);
};

export default Rick;
