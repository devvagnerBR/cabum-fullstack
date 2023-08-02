// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': ['Poppins']
      },
      colors: {
        orange: {
          500: '#ff6500', // Substitui o valor do orange-500 para #ff6500
        },
        blue: {
          500: '#0060B1'
        }
      },
    },
  },
  plugins: [],
};
