/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'desktop': {'min': '1201px'},
      // => @media (min-width: 1200px) { ... }

      'lg-laptop': {'max': '1200px'},
      // => @media (min-width: 1200px) { ... }

      'md-laptop': {'max': '992px'},
      // => @media (max-width: 1023px) { ... }

      'tablet': {'max': '768px'},
      // => @media (max-width: 767px) { ... }

      'mobile': {'max': '475px'},
      // => @media (max-width: 639px) { ... }
    },
    extend: {},
  },
  plugins: [],
}
