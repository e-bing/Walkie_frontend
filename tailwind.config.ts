import type { Config } from 'tailwindcss';
import { customColors } from '@/styles/colors';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
      },
      colors: customColors,
    },
  },
  plugins: [],
};

export default config;
