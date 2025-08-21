import baseConfig from '@monorepo/code-config/eslint'

export default [
  ...baseConfig,
  {
    ignores: ['dist/**', 'node_modules/**'],
  },
]