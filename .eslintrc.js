// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: 'expo',
  ignorePatterns: ['/dist/*'],
  rules: {
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: [
          'builtin', // Built-in imports (come from NodeJS native) go first
          'external', // <- External imports
          'internal', // <- Absolute imports
          'unknown', // <- unknown
          'type', // <- unknown
        ],
        pathGroups: [
          {
            pattern: 'react?(-native)',
            group: 'builtin',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: {
          order: 'asc'
        }
      },
    ]
  }
};
