import importPlugin from "eslint-plugin-import";
import prettier from "eslint-plugin-prettier";
import globals from "globals";
import tseslint from "typescript-eslint";

const jsRules = {
	"prettier/prettier": [
		"error",
		{
			useTabs: true,
			endOfLine: "auto",
			printWidth: 115,
		},
	],

	"constructor-super": "error",
	"for-direction": "error",
	"getter-return": "error",
	"no-class-assign": "error",
	"no-compare-neg-zero": "error",
	"no-cond-assign": "error",
	"no-const-assign": "error",
	"no-constant-binary-expression": "error",
	"no-constant-condition": "error",
	"no-control-regex": "error",
	"no-debugger": "error",
	"no-delete-var": "error",
	"no-dupe-args": "error",
	"no-dupe-class-members": "error",
	"no-dupe-else-if": "error",
	"no-dupe-keys": "error",
	"no-duplicate-case": "error",
	"no-empty": "error",
	"no-empty-character-class": "error",
	"no-empty-pattern": "error",
	"no-empty-static-block": "error",
	"no-ex-assign": "error",
	"no-extra-boolean-cast": "error",
	"no-fallthrough": "error",
	"no-func-assign": "error",
	"no-global-assign": "error",
	"no-import-assign": "error",
	"no-invalid-regexp": "error",
	"no-irregular-whitespace": "error",
	"no-loss-of-precision": "error",
	"no-misleading-character-class": "error",
	"no-new-native-nonconstructor": "error",
	"no-nonoctal-decimal-escape": "error",
	"no-obj-calls": "error",
	"no-octal": "error",
	"no-prototype-builtins": "error",
	"no-redeclare": "error",
	"no-regex-spaces": "error",
	"no-self-assign": "error",
	"no-setter-return": "error",
	"no-shadow-restricted-names": "error",
	"no-sparse-arrays": "error",
	"no-this-before-super": "error",
	"no-undef": "error",
	"no-unexpected-multiline": "error",
	"no-unreachable": "error",
	"no-unsafe-finally": "error",
	"no-unsafe-negation": "error",
	"no-unsafe-optional-chaining": "error",
	"no-unused-labels": "error",
	"no-unused-private-class-members": "error",
	"no-unused-vars": "error",
	"no-useless-backreference": "error",
	"no-useless-catch": "error",
	"no-useless-escape": "error",
	"no-with": "error",
	"require-yield": "error",
	"use-isnan": "error",
	"valid-typeof": "error",

	// My rules
	"no-constructor-return": "error",
	"no-self-compare": "error",
	"no-unmodified-loop-condition": "error",
	"no-unreachable-loop": "error",
	"no-useless-assignment": "error",
	"no-useless-return": "error",
	"no-useless-rename": "error",
	"no-useless-constructor": "error",
	"no-useless-concat": "error",
	"no-useless-computed-key": "error",
	"no-unused-expressions": "error",
	"no-object-constructor": "error",
	"no-new-wrappers": "error",
	"no-new-func": "error",
	"no-new": "error",
	"no-negated-condition": "error",
	"no-multi-str": "error",
	"no-multi-assign": "error",
	"no-lonely-if": "error",
	"no-var": "error",
	yoda: "error",
	"prefer-template": "error",
	"prefer-rest-params": "error",
	"prefer-regex-literals": "error",
	"no-lone-blocks": "error",
	"no-labels": "error",
	"no-label-var": "error",
	"no-implied-eval": "error",
	"no-eval": "error",
	"no-eq-null": "error",
	"no-else-return": "error",
	"no-array-constructor": "error",
	"logical-assignment-operators": "error",
	eqeqeq: "error",
	"dot-notation": "error",
	"default-param-last": "error",
	"default-case-last": "error",
	"no-empty-function": "error",
	"no-loop-func": "error",
	"no-shadow": "error",
	"no-throw-literal": "error",
	"prefer-promise-reject-errors": "error",
	"require-await": "error",
	"no-return-await": "error",

	"no-template-curly-in-string": "warn",
	"prefer-arrow-callback": ["error", { allowNamedFunctions: true }],
	"prefer-const": ["error", { destructuring: "all" }],
	curly: ["error", "multi-line"],
	quotes: ["error", "double", { avoidEscape: true }],
	"no-use-before-define": ["error", { functions: false, classes: false }],
	"object-shorthand": ["error", "always", { avoidQuotes: true }],
	"prefer-destructuring": ["error", { array: true, object: false }],
	"no-unneeded-ternary": ["error", { defaultAssignment: false }],
	"operator-assignment": ["error", "always"],
	"max-params": ["error", { max: 5 }],

	"import/export": "error",
	"import/no-deprecated": "error",
	"import/no-empty-named-blocks": "error",
	"import/no-extraneous-dependencies": "error",
	"import/no-mutable-exports": "error",
	"import/no-named-as-default-member": "error",
	"import/no-unused-modules": "error", // ПОЧЕМУ ТО ПРИ { "unusedExports": true } ESLint couldn't find a configuration file. To set up a configuration file for this project, please run:
	"import/no-amd": "error",
	"import/no-commonjs": "error",
	"import/no-import-module-exports": "error",
	"import/unambiguous": "error",
	"import/default": "error", // Под вопросом
	"import/named": "error", // Под вопросом
	"import/namespace": "error",
	"import/no-absolute-path": "error",
	"import/no-dynamic-require": "error",
	"import/no-self-import": "error",
	"import/no-useless-path-segments": "error",
	"import/no-webpack-loader-syntax": "error",
	"import/consistent-type-specifier-style": ["error", "prefer-top-level"],
	"import/first": "error",
	"import/newline-after-import": ["error", { count: 1, considerComments: false }],
	"import/no-anonymous-default-export": "error",
	"import/no-duplicates": "error",
	"import/no-named-default": "error",
	"import/order": [
		"error",
		{
			groups: ["builtin", "external", "type", "internal", "parent", "sibling", "index", "object"],
			"newlines-between": "always",
			named: true,
			alphabetize: { order: "asc" },
		},
	],
};

// https://typescript-eslint.io/rules/?=xdeprecated
const tsRules = {
	...jsRules,
	"no-dupe-class-members": "off",

	"tseslint/adjacent-overload-signatures": "error",
	"tseslint/array-type": ["error", { default: "array-simple" }],
	"tseslint/ban-ts-comment": ["error", { "ts-expect-error": "allow-with-description" }],
	"tseslint/ban-tslint-comment": "error",
	"tseslint/class-literal-property-style": "error",
	"tseslint/consistent-generic-constructors": "error",
	"tseslint/consistent-indexed-object-style": "error",
	"tseslint/consistent-type-assertions": "error",
	"tseslint/consistent-type-definitions": "error",
	"tseslint/consistent-type-exports": "error",
	"tseslint/consistent-type-imports": "error",
	"tseslint/member-ordering": "error",
	"tseslint/method-signature-style": ["error", "method"],
	"tseslint/no-array-constructor": "error",
	"tseslint/no-array-delete": "error",
	"tseslint/no-base-to-string": "error",
	"tseslint/no-confusing-non-null-assertion": "error",
	"tseslint/no-duplicate-enum-values": "error",
	"tseslint/no-duplicate-type-constituents": "error",
	"tseslint/no-empty-interface": "error",
	"tseslint/no-empty-object-type": "error",
	"tseslint/no-extra-non-null-assertion": "error",
	"tseslint/no-for-in-array": "error",
	// "tseslint/no-import-type-side-effects": "error", // import/consistent-type-specifier-style
	"tseslint/no-inferrable-types": "error",
	"tseslint/no-invalid-void-type": "error",
	"tseslint/no-meaningless-void-operator": "error",
	"tseslint/no-misused-new": "error",
	"tseslint/no-misused-promises": ["error", { checksVoidReturn: false }],
	"tseslint/no-mixed-enums": "error",
	"tseslint/no-namespace": "error",
	"tseslint/no-non-null-asserted-nullish-coalescing": "error",
	"tseslint/no-non-null-asserted-optional-chain": "error",
	"tseslint/no-require-imports": "error",
	"tseslint/no-this-alias": "error",
	"tseslint/no-unnecessary-boolean-literal-compare": "error",
	"tseslint/no-unnecessary-condition": "error",
	"tseslint/no-unnecessary-parameter-property-assignment": "error",
	"tseslint/no-unnecessary-qualifier": "error",
	"tseslint/no-unnecessary-template-expression": "error",
	"tseslint/no-unnecessary-type-arguments": "error",
	"tseslint/no-unnecessary-type-assertion": "error",
	"tseslint/no-unnecessary-type-constraint": "error",
	"tseslint/no-unnecessary-type-parameters": "error", // Спорно
	"tseslint/no-unsafe-argument": "error",
	"tseslint/no-unsafe-assignment": "error",
	"tseslint/no-unsafe-call": "error",
	"tseslint/no-unsafe-declaration-merging": "error",
	"tseslint/no-unsafe-enum-comparison": "error",
	"tseslint/no-unsafe-function-type": "error",
	"tseslint/no-unsafe-member-access": "error",
	"tseslint/no-unsafe-return": "error",
	"tseslint/no-unsafe-unary-minus": "error",
	"tseslint/no-useless-empty-export": "error",
	"tseslint/no-var-requires": "error",
	"tseslint/no-wrapper-object-types": "error",
	"tseslint/non-nullable-type-assertion-style": "error",
	"tseslint/prefer-as-const": "error",
	"tseslint/prefer-find": "error",
	"tseslint/prefer-for-of": "error",
	"tseslint/prefer-function-type": "error",
	"tseslint/prefer-includes": "error",
	"tseslint/prefer-literal-enum-member": "error",
	"tseslint/prefer-namespace-keyword": "error",
	"tseslint/prefer-nullish-coalescing": "error",
	"tseslint/prefer-optional-chain": "error",
	"tseslint/prefer-readonly": "error",
	"tseslint/prefer-reduce-type-parameter": "error",
	"tseslint/prefer-regexp-exec": "warn",
	"tseslint/prefer-return-this-type": "error",
	"tseslint/prefer-string-starts-ends-with": ["error", { allowSingleElementEquality: "always" }],
	"tseslint/require-array-sort-compare": "error",
	"tseslint/restrict-plus-operands": "error",
	"tseslint/switch-exhaustiveness-check": ["error", { requireDefaultForNonUnion: true }],
	"tseslint/triple-slash-reference": "error",
	"tseslint/unbound-method": "error",
	"tseslint/unified-signatures": "error",
	"tseslint/use-unknown-in-catch-callback-variable": "error",

	"default-param-last": "off",
	"tseslint/default-param-last": jsRules["default-param-last"],

	"dot-notation": "off",
	"tseslint/dot-notation": jsRules["dot-notation"],

	"max-params": "off",
	"tseslint/max-params": jsRules["max-params"],

	camelcase: "off",
	"tseslint/naming-convention": [
		"error",
		{
			selector: "default",
			format: null,
			leadingUnderscore: "allowSingleOrDouble",
		},
		{
			selector: ["variableLike", "import"],
			format: ["camelCase", "PascalCase"],
			leadingUnderscore: "allowSingleOrDouble",
		},
		{
			selector: ["method", "classProperty", "typeProperty"],
			format: ["camelCase"],
			leadingUnderscore: "allowSingleOrDouble",
		},
		{
			selector: ["typeLike", "enumMember"],
			format: ["PascalCase"],
			leadingUnderscore: "forbid",
		},
	],

	"no-empty-function": "off",
	"tseslint/no-empty-function": jsRules["no-empty-function"],

	"no-implied-eval": "off",
	"tseslint/no-implied-eval": jsRules["no-implied-eval"],

	"no-loop-func": "off",
	"tseslint/no-loop-func": jsRules["no-loop-func"],

	"no-shadow": "off",
	"tseslint/no-shadow": jsRules["no-shadow"],

	"no-unused-expressions": "off",
	"tseslint/no-unused-expressions": jsRules["no-unused-expressions"],

	"no-unused-vars": "off",
	"tseslint/no-unused-vars": jsRules["no-unused-vars"],

	"no-use-before-define": "off",
	"tseslint/no-use-before-define": jsRules["no-use-before-define"],

	"no-useless-constructor": "off",
	"tseslint/no-useless-constructor": jsRules["no-useless-constructor"],

	"no-throw-literal": "off",
	"tseslint/only-throw-error": jsRules["no-throw-literal"],

	"prefer-destructuring": "off",
	"tseslint/prefer-destructuring": jsRules["prefer-destructuring"],

	"prefer-promise-reject-errors": "off",
	"tseslint/prefer-promise-reject-errors": "error",

	"require-await": "off",
	"tseslint/require-await": "error",

	"no-return-await": "off",
	"tseslint/return-await": ["error", "never"],
};

globals.node.NodeJS = false;

export default tseslint.config(
	// TypeScript
	{
		files: ["**/*.ts", "**/*.mts", "**/*.cts", "**/*.tsx"],
		ignores: ["**/dist/**"],

		languageOptions: {
			parserOptions: { project: true },
			parser: tseslint.parser,
			sourceType: "module",
			globals: globals.node,
		},

		plugins: {
			tseslint: tseslint.plugin,
			prettier,
			import: importPlugin,
		},

		rules: tsRules,
	},
	// JavaScript
	{
		files: ["**/*.js", "**/*.mjs", "**/*.cjs", "**/*.jsx"],
		ignores: ["**/dist/**"],

		languageOptions: {
			ecmaVersion: "latest",
			sourceType: "module",
			globals: globals.node,
		},

		plugins: {
			prettier,
			import: importPlugin,
		},

		rules: jsRules,
	},
);
