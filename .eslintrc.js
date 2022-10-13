module.exports = {
  env: {
    browser: true,
    es2021: true,
  },

  settings: {
    'import/resolver': 'typescript',
  },

  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    project: [
      './tsconfig.eslint.json',
    ],
  },

  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-airbnb-with-typescript',
  ],

  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  rules: {
    // plugin:import/recommended rule overrides
    'import/no-named-as-default-member': 'off',
    'import/prefer-default-export': 'off',
    'import/order': ['error', {
      groups: [
        'builtin',
        'external',
        'internal',
        'index',
        'parent',
        'sibling',
        'object',
        'type',
      ],
      // 'newlines-between': 'always',
      pathGroups: [
        {
          group: 'internal',
          pattern: '@/**',
          position: 'before',
        },
      ],
    }],

    // airbnb-typescript/base rule overrides
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/no-use-before-define': ['error', {
      functions: false,
    }],

    // plugin:vue/vue3-recommended rule overrides
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 1,
      },
      multiline: {
        max: 1,
      },
    }],
    'vue/multi-word-component-names': 'off',
    'vue/no-v-html': 'off',
    'vue/v-on-event-hyphenation': 'off',
    'vue/singleline-html-element-content-newline': ['off', {
      ignoreWhenNoAttributes: true,
      ignoreWhenEmpty: true,
      ignores: ['pre', 'textarea'],
    }],
    'vue/max-len': ['error', {
      code: 140,
      tabWidth: 2,
      ignoreComments: true,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
    }],

    // Vuejs Accessibility rules
    // Turned off until such a time we can work on the accessibility
    'vuejs-accessibility/label-has-for': 'off',
    'vuejs-accessibility/no-autofocus': 'off',
    'vuejs-accessibility/form-control-has-label': 'off',
    'vuejs-accessibility/click-events-have-key-events': 'off',
    'vuejs-accessibility/mouse-events-have-key-events': 'off',

    // Miscellaneous rules
    'class-methods-use-this': 'off',
    'max-len': ['error', {
      code: 140,
      tabWidth: 2,
      ignoreComments: true,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
    }],
    'no-cond-assign': ['error', 'except-parens'],
    'no-restricted-syntax': ['off'],
    'no-console': [process.env.NODE_ENV === 'production' ? 'error' : 'warn', {
      allow: [
        'error',
        'warn',
      ],
    }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-param-reassign': ['error', { props: false }],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-underscore-dangle': ['error', { allow: ['_id'], allowAfterThis: true }],
    'operator-linebreak': ['error', 'after', {
      overrides: {
        '?': 'before',
        ':': 'before',
      },
    }],
    'prefer-destructuring': 'off',
    'spaced-comment': [
      'error',
      'always',
      {
        exceptions: [
          '*',
        ],
        line: {
          markers: ['/'],
        },
      },
    ],
    'linebreak-style': [
      'error',
      'unix',
    ],
  },
};
