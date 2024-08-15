/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xsm': '500px',
        'sm': '640px',
        'md': '768px',
        'lmd': '870px',
        'slg':'900px',
        'lg': '1024px',
        'sxl': '1280px',
        'xl': '1373px',
        '2xl': '1536px',
      },

      fontFamily: {
        anton: ['Anton', 'sans-serif'],
        tinos: ['Tinos', 'serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

