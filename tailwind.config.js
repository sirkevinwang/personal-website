const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.jsx',
    './src/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Fira Sans', ...defaultTheme.fontFamily.sans],
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '4': '4px',
        '8': '8px',
        '12': '12px',
        '16': '16px',
      },
      height: {
        "screen/2": "50vh",
        "screen/85": "85vh",
        "screen/90": "90vh",
        "screen/95": "95vh",
        "128": "32rem",
        "192": "48rem",
      },
      zIndex: {
        '-10': '-10',
        '-100': '-100',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
