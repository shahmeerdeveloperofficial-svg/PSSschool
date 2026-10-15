import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "next/image", replacement: path.resolve(__dirname, "./src/compat/Image.jsx") },
      { find: "next/link", replacement: path.resolve(__dirname, "./src/compat/Link.jsx") },
      { find: "next/navigation", replacement: path.resolve(__dirname, "./src/compat/navigation.js") },
      { find: "next/dynamic", replacement: path.resolve(__dirname, "./src/compat/dynamic.jsx") },
      { find: "@", replacement: path.resolve(__dirname, "./") },
    ],
  },
  server: {
    port: 5173,
    host: true,
  },
  build: {
    outDir: "dist",
    sourcemap: false,
  },
});
