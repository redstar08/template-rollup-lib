module.exports = {
  env: {
    browser: true,
    es2022: true,
    commonjs: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', '@typescript-eslint'],
  rules: {
    semi: [1, 'never'],
    quotes: [1, 'single'],
    'no-console': 0,
    'func-names': 0,
    'linebreak-style': 0,
    'operator-linebreak': 0,
    'object-curly-newline': 0,
    'no-dupe-keys': 2,
    'no-dupe-args': 2,
    'no-duplicate-case': 2,
    // react/recommended 相关
    'react/prop-types': 0,
    'react/display-name': 0,
    // typescript-eslint 相关
    '@typescript-eslint/no-extra-semi': 0,
    '@typescript-eslint/no-unused-vars': 1,
    '@typescript-eslint/no-var-requires': 0,

    '@typescript-eslint/no-explicit-any': 0,

    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
  },
}
