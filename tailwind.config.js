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
        "DM-sans" : ["DM-sans","sans"],
        "poppins" : ["poppins","sans"]
      },
      screens:{
        "xs" : "590px",
        "xlg" : "1200px",
        "xmd" : "900px",
        "xsm" : "600px",
        "xxs" : "480px",
        
      }
    },
  },
  plugins: [],
}

