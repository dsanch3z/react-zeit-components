module.exports = {
  stories: ["../stories/**/*.stories.[tj]s"],
  addons: [
    "@storybook/addon-actions/register",
    "@storybook/addon-links/register",
    "@storybook/addon-storysource",
    "@storybook/addon-knobs/register",
    "@storybook/addon-viewport/register"
  ]
};
