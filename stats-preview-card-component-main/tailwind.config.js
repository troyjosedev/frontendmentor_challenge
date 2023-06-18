/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './index.html',],
  theme: {
    screens: {
      sm: '23.4375rem',
      md: '36rem',
      lg: '66.75rem',
      // lg: '61rem',
      // xl: '90rem',
    },
    fontSize: {
      xm: '0.75rem',
      sm: '0.9375rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.75rem',
      '4xl': '2.35rem',
      '5xl': '3.052rem',
    },
    lineHeight: {
      'extra-loose': '2.5',
      '12': '3rem',
    },
    colors: {
      'dark-blue': 'hsl(233, 47%, 7%)',
      'desaturated-blue': 'hsl(244, 38%, 16%)',
      'soft-violet': 'hsl(277, 64%, 61%)',
      'white': 'hsl(0, 0%, 100%)',
      'main-white': 'hsla(0, 0%, 100%, 0.75)',
      'heading-white': ' hsla(0, 0%, 100%, 0.6)',
    },
    fontFamily: {
      Inter: ['Inter', 'sans-serif'],
      Lexend: ['Lexend Deca', 'serif'],
    extend: {},
  },
  plugins: [],
}
}