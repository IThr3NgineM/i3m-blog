/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        "i3m-main": "#050DEB",
        "i3m-dark": "#100D28",
        "i3m-purple": "#8906E6",
        "i3m-pink": "#FF00E2",
        white: "#FFFFFF",
      },
      fontFamily: {
        sans: ["Maven Pro", "sans-serif"], //  Maven Pro
      },
      fontSize: {
        title: "34px", // Title size
        subtitle: "23.5px", // Subtitle and heading size
        body: "23.5px", // Body text size
      },
      fontWeight: {
        regular: 400, // Normal weight for body text
        bold: 700, // Bold weight for titles and headings
      },
    },
  },
  plugins: [
    // addVariablesForColors,
  ],
};