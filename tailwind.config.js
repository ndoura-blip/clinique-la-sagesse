/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sagesse: {
          blue: '#124A9B',
          'blue-dark': '#0D3A7A',
          'blue-light': '#1A5BB5',
        },
        care: {
          blue: '#0D75C9',
          'blue-light': '#3A96E0',
          'blue-dark': '#0A5FA8',
        },
        healing: {
          green: '#199B62',
          'green-light': '#2BB577',
          'green-dark': '#138050',
        },
        navy: {
          DEFAULT: '#16324F',
          light: '#1F4061',
          dark: '#0F2539',
        },
        surface: {
          DEFAULT: '#F4F8FC',
          light: '#FAFCFE',
          'blue-gray': '#E8F0F8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'xl': '0.875rem',
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
};
