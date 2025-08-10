import { defineConfig } from "vite";

export default defineConfig({
    build: {
        outDir: "./dist",
        emptyOutDir: true,
        assetsDir: "assets",
        manifest: "assets/manifest.json",
        rollupOptions: {
            input: {
                script: "src/scripts/main.js",
                style: "src/styles/main.css",
            },
        },
    },
});
