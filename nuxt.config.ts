// https://nuxt.com/docs/api/configuration/nuxt-config
import eslintPlugin from "vite-plugin-eslint"

export default defineNuxtConfig({
    devtools: { enabled: true },
    app: {
        head: {
            title: "Todo-list",
            meta: [
                { charset: "utf-8" },
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1, user-scalable=yes"
                }
            ],
            link: [{ rel: "icon", type: "image/svg", href: "/favicon.png" }]
        }
        // baseURL: "/thumb/",
        // buildAssetsDir: "assets",
        // cdnURL: process.env.CDN_URL
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
