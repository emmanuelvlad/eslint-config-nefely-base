module.exports = {
	extends: [
		...["plugin:import/recommended"],
		...([
			"./rules/base",
		].map(require.resolve)),
	],

	parserOptions: {
		"sourceType": "module",
		"ecmaVersion": 2018,
	},
};
