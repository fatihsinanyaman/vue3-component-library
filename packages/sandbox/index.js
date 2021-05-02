import Sandbox from "./src/components/sandbox.vue";

Sandbox.install = function (Vue) {
  Vue.component(Sandbox.name, Sandbox);
};

export default Sandbox;
