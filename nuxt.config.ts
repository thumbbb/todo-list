// https://nuxt.com/docs/api/configuration/nuxt-config
import eslintPlugin from "vite-plugin-eslint"

export default defineNuxtConfig({
    devtools: { enabled: true },
    app: {
        head: {
            title: "이엄지 포트폴리오",
            meta: [
                { charset: "utf-8" },
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1, user-scalable=yes"
                },
                {
                    property: "name",
                    content: "이엄지 포트폴리오"
                },
                {
                    property: "og:title",
                    content: "이엄지 포트폴리오"
                },
                {
                    property: "og:description",
                    content: "Front-end 개발자 이엄지의 Portfolio"
                },
                {
                    property: "description",
                    content: "Front-end 개발자 이엄지의 Portfolio"
                },
                {
                    property: "og:image",
                    content: "https://i.ibb.co/WBrDDrY/share.jpg"
                },
                {
                    property: "og:image:secure_url",
                    content: "https://i.ibb.co/WBrDDrY/share.jpg"
                },
                {
                    property: "og:image:type",
                    content: "image/png"
                },
                {
                    property: "og:image:width",
                    content: "1280"
                },
                {
                    property: "og:image:height",
                    content: "720"
                },
                {
                    property: "twitter:card",
                    content: "summary_large_image"
                },
                {
                    property: "twitter:title",
                    content: "이엄지 포트폴리오"
                },
                {
                    property: "twitter:description",
                    content: "Front-end 개발자 이엄지의 Portfolio"
                },
                {
                    property: "twitter:image",
                    content: "https://i.ibb.co/WBrDDrY/share.jpg"
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
