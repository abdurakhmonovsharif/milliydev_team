/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        dv:"1440px"
      },
      colors:{
        gb_color:"#6E07F3"
      }
    },
  },
  plugins: [],
}

