/* eslint-env node */
module.exports = {
  root: true,
  extends: ["plugin:vue/vue3-essential", "eslint:recommended"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    semi: ["warn", "always"],
    // semi = 要求或禁止使用分號
    // off 或 0 ：關閉此規則
    // warn 或 1 ：將此規則設為警告層級
    // error 或 2 ：將此規則設為錯誤層級
    // always = 要求在语句末尾使用分号
    quotes: ["warn", "double"],
    // quotes = 强制使用一致反引號、單引、雙引
    // off 或 0 ：關閉此規則
    // warn 或 1 ：將此規則設為警告層級
    // error 或 2 ：將此規則設為錯誤層級
    // "double" 要求尽可能地使用双引号
    // "single" 要求尽可能地使用单引号
    // "backtick" 要求尽可能地使用反勾号
  },
};
