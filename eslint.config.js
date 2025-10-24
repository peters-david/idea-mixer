const {
    defineConfig,
} = require("eslint/config");

const tsParser = require("@typescript-eslint/parser");
const typescriptEslint = require("@typescript-eslint/eslint-plugin");
const react = require("eslint-plugin-react");
const reactNative = require("eslint-plugin-react-native");
const globals = require("globals");
const js = require("@eslint/js");

const {
    FlatCompat,
} = require("@eslint/eslintrc");

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

module.exports = defineConfig([{
    languageOptions: {
        parser: tsParser,
        ecmaVersion: 2021,
        sourceType: "module",

        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },
        },

        globals: {
            ...globals.node,
            ...reactNative.environments["react-native"]["react-native"],
            jest: "readonly",
            describe: "readonly",
            test: "readonly",
            expect: "readonly",
            beforeEach: "readonly",
            afterEach: "readonly",
        },
    },

    extends: compat.extends(
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:react-native/all",
    ),

    plugins: {
        "@typescript-eslint": typescriptEslint,
        react,
        "react-native": reactNative,
    },

    settings: {
        react: {
            version: "detect",
        },
    },

    rules: {
        "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
        "react/prop-types": "off",
        "react/react-in-jsx-scope": "off",
        "react-native/no-inline-styles": "warn",
        "react-native/no-unused-styles": "warn",
        'react-native/no-color-literals': 'warn',
        "react-native/split-platform-components": "warn",
        "react-native/sort-styles": "off",
        "@typescript-eslint/no-require-imports": "off",
        "@typescript-eslint/no-unused-vars": "off",
    },
}]);