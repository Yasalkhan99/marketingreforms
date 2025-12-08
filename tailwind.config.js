/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
      },
      fontSize: {
        /* Create a tailwind utility class `text-button-font-size` that uses the CSS var */
        'button-font-size': 'var(--button-font-size)',
      },
      fontFamily: {
        /* Map custom font variables to Tailwind utilities such as `font-satoshi` */
        satoshi: ['var(--font-satoshi)'],
        clash: ['var(--font-clashDisplay)'],
      },
    },
  },
  plugins: [],
};
