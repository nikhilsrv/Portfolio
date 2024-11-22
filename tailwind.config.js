/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-to-top": "linear-gradient(to top, rgb(194 182 237) 50%, transparent 50%)",
       
         }
      },
    },
  plugins: [],
};
