import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";

import Components from "unplugin-vue-components/vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/i-fitness/",
  plugins: [
    vue(),
    Components({
      dirs: ["src/components"],
      resolvers: IconsResolver({
        prefix: false,
        enabledCollections: ["heroicons-solid", "heroicons-outline"],
      }),
    }),
    Icons(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
