import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { VitePWA } from 'vite-plugin-pwa';
import { on } from 'events';

export default defineConfig({
  base: '/punam-portfolio/',

  plugins: [
    react(),

    VitePWA({
      registerType: 'autoUpdate',

      manifest: {
        name: 'Punam Dhavle | AI/ML & Cybersecurity',
        short_name: 'Punam Portfolio',
        description:
          'Personal portfolio of Punam Dhavle — AI/ML student, cybersecurity enthusiast, and full-stack developer.',
        theme_color: '#050816',
        background_color: '#050816',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/punam-portfolio/',
        start_url: '/punam-portfolio/',
        icons: [
          {
            src: '/punam-portfolio/icons/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/punam-portfolio/icons/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },

      workbox: {
        cleanupOutdatedCaches: true,
      },
    }),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  server: {
    port: 3000,
    open: true,
  },
});