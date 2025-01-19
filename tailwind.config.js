/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#161618",
        secondary: "#1B1B1F",
        tertiary: "#212131",
        "blue-vibrant": "#22d1ee",
        default: "#ebebf599",
      },
      fontFamily: {
        SFMono: ["SFMono", "sans-serif"],
      },
    },
  },
  extend: {
    scrollBehavior: {
      smooth: "smooth",
    },
    keyframes: {
      fadeIn: {
        "0%": { opacity: "0" },
        "100%": { opacity: "1" },
      },
    },
    animation: {
      fadeIn: "fadeIn 0.5s ease-out",
    },
  },
};
