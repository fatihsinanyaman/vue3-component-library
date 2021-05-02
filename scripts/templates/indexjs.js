module.exports =  ({ packageName }) => {
  return `import ${packageName} from "./src/index.vue";
${packageName}.install = function (Vue) {
  Vue.component(${packageName}.name, ${packageName});
  };
  export default ${packageName};
`;
};
