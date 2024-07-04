export default {
  content: [
    "./index.html",
    './news.html'
  ],
  theme: {
    screens: {
      'sm': { 'max': '767px'},

      'md': { 'max': '1023px'},

      'lg': {'max': '1279px'},

      'xl': {'max': '1535px'},

      '2xl': {'max': '2600px'},
    },
    extend: {
      animation: {
        marquee: 'marquee 2000s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
};
