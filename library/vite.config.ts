import { defineConfig } from 'vite'

export default defineConfig({
    // relative paths for workers to work correctly when imported by other projects
    base: "./",
    build: {
        minify: false,
        lib: {
            entry: {
                "main": "src/index.js",
                "main/alwaysbroken": "src/alwaysbroken/index.js"
            },
            name: 'MyLibrary',
            formats: ['es']
        },
        rollupOptions: {
            output: {
                entryFileNames: "[name].js",
            }
        }
    }
})