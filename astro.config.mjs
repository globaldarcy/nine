import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    base: '/nine',
    trailingSlash: "ignore",
    server: {
        host: true,
        open: "/"
    },
    devToolbar: {
        enabled: false,
    },
    build: {
        assets: 'assets'
    }
});