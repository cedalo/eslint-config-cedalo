module.exports = {
	extends: [
		'eslint-config-airbnb-base',
	].map(require.resolve),
	rules: {
		indent: ['error', 'tab'],
		'no-tabs': 0,
		'class-methods-use-this': 0,
		'comma-dangle': ['error', 'never'],
		'import/no-extraneous-dependencies': ['error', { 'devDependencies': true }],
		'max-len': ['error', 120],
		'no-underscore-dangle': 0,
		strict: 0,
		'no-param-reassign': 0
	},
	compilerOptions: {
		target: 'ES6',
		module: 'commonjs',
	},
};
