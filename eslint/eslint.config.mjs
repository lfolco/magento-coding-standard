import { defineConfig } from "eslint/config";
import magentoCodingStandardEslintPlugin from "magento-coding-standard-eslint-plugin";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});
export default defineConfig([{
    extends: compat.extends(
        "./.eslintrc-reset",
        "./.eslintrc-magento",
        "./.eslintrc-jquery",
        "./.eslintrc-misc",
    ),
    plugins: {
        "magento-coding-standard-eslint-plugin": magentoCodingStandardEslintPlugin,  // This is in flat config format (object)
    }
}]);
