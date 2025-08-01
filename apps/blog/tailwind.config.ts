import type { Config } from 'tailwindcss';

// Enables dark mode via a `data-theme` attribute
// function setTheme(theme) {
//   document.querySelector('html').setAttribute('data-theme', theme);
// }

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      sm: '640px', // => @media (min-width: 640px)
      md: '768px', // => @media (min-width: 768px)
      lg: '1024px', // => @media (min-width: 1024px)
      xl: '1280px', // => @media (min-width: 1280px)
      '2xl': '1536px', // => @media (min-width: 1536px)
    },
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [],
};
// eslint-disable-next-line import/no-default-export
export default config;
