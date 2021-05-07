/* eslint-disable import/no-extraneous-dependencies */
const CracoAlias = require('craco-alias');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const cracoLessPlugin = require('craco-less');
const resolveConfig = require('tailwindcss/resolveConfig');
const tailwindConfigFile = require('./tailwind.config.js');

const tailwindConfig = resolveConfig(tailwindConfigFile);

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'jsconfig',
        baseUrl: './',
      },
    },
    {
      plugin: cracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': tailwindConfig.theme.colors.primary.DEFAULT,
              '@link-color': tailwindConfig.theme.colors.primary.light,
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  style: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer,
      ],
    },
  },
};
