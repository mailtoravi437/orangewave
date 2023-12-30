/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
        lato: ["Lato"],
        garamond: ["Garamond"],
      },
      colors: {
        Black: "#1A2635",
        Secondary: "#37c4cd",
        Primary: "#1456a2",
        White: "#ffffff",
        Orange: "#ff9124",
      },
      borderRadius: {
        none: "0",
        xs: "0.125rem",
        sm: "0.25rem",
        default: "0.27327993512153625rem",
        lg: "0.3125rem",
        xl: "0.5rem",
        "2xl": "1.2328476905822754rem",
        "3xl": "1.232847809791565rem",
        "4xl": "1.5rem",
        "5xl": "2rem",
        "6xl": "2.5rem",
        "7xl": "3rem",
        "8xl": "3.75rem",
        full: "9999px",
      },
    },
  },
  plugins: [],
};
