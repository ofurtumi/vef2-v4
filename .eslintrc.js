module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'airbnb-base',
		'prettier',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:jsx-a11y/recommended',
	],
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
		jsx: true,
	},
	rules: {
		'no-restricted-syntax': 0,
		'import/prefer-default-export': 0,
		'import/no-extraneous-dependencies': 0,
		quotes: ['error', 'single'],
		'no-console': [
			'warn',
			{
				allow: [
					'warn',
					'error',
					'info',
					'group',
					'groupCollapsed',
					'groupEnd',
				],
			},
		],
		'import/extensions': 0,
		'max-len': [
			'warn',
			{
				code: 100,
				ignoreUrls: true,
				ignoreComments: true,
				ignoreTemplateLiterals: true,
			},
		],
	},
};
