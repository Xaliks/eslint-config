import { defineConfig } from "eslint/config";

import config from "./src/index.js";

export default defineConfig(
	config(),

	// Только для локальной разработки: файлы вне tsconfig.json
	{
		files: ["**/*.ts"],
		languageOptions: {
			parserOptions: {
				projectService: {
					allowDefaultProject: ["eslint.config.ts", "sandbox.ts"],
					defaultProject: "tsconfig.json", // compilerOptions для файлов выше
				},
			},
		},
	},
);
