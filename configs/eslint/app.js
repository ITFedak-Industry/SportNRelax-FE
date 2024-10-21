/** @type {import("eslint").Linter.Config} */
module.exports = {
  plugins: ['prettier'],
  rules: {
    semi: ['error', 'always'],
    '@typescript-eslint/explicit-module-boundary-types': ['error'],
    '@typescript-eslint/no-explicit-any': ['error'],
    '@typescript-eslint/semi': ['error', 'always'],
    'import/no-default-export': ['error'],
    'import/no-unresolved': 0, // Turn off "Unable to resolve path to module ..." error
    'import/extensions': 0,
    'no-console': [2, { allow: ['warn', 'error'] }],
    'no-control-regex': 0,
    'object-curly-spacing': ['error', 'always'],
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
  },
  ignorePatterns: ['.*.js', '*.snap'],
};
