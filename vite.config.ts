import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "src/app"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@ui": path.resolve(__dirname, "src/ui"),
      "@": path.resolve(__dirname, "src"),
    },
  },
});
