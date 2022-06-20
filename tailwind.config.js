/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ["./src/**/*.{js,jsx,ts,tsx}",],
  content: [
    
  ],
  theme: {
    extend: {
      fontFamily: {},
      colors:{
        pblue: "#F0F9FF",
        bblue: "#1E27F9",
        dblue: "#0E132F",
        fgray: "#F5F7F9",
        cgray: "#F5F5F5",
        pyellow: "#FFBE0A1A",
        lpink: "#FF4F791F",
        lgray: "#565A6D",
      }
    },
  },
  plugins: [],
}