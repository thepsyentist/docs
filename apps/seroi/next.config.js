const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['@docs/ui']);
const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  // reactStrictMode: true,
});

// const withNextra = require('nextra')({
//   theme: 'nextra-theme-docs',
//   themeConfig: './theme.config.tsx',
//   reactStrictMode: true,
// });

module.exports = withPlugins([withTM, withNextra]);
