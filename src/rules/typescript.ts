import { Linter } from "eslint";

export const typescriptRules: Linter.RulesRecord = {
	// TypeScript знает лучше
	"constructor-super": "off",
	"getter-return": "off",
	"no-class-assign": "off",
	"no-const-assign": "off",
	"no-dupe-args": "off",
	"no-dupe-class-members": "off",
	"no-dupe-keys": "off",
	"no-func-assign": "off",
	"no-import-assign": "off",
	"no-new-native-nonconstructor": "off",
	"no-obj-calls": "off",
	"no-setter-return": "off",
	"no-this-before-super": "off",
	"no-undef": "off",
	"no-unreachable": "off", // allowUnreachableCode: false
	"no-unsafe-negation": "off",
	"no-invalid-this": "off",
	"no-redeclare": "off",

	"@typescript-eslint/adjacent-overload-signatures": "error",
	"@typescript-eslint/array-type": ["error", { default: "array-simple" }],
	"@typescript-eslint/ban-ts-comment": ["error", { "ts-expect-error": "allow-with-description" }],
	"@typescript-eslint/ban-tslint-comment": "error",
	"@typescript-eslint/class-literal-property-style": "error",
	"@typescript-eslint/class-methods-use-this": "off", // есть class-methods-use-this
	"@typescript-eslint/consistent-generic-constructors": ["error", "constructor"],
	"@typescript-eslint/consistent-indexed-object-style": "off", // пока не пофиксят баги
	"@typescript-eslint/consistent-type-assertions": "error",
	"@typescript-eslint/consistent-type-definitions": "error",
	"@typescript-eslint/consistent-type-imports": "error",
	"@typescript-eslint/default-param-last": "off", // есть default-param-last
	"@typescript-eslint/explicit-function-return-type": "off",
	"@typescript-eslint/explicit-member-accessibility": "off",
	"@typescript-eslint/explicit-module-boundary-types": "off",
	"@typescript-eslint/init-declarations": "off", // есть init-declarations
	"@typescript-eslint/max-params": "off", // есть max-params
	"@typescript-eslint/member-ordering": "error", // Лень настраивать
	"@typescript-eslint/method-signature-style": ["error", "method"],
	"@typescript-eslint/no-array-constructor": "off", // есть no-array-constructor
	"@typescript-eslint/no-confusing-non-null-assertion": "error",
	"@typescript-eslint/no-deprecated": "error",
	"@typescript-eslint/no-dupe-class-members": "off", // оно в TS вообще не нужно
	"@typescript-eslint/no-duplicate-enum-values": "error",
	"@typescript-eslint/no-dynamic-delete": "error",
	"@typescript-eslint/no-empty-function": "off", // есть no-empty-function
	"@typescript-eslint/no-empty-object-type": "error",
	"@typescript-eslint/no-explicit-any": "error",
	"@typescript-eslint/no-extra-non-null-assertion": "error",
	"@typescript-eslint/no-extraneous-class": "off",
	"@typescript-eslint/no-import-type-side-effects": "off", // есть import/consistent-type-specifier-style
	"@typescript-eslint/no-inferrable-types": "error",
	"@typescript-eslint/no-invalid-this": "off", // есть no-invalid-this
	"@typescript-eslint/no-invalid-void-type": ["error", { allowAsThisParameter: true }],
	"@typescript-eslint/no-magic-numbers": "off", // есть no-magic-numbers
	"@typescript-eslint/no-misused-new": "error",
	"@typescript-eslint/no-namespace": "error",
	"@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
	"@typescript-eslint/no-non-null-asserted-optional-chain": "error",
	"@typescript-eslint/no-non-null-assertion": "off",
	"@typescript-eslint/no-redeclare": "off", // TS сам справится
	"@typescript-eslint/no-require-imports": "error",
	"@typescript-eslint/no-restricted-types": "off",
	"@typescript-eslint/no-shadow": "off", // есть no-shadow
	"@typescript-eslint/no-this-alias": "error",
	"@typescript-eslint/no-unnecessary-parameter-property-assignment": "error",
	"@typescript-eslint/no-unnecessary-type-constraint": "error",
	"@typescript-eslint/no-unsafe-declaration-merging": "error",
	"@typescript-eslint/no-unsafe-function-type": "error",
	"@typescript-eslint/no-unused-expressions": "off", // есть no-unused-expressions

	"no-unused-private-class-members": "off",
	"@typescript-eslint/no-unused-private-class-members": "error", // core еще не до конца нагнал

	"no-unused-vars": "off",
	"@typescript-eslint/no-unused-vars": "off", // core еще не до конца нагнал
	
	"@typescript-eslint/no-use-before-define": "off", // есть no-use-before-define
	"@typescript-eslint/no-useless-constructor": "off", // есть no-useless-constructor
	"@typescript-eslint/no-useless-empty-export": "error",
	"@typescript-eslint/no-wrapper-object-types": "error",
	"@typescript-eslint/parameter-properties": ["error", { prefer: "parameter-property" }], // хз
	"@typescript-eslint/prefer-as-const": "error",
	"@typescript-eslint/prefer-enum-initializers": "off",
	"@typescript-eslint/prefer-for-of": "error",
	"@typescript-eslint/prefer-function-type": "error",
	"@typescript-eslint/prefer-literal-enum-member": ["error", { allowBitwiseExpressions: true }],
	"@typescript-eslint/prefer-namespace-keyword": "error",
	"@typescript-eslint/triple-slash-reference": "error",
	"@typescript-eslint/unified-signatures": "error",
};
 
export const typescriptTypeAwareRules: Linter.RulesRecord = {
	"@typescript-eslint/await-thenable": "error",
	"@typescript-eslint/consistent-return": "off", // tsconfig.noImplicitReturns делает это лучше
	"@typescript-eslint/consistent-type-exports": ["error", { fixMixedExportsWithInlineTypeSpecifier: false }], // import/consistent-type-specifier-style
	
	"dot-notation": "off",
	"@typescript-eslint/dot-notation": ["error", {
		allowPrivateClassPropertyAccess: true,
		allowProtectedClassPropertyAccess: true,
		allowIndexSignaturePropertyAccess: true,
	}],

	"id-match": "off",
	"id-denylist": "off",
	"id-length": "off",
	"no-underscore-dangle": "off",
	camelcase: "off",
	"@typescript-eslint/naming-convention": ["error",
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
		{
			selector: "variable",
			modifiers: ["const", "global"],
			format: ["UPPER_CASE", "camelCase", "PascalCase"],
		},
		{
			selector: "variable",
			modifiers: ["destructured"],
			format: null, // const { user_id, created_at } = await response.json();
		},
	],

	"@typescript-eslint/no-array-delete": "error",
	"@typescript-eslint/no-base-to-string": "error",
	"@typescript-eslint/no-confusing-void-expression": "off",
	"@typescript-eslint/no-floating-promises": ["error", {
		ignoreIIFE: true,
	}],
	"@typescript-eslint/no-for-in-array": "error",
	"@typescript-eslint/no-implied-eval": "off", // есть no-implied-eval
	"@typescript-eslint/no-meaningless-void-operator": "error",
	"@typescript-eslint/no-misused-promises": ["error", {
		checksVoidReturn: {
			attributes: false, // JSX onClick={async () => ...}
		},
	}],
	"@typescript-eslint/no-misused-spread": "error",
	"@typescript-eslint/no-mixed-enums": "error",
	"@typescript-eslint/no-redundant-type-constituents": "error",
	"@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
	"@typescript-eslint/no-unnecessary-condition": "error",
	"@typescript-eslint/no-unnecessary-qualifier": "error",
	"@typescript-eslint/no-unnecessary-template-expression": "error",
	"@typescript-eslint/no-unnecessary-type-arguments": "error",
	"@typescript-eslint/no-unnecessary-type-assertion": "error",
	"@typescript-eslint/no-unnecessary-type-conversion": "error",
	"@typescript-eslint/no-unnecessary-type-parameters": "error",
	"@typescript-eslint/no-unsafe-argument": "error",
	"@typescript-eslint/no-unsafe-assignment": "error",
	"@typescript-eslint/no-unsafe-call": "error",
	"@typescript-eslint/no-unsafe-enum-comparison": "error",
	"@typescript-eslint/no-unsafe-member-access": "error",
	"@typescript-eslint/no-unsafe-return": "error",
	"@typescript-eslint/no-unsafe-type-assertion": "off", // as и нужен для сужения типов
	"@typescript-eslint/no-unsafe-unary-minus": "error",
	"@typescript-eslint/no-useless-default-assignment": "error",
	"@typescript-eslint/non-nullable-type-assertion-style": "error",

	"no-throw-literal": "off",
	"@typescript-eslint/only-throw-error": ["error", {
		allowRethrowing: true
	}],

	"prefer-destructuring": "off",
	"@typescript-eslint/prefer-destructuring": ["error", { array: true, object: false }],	

	"@typescript-eslint/prefer-find": "error",
	"@typescript-eslint/prefer-includes": "error",
	"@typescript-eslint/prefer-nullish-coalescing": "error",
	"@typescript-eslint/prefer-optional-chain": "error",

	"prefer-promise-reject-errors": "off",
	"@typescript-eslint/prefer-promise-reject-errors": ["error", {
		allowThrowingUnknown: true, // нужен для re-throw error: unknown из catch
	}],

	"@typescript-eslint/prefer-readonly": "error",
	"@typescript-eslint/prefer-readonly-parameter-types": "off",
	"@typescript-eslint/prefer-reduce-type-parameter": "error",
	"@typescript-eslint/prefer-regexp-exec": "error",
	"@typescript-eslint/prefer-return-this-type": "error",
	"@typescript-eslint/prefer-string-starts-ends-with": "error",
	"@typescript-eslint/promise-function-async": "off",
	"@typescript-eslint/related-getter-setter-pairs": "error",
	"@typescript-eslint/require-array-sort-compare": "error",

	"require-await": "off",
	"@typescript-eslint/require-await": "error",

	"@typescript-eslint/restrict-plus-operands": "error",
	"@typescript-eslint/restrict-template-expressions": ["error", {
		allowNumber: true,
		allowBoolean: true,
		allowRegExp: true,
		allowNullish: false,
		allowAny: false,
		allowNever: false,
		allowArray: false,
		allow: [
			{ from: "lib", name: ["Error", "URL", "URLSearchParams"] },
			{ from: "package", name: ["Big"], package: "big.js" },
		],
	}],

	"@typescript-eslint/return-await": ["error", "in-try-catch"],
	"@typescript-eslint/strict-boolean-expressions": "off",
	"@typescript-eslint/strict-void-return": "off",
	"@typescript-eslint/switch-exhaustiveness-check": ["error", { requireDefaultForNonUnion: true }],
	"@typescript-eslint/unbound-method": "error",
	"@typescript-eslint/use-unknown-in-catch-callback-variable": "error",
};
