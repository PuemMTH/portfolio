module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  darkMode: 'class', // This enables dark mode using the 'dark' class
  theme: {
    extend: {
      keyframes: {
        loading: {
          '0%': { backgroundColor: 'rgba(165, 243, 252, 0.5)' },
          '50%': { backgroundColor: 'rgba(165, 243, 252, 1)' },
          '100%': { backgroundColor: 'rgba(165, 243, 252, 0.5)' },
        },
      },
      animation: {
        loading: 'loading 1.5s ease-in-out infinite',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

