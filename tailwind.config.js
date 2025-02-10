/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C6A85C', // Luxury gold
        secondary: '#9CA3AF', // Silver
        accent: '#DDB870', // Light gold
        dark: '#0A0A0A', // Rich black
        'dark-gray': '#1A1A1A',
        'light-gray': '#E5E7EB',
        'gold-gradient-from': '#C6A85C',
        'gold-gradient-to': '#DDB870',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gold-shine': 'linear-gradient(to right, #C6A85C, #DDB870, #C6A85C)',
      },
      boxShadow: {
        'gold': '0 0 20px rgba(198, 168, 92, 0.2)',
        'silver': '0 0 20px rgba(156, 163, 175, 0.2)',
      },
    },
  },
  plugins: [],
} 