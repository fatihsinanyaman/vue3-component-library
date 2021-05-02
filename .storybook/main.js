module.exports = {
  stories: ["../packages/**/*.stories.@(js|mdx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-links",
  ],
//   babel: async (options) => ({
//     ...options,
//     plugins: [
//       "@babel/plugin-proposal-class-properties",
//       "@babel/plugin-proposal-private-methods",
//     ]
//   }),
};
