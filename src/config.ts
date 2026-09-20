export interface XaliksConfigOptions {
	/**
     * Файлы, которые не должны быть обработаны плагином.
     * @default ["**\/dist/**", "**\/node_modules/**"]
     */
	ignores?: string[];

	/** 
     * Файлы, которые должны быть обработаны плагином только для JS.
     * @default ["**\/*.js", "**\/*.mjs", "**\/*.cjs", "**\/*.jsx"]
     */
	jsFiles?: string[];

	/** 
     * Файлы, которые должны быть обработаны плагином только для TS.
     * @default ["**\/*.ts", "**\/*.mts", "**\/*.cts", "**\/*.tsx"]
     */
	tsFiles?: string[];

	/** 
     * Максимальная длина строки.
     * @default 120
     */
	maxCodeLength?: number;
}

export const DEFAULT_CONFIG = {
	ignores: [
		"**/dist/**",
		"**/node_modules/**",
	],

	jsFiles: ["**/*.js", "**/*.mjs", "**/*.cjs", "**/*.jsx"],
	tsFiles: ["**/*.ts", "**/*.mts", "**/*.cts", "**/*.tsx"],

	maxCodeLength: 120,
} satisfies XaliksConfigOptions;
