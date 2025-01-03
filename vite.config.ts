import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": "/src/components",
      "@pages": "/src/pages",
      "@utils": "/src/utils",
      "@styles": "/src/styles",
      "@assets": "/src/assets",
      "@routes": "/src/routes",
      "@types": "/src/types",
    },
  },
  base: "/5s-processes/",
});
