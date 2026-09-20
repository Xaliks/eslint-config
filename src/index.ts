import stylisticPlugin from "@stylistic/eslint-plugin";
import { defineConfig } from "eslint/config";
import importPlugin from "eslint-plugin-import-x";
import nPlugin from "eslint-plugin-n";
import globals from "globals";
import tseslint from "typescript-eslint";

import type { XaliksConfigOptions } from "./config.js";

import { DEFAULT_CONFIG } from "./config.js";
import { eslintRules } from "./rules/eslint.js";
import { importRules } from "./rules/import-x.js";
import { stylisticRules } from "./rules/stylistic.js";
import { typescriptRules, typescriptTypeAwareRules } from "./rules/typescript.js";

export default function createConfig(_options: XaliksConfigOptions = {}) {
	const options = {
		...DEFAULT_CONFIG,
		..._options,
	};

	return defineConfig(
		{
			ignores: options.ignores,
		},

		// Общие правила для JS и TS
		{
			files: [...options.jsFiles, ...options.tsFiles],

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
				"import-x": importPlugin,
				n: nPlugin,
			},

			rules: {
				...eslintRules,
				...stylisticRules(options),
				...importRules,
			},
		},

		// overrides для TS
		{
			files: options.tsFiles,

			languageOptions: {
				parser: tseslint.parser,
				parserOptions: {
					projectService: {
						allowDefaultProject: [
							"eslint.config.ts",
							"sandbox.ts",
						],
					},
				},
			},

			plugins: {
				"@typescript-eslint": tseslint.plugin,
			},

			rules: {
				...typescriptRules,
				...typescriptTypeAwareRules,
			},
		},
	);
}
