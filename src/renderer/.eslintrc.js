module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@shared', './src/shared'],
          ['@services', './src/services'],
          ['@', './src'],
          ['@@', './src/views'],
        ],
        extensions: ['.js', '.jsx'],
      },
    },
  },
};
