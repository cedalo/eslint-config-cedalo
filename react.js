module.exports = {
    extends: [
        'eslint-config-airbnb',
    ].map(require.resolve),
    parser: 'babel-eslint',
    rules: {
        indent: ['error', 4],
        'no-undef': 0,
        'react/jsx-no-undef': 1,
        'import/no-require': 1,
        'import/no-named-default': 1,
        'import/no-named-as-default': 1,
        'import/no-named-as-default-member': 1,
        'react/prefer-stateless-function': 1,
        'react/prop-types': 1,
        'no-underscore-dangle': 1,
        'import/first': 1,
        'jsx-a11y/no-static-element-interactions': 1,
        'react/jsx-filename-extension': [
            1,
            {
                extensions: [
                    '.js',
                    '.jsx',
                ],
            },
        ],
    },
    parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
        },
    },
};
