import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: "/WebCodeEditor/",
  plugins: [react(),
  VitePWA({
  registerType: 'autoUpdate',
  manifest: {
    name: 'Web Code Editor',
    short_name: 'Code Editor',
    description: 'A web code editor powered by monaco editor (same editor powering vscode) with code execution feature for languages ranging from javascript, lua, python, typescript and many more',
    background_color: 'black',
    display: 'standalone',
    start_url: '/WebCodeEditor',
    scope: '/',
    orientation: 'portrait',
    theme_color: '#000000',
    icons: [
      {
        src: "pwa-64x64.png",
        sizes: "64x64",
        type: "image/png"
		},
      {
        src: "pwa-192x192.png",
        sizes: "192x192",
        type: "image/png"
		},
      {
        src: "pwa-512x512.png",
        sizes: "512x512",
        type: "image/png"
  		},
      {
        src: "maskable-icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable"
  		}
	]
  }
})],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "/src"),
    },
  },
});