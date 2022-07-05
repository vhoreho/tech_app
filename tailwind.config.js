/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': {
            'max-width': 0,
            'padding': 0,
            'margin': 0
          },
          '100%': {
            'max-width': '100%'
          },
        },
        fadeOut: {
          '0%': {
            'max-width': '100%'
          },
          '100%': {
            'max-width': 0,
            'padding': 0,
            'margin': 0,
          }
        }
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out',
        fadeOut: 'fadeOut 2s ease-in-out'
      }
    },
  },
  plugins: [],
}
