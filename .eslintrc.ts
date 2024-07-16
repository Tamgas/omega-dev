module.exports = {
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
    },
    {
        files: ['**/*.js?(x)'],
        parserOptions: {
            sourceType: 'module',
            ecmaVersion: 2015,
        },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
};