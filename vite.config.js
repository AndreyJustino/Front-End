import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa';
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Onfly',
        short_name: 'Onfly',
        start_url: '/',
        display: 'fullscreen',
        background_color: '#0597fa',
        theme_color: '#0597fa',
        icons: [
          {
            src: 'logo-fav.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'logo-fav.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
})
