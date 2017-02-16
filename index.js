module.exports = {
    extends: [
        'eslint-config-airbnb-base',
    ].map(require.resolve),
    rules: {
        strict: 2,
        indent: ['error', 4],
        'class-methods-use-this': 0,
    },
    compilerOptions: {
        target: 'ES6',
        module: 'commonjs',
    },
};
