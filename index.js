module.exports = {
	extends: [
		...([
			"./rules/base",
		].map(require.resolve)),
		...["plugin:import/recommended"],
	],

	parserOptions: {
		"sourceType": "module",
		"ecmaVersion": 2018,
	},
};
