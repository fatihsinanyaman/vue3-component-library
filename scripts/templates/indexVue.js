module.exports =  ({ packageName }) => {
  return `<template>
  <div>
    <h1>It Works!</h1>
  </div>
</template>

<script>
export default {
  name: "${packageName}",
  props: {},
  setup() {
    // your code
  },
};
</script>

<style scoped>
</style>
`;
};
