import { Linter } from "eslint";

export const importRules: Linter.RulesRecord = {
	"import-x/consistent-type-specifier-style": ["error", "prefer-top-level"],
	"import-x/default": "error",
	"import-x/dynamic-import-chunkname": "off",
	"import-x/export": "error",
	"import-x/exports-last": "off",
	"import-x/extensions": "off", // Для каждого проекта должно быть свое решение
	"import-x/first": "error",
	"import-x/group-exports": "off",
	"import-x/max-dependencies": "off",
	"import-x/named": "error",
	"import-x/namespace": "error",
	"import-x/newline-after-import": ["error", { count: 1, considerComments: true }],
	"import-x/no-absolute-path": "error",
	"import-x/no-amd": "error",
	"import-x/no-anonymous-default-export": "error",
	"import-x/no-commonjs": "error",
	"import-x/no-cycle": ["error", {
		maxDepth: 4, // Возможно придется обновить на 1
		ignoreExternal: true,
		allowUnsafeDynamicCyclicDependency: false
	}],
	"import-x/no-default-export": "off",
	"import-x/no-deprecated": "off", // С этим лучше справляется @typescript-eslint/no-deprecated
	"import-x/no-duplicates": "off", // уже используем extensions
	"import-x/no-dynamic-require": "error",
	"import-x/no-empty-named-blocks": "error",
	"import-x/no-extraneous-dependencies": "error",
	"import-x/no-import-module-exports": "error",
	"import-x/no-internal-modules": "off",
	"import-x/no-mutable-exports": "error",
	"import-x/no-named-as-default-member": "error",
	"import-x/no-named-as-default": "error",
	"import-x/no-named-default": "error",
	"import-x/no-named-export": "off",
	"import-x/no-namespace": "off",
	"import-x/no-nodejs-modules": "off",
	"import-x/no-relative-packages": "off",
	"import-x/no-relative-parent-imports": "off",
	"import-x/no-rename-default": "error",
	"import-x/no-restricted-paths": "off", // в связке с no-restricted-imports от Eslint
	"import-x/no-self-import": "error",
	"import-x/no-unassigned-import": "off",
	"import-x/no-unresolved": "off",
	"import-x/no-unused-modules": "off", // с eslint v10 no-op, есть no-unused-vars
	"import-x/no-useless-path-segments": "error",
	"import-x/no-webpack-loader-syntax": "error",
	"import-x/order": ["error",
		{
			groups: ["builtin", "external", "type", "internal", "parent", "sibling", "index", "object"],
			"newlines-between": "always",
			alphabetize: { order: "asc" },
			named: true,
		},
	],
	"import-x/prefer-default-export": "off",
	"import-x/prefer-namespace-import": "off",
	"import-x/unambiguous": "error",
};
