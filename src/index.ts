import { defineConfig } from 'eslint/config';
import globals from "globals";
import tseslint from "typescript-eslint";
import stylisticPlugin from "@stylistic/eslint-plugin";
import importPlugin from "eslint-plugin-import";

import { eslintRules } from "./rules/eslint.js";
import { stylisticRules } from "./rules/stylistic.js";
import { importRules } from "./rules/import.js";
import { typescriptRules, typescriptTypeAwareRules } from "./rules/typescript.js";

const IGNORES = [
    "**/dist/**",
    "**/node_modules/**",
];

const JS_FILES = ["**/*.js", "**/*.mjs", "**/*.cjs", "**/*.jsx"];
const TS_FILES = ["**/*.ts", "**/*.mts", "**/*.cts", "**/*.tsx"];

export default defineConfig(
    {
        ignores: IGNORES,
    },

    // Общие правила для JS и TS
    {
        files: [...JS_FILES, ...TS_FILES],

        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                ...globals.node,
                NodeJS: "off",
            },
        },

        plugins: {
            "@stylistic": stylisticPlugin,
            import: importPlugin,
        },

        rules: {
            ...eslintRules,
            ...stylisticRules,
            ...importRules,
        },
    },

    // overrides для TS
    {
        files: TS_FILES,

        languageOptions: {
            parser: tseslint.parser,
            parserOptions: { project: false },
        },

        plugins: {
            "@typescript-eslint": tseslint.plugin,
        },

        rules: typescriptRules,
    },
    // type-aware правила
    {
		files: TS_FILES,
 
		languageOptions: {
			parser: tseslint.parser,
			parserOptions: { project: true },
		},
 
		plugins: {
			"@typescript-eslint": tseslint.plugin,
		},
 
		rules: typescriptTypeAwareRules,
	},
);
