import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

const eslintConfig = [
  ...compat.config({
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double"],
    },
    extends: [
      // "next/core-web-vitals",
      // "next/typescript",
      // "eslint:recommended",
      // "plugin:react/recommended",
      // "plugin:react-hooks/recommended",
      "prettier",
      "next",
    ],
  }),
];

export default eslintConfig;
