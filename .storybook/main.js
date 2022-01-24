const path = require("path");

const resolvePath = (_path) => path.join(process.cwd(), _path);

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: async (config) => ({
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        "@emotion/styled": resolvePath("node_modules/@emotion/styled"),
        /* 경로 별칭을 사용하는 경우 아래 주석을 해제하여 적절하게 사용한다 */
        // "@components": resolvePath("src/components"),
      },
    },
  }),
};
