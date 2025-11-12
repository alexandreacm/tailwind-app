/** @type {import('prettier').Config} */
module.exports = {
  // Base settings
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  useTabs: false,
  trailingComma: 'es5',
  printWidth: 80,
  arrowParens: 'avoid',
  endOfLine: 'lf',

  // React/JSX settings
  jsxSingleQuote: false,
  bracketSpacing: true,
  bracketSameLine: false,

  // Plugins
  plugins: ['prettier-plugin-tailwindcss'],
};
