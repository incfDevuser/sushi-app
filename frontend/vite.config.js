import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: [
        "favicon.svg",
        "favicon.ico",
        "robots.txt",
        "apple-touch-icon.png",
        "favicon-16x16.png",
        "favicon-32x32.png",
      ],
      manifest: {
        name: "Sushi App",
        short_name: "Sushi",
        description: "Ordena sushi fácil y rápido.",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone",
        icons: [
          {
            src: "/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/apple-touch-icon.png",
            sizes: "180x180",
            type: "image/png",
          },
          {
            src: "/favicon-16x16.png",
            sizes: "16x16",
            type: "image/png",
          },
          {
            src: "/favicon-32x32.png",
            sizes: "32x32",
            type: "image/png",
          },
        ],
      },
      workbox: {
        runtimeCaching: [
          {
            // Cache para todos los endpoints de usuarios
            urlPattern: /^http:\/\/localhost:5000\/api\/usuarios\/.*$/,
            handler: "NetworkFirst",
            options: {
              cacheName: "usuarios-cache",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24, // 1 día
              },
              networkTimeoutSeconds: 10,
            },
          },
          {
            // Cache para todos los endpoints de productos
            urlPattern: /^http:\/\/localhost:5000\/api\/productos\/.*$/,
            handler: "NetworkFirst",
            options: {
              cacheName: "productos-cache",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24, // 1 día
              },
              networkTimeoutSeconds: 10,
            },
          },
          {
            // Cache para todos los endpoints del carrito
            urlPattern: /^http:\/\/localhost:5000\/api\/carrito\/.*$/,
            handler: "NetworkFirst",
            options: {
              cacheName: "carrito-cache",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24, // 1 día
              },
              networkTimeoutSeconds: 10,
            },
          },
          {
            // Cache para todos los endpoints de pedidos
            urlPattern: /^http:\/\/localhost:5000\/api\/pedidos\/.*$/,
            handler: "NetworkFirst",
            options: {
              cacheName: "pedidos-cache",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24, // 1 día
              },
              networkTimeoutSeconds: 10,
            },
          },
          {
            // Cache para todos los endpoints de despachos
            urlPattern: /^http:\/\/localhost:5000\/api\/despachos\/.*$/,
            handler: "NetworkFirst",
            options: {
              cacheName: "despachos-cache",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24, // 1 día
              },
              networkTimeoutSeconds: 10,
            },
          },
        ],
      },
    }),
  ],
});
