module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
        "jest": true,
    },
    "parser": "babel-eslint",
    "extends": "airbnb",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 8,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
      "linebreak-style": ["error", "windows"],
      "import/no-extraneous-dependencies": [
        'error',
        {
          'devDependencies': true,
        },
      ],
      "arrow-body-style": [
        "error",
        "as-needed",
      ],
      "no-param-reassign": [
        "error",
        {
          "props": false,
        },
      ],
      'comma-dangle': ['error', {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      }],
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "arrow-parens": ["error", "as-needed"]
    }
};