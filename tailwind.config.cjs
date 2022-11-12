/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "realistic-1": "0 1px 1px hsl(0deg 0% 0% / 0.075),0 2px 2px hsl(0deg 0% 0% / 0.075),0 4px 4px hsl(0deg 0% 0% / 0.075),0 8px 8px hsl(0deg 0% 0% / 0.075),0 16px 16px hsl(0deg 0% 0% / 0.075)",
        "realistic-2": "0 1px 1px rgba(0,0,0,0.11),  0 2px 2px rgba(0,0,0,0.11),  0 4px 4px rgba(0,0,0,0.11),  0 6px 8px rgba(0,0,0,0.11), 0 8px 16px rgba(0,0,0,0.11)"
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },
      colors: {
        dark: {
          "1": "#757575",
          "2": "#616161",
          "3": "#424242",
          "4": "#212121"
        },
        lighten: {
          "1": "#BDBDBD",
          "2": "#E0E0E0",
          "3": "#EEEEEE",
        },
        "bluegrey-dark": {
          "4": "#263238",
          "3": "#37474F",
          "2": "#455A64",
          "1": "#546E7A"
        },
        "bluegrey-light": {
          "1": "#78909C",
          "2": "#90A4AE",
          "3": "#B0BEC5",
        }
      }
    },
  },
  plugins: [],
}