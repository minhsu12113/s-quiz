/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      'colors' : {
        'cyan':{
          200 : '#a5f3fc',
          300 : '#67e8f9',
          400 : '#22d3ee',
          500 : '#06b6d4',
          600 : '#0891b2',
        },
        'slate': {
          100: '#f1f5f9',
          200: '#e2e8f0',
        }
      }
    },
  },
  plugins: [],
}
