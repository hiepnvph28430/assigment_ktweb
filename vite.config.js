// vite.config.js
const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, 'index.html'),
                work: resolve(__dirname, 'work.html'),
                blog: resolve(__dirname, 'blog.html'),
                workdetail: resolve(__dirname, 'workdetail.html')
            }
        }
    }
})