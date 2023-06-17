/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './index.html',
   
  ],
  theme: {
    colors: {
      'soft-blue': 'hsl(215, 51%, 70%)',
      'cyan': 'hsl(178, 100%, 50%)',
      'blue-main': 'hsl(217, 54%, 11%)',
      'blue-card': 'hsl(216, 50%, 16%)',
      'blue-line': 'hsl(215, 32%, 27%)',
      'white': 'hsl(0, 0%, 100%)',
  
    },
    fontFamily: {
      sans: ['Outfit', 'sans-serif'],
     
    },
    extend: {
      maxWidth: {
        'card-size': '350px',
      }
    },
  },
  plugins: [],
}