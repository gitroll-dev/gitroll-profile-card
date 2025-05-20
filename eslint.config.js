import globals from "globals";
import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2021, // es2020 was in env, but parserOptions had 12 (2021)
      sourceType: "module",
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      // Add any specific rules here if needed in the future
    },
  }
];
