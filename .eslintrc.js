module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  plugins: ['react', 'jsx-a11y'],
  globals: {
    graphql: false,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
  },
  extends: ['plugin:jsx-a11y/recommended'],
}
