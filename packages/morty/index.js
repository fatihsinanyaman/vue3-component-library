import Morty from "./src/index.vue";
Morty.install = function (Vue) {
  Vue.component(Morty.name, Morty);
  };
  export default Morty;
