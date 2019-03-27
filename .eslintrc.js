module.exports = {
    "env": {
      "browser": true,
      "commonjs": true,
      "es6": true,
      "node": true,
      "jest": true
    },
    "parser": "babel-eslint",
    "parserOptions": {
      "ecmaVersion": 6,
      "sourceType": "module",
      "ecmaFeatures": {
        "experimentalObjectRestSpread": true,
        "jsx": true,
        "arrowFunctions": true
      }
    },
    "plugins": [
      "react"
    ],
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "rules": {
      "arrow-parens": [2, "as-needed"],
      "no-console":0,
      "vars-on-top": 2,
      "no-shadow": 2,
      "no-shadow-restricted-names": 2,
      "camelcase": 1,
      "max-nested-callbacks": [1, 3],
      "no-mixed-spaces-and-tabs": 1,
      "indent": [2, 2],
      "quotes": [
        "error",
        "single"
      ],
      "semi": [
        "error",
        "always"
      ],
      "no-var": 2,
      "generator-star-spacing": [2, "before"]
    },
    "globals": {
      "__dirname": true,
      "process": true,
    }
  };