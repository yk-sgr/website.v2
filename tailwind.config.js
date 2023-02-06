/** @type {import('tailwindcss').Config} */
module.exports = {
  css: ["~/assets/css/main.css"],
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    fontFamily: {
      sans: ["JetbrainsMono"],
    },
    extend: {
      colors: {
        "page-background": "#0d0d0d",
      },
    },
  },
  plugins: [],
};
