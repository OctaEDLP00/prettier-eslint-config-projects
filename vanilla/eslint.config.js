import configLove from 'eslint-config-love'
import configPrettier from 'eslint-config-prettier'
import globals from 'globals'

/** @type {import('eslint').Linter.Config[]} */
export default [
  { ignores: ['dist/*'] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  configPrettier,
  {
    languageOptions: { ...globals },
    files: ['**/*.{js,mjs}', '**/*.ts'],
    ...configLove,
    rules: {
      '@typescript-eslint/triple-slash-reference': 'off',
    }
  },
  {
    parserOptions: {
      parser: '@typescript-eslint/parser'
    },
    rules: {
      semi: ['warn', 'single']
    }
  }
]
