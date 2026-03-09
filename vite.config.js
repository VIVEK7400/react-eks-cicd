import { defineConfig } from 'vite';
// import { visualizer } from 'rollup-plugin-visualizer';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.JPG', '**/*.jpg', '**/*.png', '**/*.PNG','**/*.jpeg', '**/*.webp', '**/*.gif', '**/*.avif',], // Include file types explicitly
  server: {
    hmr: {
      overlay: false, // Optional: Disable the error overlay for testing
    },
    port: 7550,
  },
  // build: {
  //   rollupOptions: {
  //     output: {
  //       manualChunks: {
  //         vendor: ['react', 'react-dom'], // Move React and ReactDOM into a separate chunk
  //       },
  //       rollupOptions: {
  //         plugins: [visualizer({ open: true })], // Automatically open report in browser
  //     },
  //   },
  //   chunkSizeWarningLimit: 1000, // Increase warning limit (optional)
  // },
  // },
});
