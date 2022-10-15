
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    screens: {
      'sm': '320px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
    
      
              colors: {
                pink: {
                  50: "#ffa4e8",
                  100: "#ff9ade",
                  200: "#ff90d4",
                  300: "#ff86ca",
                  400: "#fe7cc0",
                  500: "#f472b6",
                  600: "#ea68ac",
                  700: "#e05ea2",
                  800: "#d65498",
                  900: "#cc4a8e",
                },

    },
  },
  plugins: [],
  }
}
