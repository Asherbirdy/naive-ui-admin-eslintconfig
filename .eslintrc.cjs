module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-essential'
  ],
  'overrides': [
    {
      'env': {
        'node': true
      },
      'files': [
        '.eslintrc.{js,cjs}'
      ],
      'parserOptions': {
        'sourceType': 'script'
      }
    }
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'parser': '@typescript-eslint/parser',
    'sourceType': 'module'
  },
  'plugins': [
    '@typescript-eslint',
    'vue'
  ],
  rules: {
    'quotes': ['error', 'single'],
    'no-trailing-spaces': 'error',
    'semi': ['error', 'never'],
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/no-absolute-path': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'vue/multi-word-component-names': 'off',
    'no-undef': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'vue/html-indent': ['error', 2, {
      attribute: 1,
      baseIndent: 1,
      closeBracket: 0,
      alignAttributesVertically: true
    }],
    // 參數型別必須在冒號後空一格
    '@typescript-eslint/type-annotation-spacing': ['error', {
      before: false,
      after: true
    }],
    'arrow-spacing': ['error', { before: true, after: true }],
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    'comma-dangle': ['error', 'never'],
    'space-infix-ops': ['error', {'int32Hint': false}]
  }
}
