const errorInProduction = process.env.NODE_ENV === "production" ? "error" : "warn";

module.exports = {
	rules: {
		"semi": ["error", "always"],
		"semi-style": ["error", "last"],
		"quotes": [2, "double"],
		"indent": ["error", "tab"],
		"no-tabs": 0,
		"no-trailing-spaces": "error",
		"no-debugger": errorInProduction,
		"no-console": "warn",
		"no-unused-vars": "warn",
		"space-unary-ops": [
			2,
			{
				words: true,
				nonwords: false,
			},
		],
		"space-before-function-paren": [
			"error",
			{
				anonymous: "never",
				named: "never",
				asyncArrow: "always",
			},
		],
		"comma-dangle": [
			"error",
			{
				"arrays": "always-multiline",
				"objects": "always-multiline",
				"imports": "always-multiline",
				"exports": "always-multiline",
				"functions": "never",
			},
		],
		"no-constant-condition": errorInProduction,
		"import/order": ["error", { "newlines-between": "always" }],
		"import/newline-after-import": "error",
		"quote-props": ["error", "consistent"],
		"no-unreachable": errorInProduction,
		"curly": ["error", "multi-line", "consistent"],
		"padding-line-between-statements": [
			"error",
			{ "blankLine": "always", "prev": "import", "next": "export" },
		],
		"keyword-spacing": "error",
		"object-curly-spacing": ["error", "always"],
		"array-bracket-spacing": ["error", "never"],
		"eol-last": ["error", "always"],
	},
};
