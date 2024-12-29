import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../"),
      "@components": path.resolve(__dirname, "../components"),
      "@pages": path.resolve(__dirname, "../pages"),
      "@utils": path.resolve(__dirname, "../utils"),
      "@styles": path.resolve(__dirname, "../styles"),
      "@assets": path.resolve(__dirname, "../assets"),
    },
  },
});
