// nuxt.config.ts
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    ssr: false, // ⚠️ GitHub Pages chỉ hỗ trợ static (client-side)
    target: "static",
    app: {
        baseURL: "/", // ⚠️ Nếu dùng domain riêng (trodayroi.vn) thì để "/"
        head: {
            title: "Cho thuê phòng trọ tại Phú Giáo, KCN Tân Bình, Bắc Tân Uyên - Tìm nhà trọ giá rẻ, uy tín",
            meta: [
                { charset: "utf-8" },
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1",
                },
                {
                    name: "description",
                    content:
                        "Website đăng tin cho thuê phòng trọ, nhà trọ, căn hộ tại Huyện Phú Giáo, KCN Tân Bình, Bắc Tân Uyên, Hưng Hoà, Bến Cát. Dễ dàng tìm kiếm trọ giá rẻ, gần trường học, khu công nghiệp, phù hợp sinh viên và người lao động.",
                },
                {
                    name: "keywords",
                    content:
                        "cho thuê phòng trọ Phú Giáo, nhà trọ Phú Giáo, thuê trọ giá rẻ Phú Giáo, tìm trọ Phú Giáo, phòng trọ sinh viên Phú Giáo, nhà trọ công nhân Phú Giáo, trọ kcn tân bình, trọ bàu bàng, trọ bến cát, trọ hưng hòa",
                },
                { property: "og:type", content: "website" },
                {
                    property: "og:title",
                    content:
                        "Cho thuê phòng trọ Huyện Phú Giáo, KCN Tân Bình, Bắc Tân Uyên, Hưng Hòa, Bến Cát - Nhà trọ giá rẻ",
                },
                {
                    property: "og:description",
                    content:
                        "Đăng tin cho thuê và tìm kiếm phòng trọ, nhà trọ, căn hộ tại Huyện Phú Giáo, KCN Tân Bình, Bắc Tân Uyên, Hưng Hòa, Bến Cát. Nhanh chóng, miễn phí, dễ sử dụng.",
                },
                {
                    property: "og:image",
                    content: "https://trodayroi.vn/images/og-image.png",
                },
                { property: "og:url", content: "https://trodayroi.vn/" },
            ],
            link: [
                { rel: "icon", type: "image/png", href: "/favicon-32x32.png" },
                { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
                { rel: "manifest", href: "/site.webmanifest" },
            ],
        },
    },

    // 🌐 SEO modules
    modules: ["@nuxtjs/robots", "@nuxtjs/seo", "@nuxtjs/sitemap"],

    site: {
        url: "https://trodayroi.vn", // tên miền của bạn
    },

    // ✅ Sitemap cho SEO
    sitemap: {
        sitemapName: "sitemap.xml",
        gzip: true,
        exclude: ["/admin/**"],
        defaults: {
            changefreq: "daily",
            priority: 0.8,
        },
        // routes: async () => {
        //     const rooms = await fetch(
        //         "https://trodayroi.vn/api/phong-tro"
        //     ).then((res) => res.json());
        //     return rooms.map((r: any) => ({
        //         url: `/phong-tro/${r.slug}-${r.id}`,
        //         lastmod: r.updatedAt || new Date().toISOString(),
        //         priority: 0.9,
        //     }));
        // },
    },

    // ✅ Robots.txt
    robots: {
        rules: [
            { userAgent: "*", allow: "/" },
            { userAgent: "*", disallow: ["/admin/"] },
        ],
        sitemap: "https://trodayroi.vn/sitemap.xml",
    },

    css: ["~/assets/css/main.css"],
    vite: {
        plugins: [tailwindcss()],
    },
    compatibilityDate: "2025-07-15",
});
