/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        ubuntu: {
          1: "#dd4814",
          2: "#77216f",
          3: "#5e2750",
          4: "#2c001e",
          5: "#aea79f",
          6: "#333333",
          7: "#2c2c2c",
          8: "#3e3e3e",
          9: "#343434",
          10: "#1d1d1d",          
        },
      },
    },
  },
  plugins: [],
}
