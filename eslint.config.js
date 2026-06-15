import js from "@eslint/js";
import globals from "globals";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { ignores: ["dist"] },
  js.configs.recommended,
  { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: globals.browser } },
  eslintConfigPrettier,
]);
