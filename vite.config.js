
import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
   base: "./",
  resolve: {
    alias: {
      "@sass": path.resolve(__dirname, "src/sass"),
      "@images": path.resolve(__dirname, "src/images"),
    },
  },
    build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        about: path.resolve(__dirname, "about.html"),
        service: path.resolve(__dirname, "service.html"),
        contact: path.resolve(__dirname, "contact.html"),
        thanks: path.resolve(__dirname, "thanks.html"),
      },
    },
  },
   server: {
    host: true,
  },
});
