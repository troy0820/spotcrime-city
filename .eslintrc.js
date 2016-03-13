module.exports = {
  "extends": "eslint:recommended",

  "env": {
  "node": true
  },

  "parserOptions": {
      "ecmaVersion": 6,
      "sourceType": "module"
      },

"ecmaFeatures": {
  "blockBindings": true,
  "classes": true,
  "modules": true
},

    "rules": {
    "no-console": 0,
    "camelcase": 0,
    "new-cap": [0, {
      "capIsNew": true
    }],
    "eol-last": 2,
    "quotes": [2, "single", "avoid-escape"],
    "no-mixed-spaces-and-tabs": 2,
    "no-extra-semi": 2,
    "no-else-return": 1,
    "no-const-assign": 0,
    "no-trailing-spaces": 2,
    "no-unused-vars": [1, {
      "args": "none"
    }],
    "semi": 2,
    "comma-spacing": [2, {
    "before": false,
    "after": true
    }],
    "semi-spacing": 2,
    "brace-style": [2, "1tbs", { "allowSingleLine": true }]
  }
};
