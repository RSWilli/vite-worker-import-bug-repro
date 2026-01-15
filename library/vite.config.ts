import { defineConfig } from 'vite'

export default defineConfig({
    // relative paths for workers to work correctly when imported by other projects
    base: "./",
    build: {
        minify: false,
        lib: {
            entry: 'src/index.js',
            name: 'MyLibrary',
            fileName: (format) => `my-library.${format}.js`,
            formats: ['es']
        }
    }
})