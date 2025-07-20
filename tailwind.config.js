// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#34967C',     // main green (used in navbar & buttons)
        secondary: '#161117',   // dark text
        accent: '#FFA800',      // yellow (used for rating stars)
        neutral: '#F9F9F9',     // background of cards/filters
        grayText: '#737373',    // subtitles and muted labels
        shimmerStart: '#E6E6E6', // shimmer gradient start
        shimmerEnd: '#EDEDED',   // shimmer gradient end
        customGray: '#616161',
      },
      backgroundImage: {
        shimmer: 'linear-gradient(to right, #E6E6E6, #EDEDED)',
      },
      boxShadow: {
        card: '0 4px 12px rgba(0, 0, 0, 0.05)',
        cardHover: '0 8px 20px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        card: '1rem',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};
