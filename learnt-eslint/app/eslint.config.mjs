import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";
import globals from "globals";
import js from "@eslint/js";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
  },
  {
    rules: {
      "no-import-assign": "error",
      "no-unassigned-vars": "error",
      "no-unused-vars": "error",
      "no-console": "warn",
      "no-magic-numbers": "warn",
      "no-unneeded-ternary": "error",
    },
  },
  tseslint.configs.recommended,
]);
