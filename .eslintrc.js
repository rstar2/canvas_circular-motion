
// this is not providing good intellisense for the "rules" and their props
/**
 * @type {import("eslint").Linter.Config}
 */


// this will make intellisense work for the "rules" as well
/**
 * @typedef {Object} ESLintRules
 * @property {import('eslint/rules').ESLintRules} rules
 * 
 * @typedef {import('eslint').Linter.Config&ESLintRules} ESLintConfig
 */

/**
 * @type {ESLintConfig}
 */
// eslint-disable-next-line
module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: "eslint:recommended",
    parserOptions: {
        sourceType: "module",
        ecmaVersion: "latest",
    },
    rules: {
        indent: ["error", 4],
        quotes: ["error", "double"],
        semi: ["error", "always"],
        "comma-dangle": ["error", {
            "arrays": "always-multiline",
            "objects": "always-multiline",
            "imports": "never",
            "exports": "never",
            "functions": "never"
        }]
    },
};
