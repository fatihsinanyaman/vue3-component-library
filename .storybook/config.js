import { configure } from "@storybook/vue3"; // automatically import all files ending in *.stories.js
const req = require.context("../packages", true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}
configure(loadStories, module);