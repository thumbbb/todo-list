// https://nuxt.com/docs/api/configuration/nuxt-config
import eslintPlugin from "vite-plugin-eslint"

export default defineNuxtConfig({
    devtools: { enabled: true },
    app: {
        head: {
            title: "Todo List",
            link: [{ rel: "icon", type: "image/svg", href: "/favicon.png" }]
        },
        cdnURL: process.env.CDN_URL
    },
    modules: ["nuxt-swiper", "@pinia/nuxt"],
    css: ["@/assets/styles/main.scss"],
    alias: {
        "@images": process.env.IMG_BASE_URL
    },
    vite: {
        plugins: [eslintPlugin()],
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
                        @import "@/assets/styles/abstracts/_variables.scss";
                        @import "@/assets/styles/abstracts/_mixins.scss";
                    `
                }
            }
        }
    }
})
