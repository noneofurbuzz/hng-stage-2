/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero' : "url('/assets/images/Hero.svg')" 
      },
      fontFamily:{
        "DM-sans" : ["DM-sans","sans"]
      },
      screens:{
        "xs" : "590px"
      }
    },
  },
  plugins: [],
}

