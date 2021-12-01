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
			"error",
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
		"curly": ["error", "multi-or-nest"],
		"padding-line-between-statements": [
			"error",
			{ "blankLine": "always", "prev": "import", "next": "export" },
			{ "blankLine": "always", "prev": "*", "next": ["return", "throw"] },
		],
		"keyword-spacing": "error",
		"object-curly-spacing": ["error", "always"],
		"array-bracket-spacing": ["error", "never"],
		"eol-last": ["error", "always"],
		"computed-property-spacing": "error",
		"space-in-parens": "error",
		"no-spaced-func": "error",
		"key-spacing": "error",
		"space-infix-ops": "error",
		"block-spacing": "error",
		"brace-style": "error",
		"padded-blocks": ["error", "never"],
		"nonblock-statement-body-position": ["error", "below"],
	},
};
