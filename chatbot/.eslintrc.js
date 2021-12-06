module.exports = {
    "env": {
        "es2021": true,
        "node": true
    },
    "extends": [
        "google"
    ],
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "rules": {
        "require-jsdoc": 0,
        "max-len": ["error", 100],
        "linebreak-style": 0,
        "quotes": ["error", "double"],
        "indent": ["error", 4]
    }
};
