module.exports = {
    extends: [
        'eslint-config-airbnb-base',
    ].map(require.resolve),
    rules: {
        indent: ['error', 'tab'],
        'no-tabs': 0,
        strict: 2,
        'class-methods-use-this': 0,
    },
    compilerOptions: {
        target: 'ES6',
        module: 'commonjs',
    },
};
