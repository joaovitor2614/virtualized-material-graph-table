module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
    jest: true
  },
  extends: [
    "airbnb", "prettier", "prettier/react",
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
        "jsx": true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  parser: "babel-eslint",
  plugins: [ "react", "prettier","only-warn"],
  rules: {
    'prettier/prettier': 'error',
    "arrow-body-style": ["off"],
    "prefer-arrow-callback": ["off"],
    "prefer-arrow-callback": "off",
    "no-unused-vars": "off",
      "react/jsx-filename-extension": [
          "warn",
          {"extensions": [".js", ".jsx"]}
        ],
      "space-before-function-paren": "off",
      "react/destructuring-assignment": ["off"],
      "react/forbid-prop-types": ["off"],
      "no-new": "off",
      "import/prefer-default-export": "off",
      "react/jsx-props-no-spreading": "off",
      "react/jsx-curly-newline": ["off"],
      "consistent-return": ["off"],
      "no-plusplus": "off",
      "jsx-a11y/click-events-have-key-events": ["off"],
      "eqeqeq": "off",
      "no-else-return": "off",
      "prefer-const": "off",
      "no-unneeded-ternary": "off",
      "no-nested-ternary": "off",
      "no-underscore-dangle": "off",
      "camelcase": "off",
      "no-return-assign": "off",
      "react/display-name": "off"
  },
  settings: {
    react: {
      version: 'detect',
    },
  }
}

