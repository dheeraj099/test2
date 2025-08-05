/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grey: {
          50: "#F6F6F6",
          100: "#E7E7E7",
          200: "#D1D1D1",
          300: "#B0B0B0",
          500: "#666666",
          600: "#5D5D5D",
          700: "#4F4F4F",
          800: "#454545",
          900: "#3D3D3D",
          950: "#262626"
        },
        blues: {
          50: "#EEF2FF",
          100: "#DFE6FF",
          200: "#C6D0FF",
          400: "#7E87FB",
          500: "#5757F4",
          600: "#4F42E9",
          700: "#4334CE",
          800: "#372DA6",
          900: "#312C83",
          950: "#1E1A4C"
        },
        primary: {
          light: "#F2F2F7",
          dark: "#0D0E11",
        },
        secondary: {
          light: "#FFFFFF",
          dark: "#16191F"
        }
      }
    }
  },
  plugins: [],
}
