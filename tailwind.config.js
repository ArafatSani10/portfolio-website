module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          '0%': {
            transform: 'translateX(100%)',
          },
          '100%': {
            transform: 'translateX(-100%)',
          },
        },
      },
      animation: {
        marquee: 'marquee 10s linear infinite',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
