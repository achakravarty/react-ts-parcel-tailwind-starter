import love from 'eslint-config-love';
import reactPlugin from 'eslint-plugin-react';
import prettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';

export default [
  {
    ignores: ['node_modules/**', 'dist/**']
  },
  love,
  {
    plugins: {
      'react': reactPlugin
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      ...reactPlugin.configs.recommended.rules
    }
  },
  prettier,
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      '@typescript-eslint/non-nullable-type-assertion-style': 'off',
      '@typescript-eslint/no-magic-numbers': 'off',
      '@typescript-eslint/no-unsafe-type-assertion': 'off',
      'arrow-body-style': 'off'
    }
  },
  {
    files: ['**/*.js', '**/*.cjs', '**/*.mjs'],
    ignores: ['**/*.ts', '**/*.tsx']
  }
]; 