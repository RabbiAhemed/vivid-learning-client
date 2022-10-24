/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
  },
  prefix: "tw-",
  plugins: [require("flowbite/plugin")],
};
