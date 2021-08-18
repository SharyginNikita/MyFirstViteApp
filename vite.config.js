import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import visualizer from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        fs: {
            // Default: false (will change to true in future versions)
            // https://vitejs.dev/config/#server-fs-strict
            strict: false,
        },
    },
    resolve: {
        alias: [{ find: "@", replacement: "/src" }],
    },
    plugins: [vue(), visualizer()],
});
