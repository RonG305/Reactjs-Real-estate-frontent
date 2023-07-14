/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'lobster': ['Lobster', 'Open Sans']
      },

      backgroundImage: {
        'bg-image': ['./public/23600.jpg']
      } ,
      
    },
  },
  plugins: [],
}

