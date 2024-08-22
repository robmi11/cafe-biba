/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        redhat: ['"Red Hat Text"', "sans-serif"],
      },
      fontSize: {
        product: "16px",
      },
      colors: {
        rose: {
          50: "#FCF9F7",
          100: "#F4EDEB",
          300: "#C9AEA6",
          400: "#AD8985",
          500: "#87635A",
          900: "#260F08",
        },
        red: {
          10: "#C73A0F",
        },
        green: {
          10: "#1EA475",
        },
      },
    },
  },
  plugins: [],
};
