import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import codegen from "vite-plugin-graphql-codegen";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react(), codegen()],
  server: {
    port: 5174,
  },
});
