// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    plugins: ["~/plugins/firebaseConfig.ts"],
    ssr: false, // vì GitHub Pages chỉ hỗ trợ static
    target: "static", // không bắt buộc nhưng rõ ràng
    ogImage: {
        enabled: false // ⚠️ tắt vì cần SSR, , Google bot sẽ không đọc được client-side
    },
    schemaOrg: {
        disabled: true // ⚠️ tắt luôn, Google bot sẽ không đọc được client-side
    },
    app: {
        baseURL: "/nha-cho-thue-x1/", // ⚠️ thay <REPO_NAME> bằng tên repo của bạn
          head: {
            title: "Cho thuê phòng trọ Huyện Phú Giáo - Tìm nhà trọ giá rẻ, uy tín",
            meta: [
                {
                    name: "google-site-verification",
                    content: "XRR12va6BxhJbOExSUsWvGvZZ9wjdy1N85LFQDGYEeg",
                },
                // SEO chính
                {
                    name: "description",
                    content:
                    "Website đăng tin cho thuê phòng trọ, nhà trọ, căn hộ tại Huyện Phú Giáo. Dễ dàng tìm kiếm trọ giá rẻ, gần trường học, khu công nghiệp, phù hợp sinh viên và người lao động.",
                },
                {
                    name: "keywords",
                    content:
                    "cho thuê phòng trọ Phú Giáo, nhà trọ Phú Giáo, thuê trọ giá rẻ Phú Giáo, tìm trọ Phú Giáo, phòng trọ sinh viên Phú Giáo, nhà trọ công nhân Phú Giáo",
                },

                // Open Graph (Facebook, Zalo)
                {
                    property: "og:type",
                    content: "website",
                },
                {
                    property: "og:title",
                    content: "Cho thuê phòng trọ Huyện Phú Giáo - Nhà trọ giá rẻ",
                },
                {
                    property: "og:description",
                    content:
                    "Đăng tin cho thuê và tìm kiếm phòng trọ, nhà trọ, căn hộ tại Huyện Phú Giáo. Nhanh chóng, miễn phí, dễ sử dụng.",
                },
                {
                    property: "og:image",
                    content:
                    "https://trodayroi.vn/nha-cho-thue-x1/images/og-image.png",
                },
                {
                    property: "og:url",
                    content: "https://trodayroi.vn/nha-cho-thue-x1/",
                },

                // Twitter Card
                {
                    name: "twitter:card",
                    content: "summary_large_image",
                },
                {
                    name: "twitter:title",
                    content: "Cho thuê phòng trọ Huyện Phú Giáo - Nhà trọ giá rẻ",
                },
                {
                    name: "twitter:description",
                    content:
                    "Website đăng tin cho thuê, tìm kiếm phòng trọ, nhà trọ giá rẻ tại Huyện Phú Giáo.",
                },
                {
                    name: "twitter:image",
                    content:
                        "https://trodayroi.vn/nha-cho-thue-x1/images/og-image.png",
                },

                // Viewport + Charset
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1",
                },
                {
                    charset: "utf-8",
                },
            ],
        },
    },
    modules: [
        '@nuxtjs/robots',
        '@nuxtjs/seo',
        '@nuxtjs/sitemap',
    ],
    site: {
        url: "https://trodayroi.vn", // 🔁 sửa đúng URL GitHub Pages của bạn
    },
    sitemap: {
        sitemapName: "sitemap.xml",
        exclude: ["/admin/**"],
    },

    robots: {
        robotsTxt: false,
    },
    compatibilityDate: "2025-07-15",
    devtools: { enabled: true },
    css: ["~/assets/css/main.css"],
    vite: {
        plugins: [tailwindcss()],
    },
});
