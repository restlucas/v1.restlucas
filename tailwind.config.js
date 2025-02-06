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
      keyframes: {
        "entrance-right": {
          "0%": {
            transform: "translateX(100vw)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        "exit-right": {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(100vw)",
          },
        },
      },
      animation: {
        "fade-in": "entrance-right .15s ease-in",
        "fade-out": "exit-right .15s ease-out",
      },
    },
  },
  extend: {
    scrollBehavior: {
      smooth: "smooth",
    },
  },
};
