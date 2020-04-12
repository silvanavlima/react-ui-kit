

// module.exports = {
//   addons: [
//     {
//       name: '@storybook/preset-create-react-app',
//       options: {
//         tsDocgenLoaderOptions: {},
//       },
//     },
//     {
//       name: '@storybook/addon-docs',
//       options: {
//         configureJSX: true,
//       },
//     },
//     '@storybook/addon-actions',
//     '@storybook/addon-links',
//   ],

//   stories: ['../src/**/*.stories.(ts|tsx)'],
// }

module.exports = {
  addons: [
    '@storybook/addon-actions/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-notes/register',
    '@storybook/addon-docs'
  ],
  stories: ['../src/**/*.stories.tsx'],
  webpackFinal: async config => {
    config.module.rules.push({

      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [['react-app', { flow: false, typescript: true }]]
      },
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
