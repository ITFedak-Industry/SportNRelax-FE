import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// eslint-disable-next-line import/no-default-export
export default defineConfig(() => ({
  build: {
    target: 'es2022', // https://github.com/remix-run/react-router/discussions/13277
  },
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
}));
