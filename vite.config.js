
import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@sass": path.resolve(__dirname, "src/sass"),
    },
  },
});
