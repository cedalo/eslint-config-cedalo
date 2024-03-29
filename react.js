module.exports = {
	extends: [
		'eslint-config-airbnb',
	].map(require.resolve),
	parser: 'babel-eslint',
	rules: {
		indent: ['error', 'tab'],
		'no-tabs': 0,
		'max-len': ['error', 120],
		'react/jsx-indent-props': [2, 'tab'],
		'react/jsx-indent': [2, 'tab'],
		'no-undef': 0,
		'react/jsx-no-undef': 1,
		'import/no-named-default': 1,
		'import/no-named-as-default': 1,
		'import/no-named-as-default-member': 1,
		'no-underscore-dangle': 0,
		'class-methods-use-this': 0,
		'no-param-reassign': 0,
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
