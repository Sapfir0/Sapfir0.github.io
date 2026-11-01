import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import babel from '@rolldown/plugin-babel';
import { defineConfig } from 'vite';
import { analyzer } from 'vite-bundle-analyzer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    analyzer({ analyzerPort: 1234 }),
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ]
});
