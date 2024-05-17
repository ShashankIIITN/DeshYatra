/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        'main-img' : "url('/src/assets/main_img.jpg')",
        'card-img1' : "url('/src/assets/ham.jpg')"
      }
    },
  },
  plugins: [],
}