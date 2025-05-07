module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-essential'

  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'vue', 'unused-imports', 'import', '@typescript-eslint'],
  rules: {
    quotes: ['error', 'single'],
    'no-trailing-spaces': 'error',
    semi: ['error', 'never'],
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/no-absolute-path': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'vue/multi-word-component-names': 'off',
    'no-undef': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'vue/html-indent': [
      'error',
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true
      }
    ],
    'vue/mustache-interpolation-spacing': ['error', 'always'],
    'arrow-spacing': ['error', { before: true, after: true }],
    'comma-spacing': ['error', { before: false, after: true }],
    'comma-dangle': ['error', 'never'],
    'space-infix-ops': ['error', { int32Hint: false }],
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0, maxBOF: 0 }],
    'vue/no-multiple-template-root': 'error',
    'vue/singleline-html-element-content-newline': [
      'error',
      {
        ignoreWhenNoAttributes: true,
        ignoreWhenEmpty: true,
        ignores: ['pre', 'textarea']
      }
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 2,
        multiline: 1
      }
    ],
    'vue/first-attribute-linebreak': [
      'error',
      {
        singleline: 'ignore',
        multiline: 'below'
      }
    ],
    'vue/no-v-html': 'error',
    'vue/order-in-components': [
      'error',
      {
        order: [
          'el',
          'name',
          'key',
          'parent',
          'functional',
          ['delimiters', 'comments'],
          ['components', 'directives', 'filters'],
          'extends',
          'mixins',
          ['provide', 'inject'],
          'ROUTER_GUARDS',
          'layout',
          'middleware',
          'validate',
          'scrollToTop',
          'transition',
          'loading',
          'inheritAttrs',
          'model',
          ['props', 'propsData'],
          'data',
          'computed',
          'watch',
          'LIFECYCLE_HOOKS',
          'methods',
          ['template', 'render'],
          'renderError'
        ]
      }
    ],
    'vue/attributes-order': [
      'error',
      {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          'UNIQUE',
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          'EVENTS',
          'CONTENT'
        ]
      }
    ],
    'vue/no-multi-spaces': ['error', {
      'ignoreProperties': false
    }],
    'vue/no-spaces-around-equal-signs-in-attribute': ['error'],
    'vue/this-in-template': 'error',
    'vue/no-reserved-component-names': 'error',
    '@typescript-eslint/no-unused-vars': ['error'],
    'space-before-function-paren': ['error', 'always'],
    'keyword-spacing': ['error', { before: true, after: true }],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always',
        selfClosingTag: {
          singleline: 'never',
          multiline: 'always'
        }
      }
    ],
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      { 'vars': 'all', 'varsIgnorePattern': '^_', 'args': 'after-used', 'argsIgnorePattern': '^_' }
    ],
    // 新增規則
    'space-in-parens': ['error', 'never'],  // 參數括號內不空格
    'template-curly-spacing': ['error', 'never'],  // 字串模板內不空格
    'array-bracket-spacing': ['error', 'never'],  // 陣列括號內不空格
    'object-curly-spacing': ['error', 'always'],  // 物件括號內空格
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],  // 冒號前後空格
    'object-curly-newline': ['error', { multiline: true, consistent: true }], // 新增規則
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        'newlines-between': 'always',
        'alphabetize': { order: 'asc', caseInsensitive: true }
      }
    ]
  }
}
