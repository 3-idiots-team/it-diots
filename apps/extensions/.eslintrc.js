/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['@it-diots/eslint-config/react'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
};
