module.exports = {
  mode: 'jit',
  purge: ['./**/*.tsx'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        highlight: 'var(--highlight-color)',
        hot: 'var(--hot-color)',
        danger: 'var(--danger-color)',
        dark: 'var(--dark-color)',
        'body-bg-color': '--body-bg-color',
        'tw-text-opacity': '--tw-text-opacity',
      },
    },
  },
  variants: {},
  plugins: [require('tailwindcss-debug-screens')],
};
