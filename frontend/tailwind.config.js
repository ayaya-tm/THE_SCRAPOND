export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 5s ease-in-out infinite',
        'pulse-slower': 'pulse-slower 7s ease-in-out infinite',
      },
      keyframes: {
        'pulse-slower': {
          '0%, 100%': { opacity: '0.05' },
          '50%': { opacity: '0.25' },
        },
      },
    },
  },
  plugins: [],
}
