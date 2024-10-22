const js = require('@eslint/js');
const globals = require('globals');
const reactHooks = require('eslint-plugin-react-hooks');
const reactRefresh = require('eslint-plugin-react-refresh');
const tseslint = require('typescript-eslint');
const importPlugin = require('eslint-plugin-import');
const packageConfig = require('@repo/eslint-config/package');

module.exports = [
  ...tseslint.config(
    { ignores: ['dist', 'coverage'] },
    {
      extends: [js.configs.recommended, ...tseslint.configs.recommended],
      files: ['**/*.{ts,tsx}'],
      languageOptions: {
        ecmaVersion: 2020,
        globals: globals.browser,
      },
      plugins: {
        'react-hooks': reactHooks,
        'react-refresh': reactRefresh,
        import: importPlugin,
      },
      rules: {
        ...reactHooks.configs.recommended.rules,
        'import/no-default-export': 'error', // Disallow default exports
        'react-refresh/only-export-components': [
          'warn',
          { allowConstantExport: true },
        ],
      },
    },
  ),
  {
    files: ['**/*.stories.ts', '**/*.config.ts', '**/.storybook/*.ts'], // Allow default exports in .stories.ts files
    rules: {
      'import/no-default-export': 'off', // Disable the rule for these files
    },
  },
];
