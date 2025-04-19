import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginAccessabilty from 'eslint-plugin-jsx-a11y';
import prettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
  { files: ['**/*.{js,jsx,ts,tsx,cjs,mjs}'] },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    plugins: {
      react: pluginReact,
      'react-hooks': pluginReactHooks,
      'jsx-a11y': pluginAccessabilty,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'jsx-a11y/alt-text': 'error',
      'no-console': 'warn',
    },
  },
  prettierRecommended,
];
