import { defineConfig } from "vite";
import { resolve } from "path";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                description: resolve(__dirname, "description.html"),
                images: resolve(__dirname, "images.html"),
                about: resolve(__dirname, "about.html")
            }
        }
    },
    plugins: [
        ViteImageOptimizer({
            png: {
                quality: 75
            }, 
            jpg: {
                quality: 75
            }, 
            jpeg: {
                quality: 75
            },
            webp: {
                quality: 70
            },
            avif: {
                quality: 60
            }
        })
    ]
});