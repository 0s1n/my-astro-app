/**@type {import ("prettier").Config;} */

export default {
  semi: true,
  tabWidth: 2,
  printWidth: 120,
  singleQuote: false,
  trailingComma: "es5",
  bracketSpacing: true,
  endOfLine: "lf",
  tailwindStylesheet: "./src/styles/global.css",
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: "*.astro",
      options: { parser: "astro" },
    },
  ],
};
