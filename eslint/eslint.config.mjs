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
    },
    rules: {
        "magento-coding-standard-eslint-plugin/jquery-no-andSelf": "warn",
        "magento-coding-standard-eslint-plugin/jquery-no-bind-unbind": "warn",
        "magento-coding-standard-eslint-plugin/jquery-no-delegate-undelegate": "warn",
        "magento-coding-standard-eslint-plugin/jquery-no-deprecated-expr": "warn",
        "magento-coding-standard-eslint-plugin/jquery-no-event-shorthand": "warn",
        "magento-coding-standard-eslint-plugin/jquery-no-input-event-shorthand": "warn",
        "magento-coding-standard-eslint-plugin/jquery-no-misc-deprecated-functions": "warn",
        "magento-coding-standard-eslint-plugin/jquery-no-size": "warn",
        "magento-coding-standard-eslint-plugin/jquery-no-trim": "warn",
    },
}]);
