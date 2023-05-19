module.exports = {
  root: true,
  env: {
    node: true,
    'vue/setup-compiler-macros': true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: { parser: '@babel/eslint-parser', },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/multi-word-component-names': 'off',
    quotes: [
      'error',
      'single'
    ],
    semi: [
      'error',
      'never'
    ],
    indent: [
      'error',
      2
    ],
    'no-trailing-spaces': 'error',
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: { max: 1, },
        multiline: { max: 1, },
      }
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 2,
        maxEOF: 0,
        maxBOF: 0,
      }
    ],
    'vue/html-indent': [
      'error',
      2,
      {
        'attribute': 1,
        'baseIndent': 1,
        'closeBracket': 0,
        'alignAttributesVertically': false,
        'ignores': [],
      }
    ],
    'vue/first-attribute-linebreak': [
      'error',
      { multiline: 'below', }
    ],
    'vue/html-closing-bracket-newline': [
      'error',
      { multiline: 'always', }
    ],
    'comma-dangle': [
      'error',
      {
        arrays: 'never',
        objects: 'always',
        imports: 'always',
        exports: 'always',
        functions: 'never',
      }
    ],
    'vue/html-closing-bracket-spacing': [
      'error',
      {
        startTag: 'never',
        endTag: 'never',
        selfClosingTag: 'always',
      }
    ],
    'vue/multiline-html-element-content-newline': [
      'error',
      {
        ignores: [
          'pre',
          'textarea'
        ],
      }
    ],
    'array-element-newline': [
      'error',
      { 'ArrayExpression': 'always', }
    ],
    'array-bracket-newline': [
      'error',
      {
        minItems: 2,
        multiline: true,
      }
    ],
    'object-curly-spacing': [
      'error',
      'always'
    ],
    'vue/block-tag-newline': [
      'error',
      {
        singleline: 'always',
        multiline: 'always',
        maxEmptyLines: 1,
      }
    ],
    'eol-last': [
      'error',
      'always'
    ],
    // 'vue/padding-line-between-tags': [
    //   'error',
    //   [
    //     {
    //       blankLine: 'always',
    //       prev: '*',
    //       next: '*',
    //     }
    //   ]
    // ],
    'vue/padding-line-between-blocks': [
      'error',
      'always'
    ],
    'vue/no-setup-props-destructure': 'error',
    'object-property-newline': [
      'error',
      { 'allowAllPropertiesOnSameLine': false, }
    ],
    'object-curly-newline': [
      'error',
      {
        'ObjectExpression': {
          'multiline': true,
          'minProperties': 2,
        },
        'ObjectPattern': {
          'multiline': true,
          'minProperties': 2,
        },
        'ImportDeclaration': {
          'multiline': true,
          'minProperties': 2,
        },
        'ExportDeclaration': {
          'multiline': true,
          'minProperties': 3,
        },
      }
    ],
    'no-unused-vars': 1,
  },
}
