/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './index.html',
  ],
  theme: {
    colors: {
      'bright-orange': 'hsl(31, 77%, 52%)',
      'dark-cyan': 'hsl(184, 100%, 22%)',
      'very-dark-cyan': 'hsl(179, 100%, 13%)',
      'white': 'hsla(0, 0%, 100%, 0.75)',
      'light-gray': 'hsl(0, 0%, 95%)',
    },
    fontFamily: {
      lexend: ['Lexend Deca', 'sans-serif'],
      shoulders: ['Big Shoulders Display', 'serif'],
    },
    fontSize: {
      sm: '0.8rem',
      base: '0.9375rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '2.125rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    borderRadius: {
      'sm': '12px',
      'large' : '100px',
    },
    extend: {
      spacing: {
        '1rem': '16px',
        '2rem': '28px',
      }
    },
  },
  plugins: [],
}

