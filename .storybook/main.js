/** The main.js configuration file is a preset and, as such, has a powerful interface, but the key fields within it are:
 *
 *    stories - an array of globs that indicates the location of your story files, relative to main.js.
 *       https://storybook.js.org/docs/react/configure/overview#configure-story-loading
 *    addons - a list of the addons you are using.
 *       https://storybook.js.org/addons
 *    webpackFinal - custom webpack configuration.
 *       https://storybook.js.org/docs/react/configure/webpack#extending-storybooks-webpack-config
 *    babel - custom babel configuration.
 *       https://storybook.js.org/docs/react/configure/babel
 **/

module.exports = {
  stories: ['../src/**/*.stories.@(js|mdx|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
    '@storybook/preset-scss',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // remove svg loader from Storybook's config and use @svgr/webpack loader instead
    config.module.rules = config.module.rules.filter(
      ({ test }) => !test.test('.svg')
    )

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
      exclude: /node_modules/,
    })

    // Return the altered config
    return config
  },
}
