import stylisticPlugin from "@stylistic/eslint-plugin";
import { defineConfig } from "eslint/config";
import importPlugin, { createNodeResolver } from "eslint-plugin-import-x";
import nPlugin from "eslint-plugin-n";
import globals from "globals";
import tseslint from "typescript-eslint";

import type { XaliksConfigOptions } from "./config.js";
import type { Linter } from "eslint";

import { DEFAULT_CONFIG } from "./config.js";
import { eslintRules } from "./rules/eslint.js";
import { importRules } from "./rules/import-x.js";
import { nRules } from "./rules/n.js";
import { stylisticRules } from "./rules/stylistic.js";
import { typescriptRules, typescriptTypeAwareRules } from "./rules/typescript.js";

const extensions = {
	js: [".js", ".mjs", ".cjs", ".jsx"],
	ts: [".ts", ".mts", ".cts", ".tsx"],
};

export default function createConfig(_options: XaliksConfigOptions = {}) {
	const options = {
		...DEFAULT_CONFIG,
		..._options,
	};

	const cjsFiles = options.jsFiles.filter((pattern) => pattern.endsWith(".cjs"));

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

			settings: {
				// Без этого import-x не парсит .ts файлы: no-cycle, named и т.д. молча не работают
				"import-x/extensions": [...extensions.js, ...extensions.ts],
				"import-x/parsers": {
					"@typescript-eslint/parser": extensions.ts,
				},
				// import "./a.js" -> a.ts
				"import-x/resolver-next": [
					createNodeResolver({
						extensions: [...extensions.ts, ...extensions.js, ".json", ".node"],
						extensionAlias: {
							".js": [".ts", ".tsx", ".js", ".jsx"],
							".mjs": [".mts", ".mjs"],
							".cjs": [".cts", ".cjs"],
						},
					}),
				],
			},

			rules: {
				...eslintRules,
				...stylisticRules(options),
				...importRules,
				...nRules,
			},
		},

		// CommonJS
		...cjsFiles.length ? [{
			files: cjsFiles,

			languageOptions: {
				sourceType: "commonjs",
			},

			rules: {
				"import-x/no-commonjs": "off",
				"import-x/unambiguous": "off",
			},
		} satisfies Linter.Config] : [],

		// overrides для TS
		{
			files: options.tsFiles,

			languageOptions: {
				parser: tseslint.parser,
				parserOptions: {
					projectService: true,
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
