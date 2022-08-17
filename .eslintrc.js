module.exports = {
    env: {
        es2021: true,
        node: true
    },
    extends: [
        'standard',
        'prettier'
    ],
    plugins: [
        'prettier'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 13,
        sourceType: 'module'
    },
    plugins: [
        '@typescript-eslint'
    ],
    rules: {
        "prettier/prettier": "warn"
    }
}
