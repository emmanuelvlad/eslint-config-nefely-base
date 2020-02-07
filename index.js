module.exports = {
	extends: [
		"./rules/base",
	].map(require.resolve),

	parserOptions: {
		"sourceType": "module",
		"ecmaVersion": 2018,
	},
};