import { transform } from 'typescript'

/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin")

const myClass = plugin(function({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    }
  })
})


export default {
  content: ["./index.html", "./src/**/*.{tsx,jsx,ts,js}"],
  theme: {
    extend: {},
  },
  plugins: [myClass],
}

