/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {},
    colors: {
      primary: "#4D96FF", // A nice shade of blue
      secondary: {
        100: "#C3B1E1", // A soft purple
        200: "#A084CA", // A deeper shade of soft purple
      },
      tertiary: "#FFA07A", // A beautiful shade of orange
    },
  },
  plugins: [],
}

