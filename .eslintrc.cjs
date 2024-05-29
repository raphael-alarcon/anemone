/** @type {import('eslint').Linter.Config} */
module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    overrides: [
        {
            files: ['*.tsx'],
            rules: {
                '@typescript-eslint/no-unused-vars': 'warn',
                'unicorn/filename-case': 'off',
                'indent': 'off',
            },
        },
    ],
}
