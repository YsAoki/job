import react from '@vitejs/plugin-react';
import { defineConfig, UserConfigExport } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    include: ['src/**/*.test.ts'], 
  },
} as UserConfigExport);
