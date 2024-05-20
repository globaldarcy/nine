import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://globaldarcy.github.io/nine/',
    // base: '/nine',
    // trailingSlash: "ignore",
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