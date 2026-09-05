import { Linter } from "eslint";

export const nRules: Linter.RulesRecord = {
    "n/callback-return": "error",
    "n/exports-style": ["error", "exports"],
    "n/file-extension-in-import": "off", // TypeScript знает лучше
    "n/global-require": "error",
    "n/handle-callback-err": "error",
    "n/hashbang": "error",
    "n/no-callback-literal": "off",
    "n/no-deprecated-api": "error",
    "n/no-exports-assign": "error",
    "n/no-extraneous-import": "off", // есть import-x/no-extraneous-dependencies
    "n/no-extraneous-require": "off", // есть import-x/no-extraneous-dependencies
    "n/no-missing-import": "off", // есть import-x/no-unresolved
    "n/no-missing-require": "off", // есть import-x/no-unresolved
    "n/no-mixed-requires": "error", // есть import-x/order
    "n/no-new-require": "error",
    "n/no-path-concat": "error",
    "n/no-process-env": "off",
    "n/no-process-exit": "off",
    "n/no-restricted-import": "off", // есть import-x/no-restricted-paths
    "n/no-restricted-require": "off", // есть import-x/no-restricted-paths
    "n/no-sync": "off",
    "n/no-top-level-await": "off",
    "n/no-unpublished-bin": "off", // > npm v10
    "n/no-unpublished-import": "off",
    "n/no-unpublished-require": "off",

    "n/no-unsupported-features/es-builtins": "error",
    "n/no-unsupported-features/es-syntax": "error",
    "n/no-unsupported-features/node-builtins": "error",

    "n/prefer-global/buffer": "error",
    "n/prefer-global/console": "error",
    "n/prefer-global/crypto": "error", // webcrypto
    "n/prefer-global/process": "error",
    "n/prefer-global/text-decoder": "error",
    "n/prefer-global/text-encoder": "error",
    "n/prefer-global/timers": "error",
    "n/prefer-global/url": "error",
    "n/prefer-global/url-search-params": "error",

    "n/prefer-import/assert-strict": "error",
    "n/prefer-node-protocol": "error",
    "n/prefer-process-get-builtin-module": "off", // Мир пока не готов к process.getBuiltinModule()
    "n/prefer-promises/dns": "error",
    "n/prefer-promises/fs": "error",
    "n/process-exit-as-throw": "error",
};
