import withNuxt from './.nuxt/eslint.config.mjs';
import eslintConfigPrettier from 'eslint-config-prettier';

const configs = [
  eslintConfigPrettier,
  {
    rules: {
      'no-restricted-globals': ['error', 'event', 'fdescribe'],
    },
  },
];

export default withNuxt(configs);
