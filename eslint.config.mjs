import pluginJs from "@eslint/js"
import eslintConfigPrettier from "eslint-config-prettier"
import globals from "globals"
import path from "path"
import tseslint from "typescript-eslint"

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  {
    ignores: ["eslint.config.mjs"],
  },
  {
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        project: true, // This will automatically find your tsconfig.json
        tsconfigRootDir: path
          .dirname(import.meta.url)
          .replace(/^file:\/\//, ""),
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  eslintConfigPrettier,
  {
    rules: {
      // "@typescript-eslint/no-unused-vars": ["error", { "args": "none", "varsIgnorePattern": "^_" }],
      // "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          varsIgnorePattern: "^_",
        },
      ],
    },
  },
]
