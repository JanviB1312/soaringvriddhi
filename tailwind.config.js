/** @type {import('tailwindcss').Config} */


module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./layout/**/*.{js,jsx}",
    "./layouts/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontSize: {
        "xxs": "0.5rem", 
      },
      colors: {
        // "logo-blue": "#5279BB",
        "logo-blue": "#023047",
        "logo-purple": "#574986",
        "logo-red": "#DF373A",
        "logo-magenta": "#77028D",
        "logo-orange": "#EF763D",
        "logo-yellow": "#FDE275",
        "education-green": "#324F4F",
        "education-orange": "#fb8500",
        "education-gold": "#ffb703",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require('tailwind-scrollbar-hide')
    
  ],
};
