// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    plugins: ["~/plugins/firebaseConfig.ts"],
    ssr: false, // vì GitHub Pages chỉ hỗ trợ static
    target: "static", // không bắt buộc nhưng rõ ràng
    ogImage: {
        enabled: false, // ⚠️ tắt vì cần SSR, , Google bot sẽ không đọc được client-side
    },
    schemaOrg: {
        disabled: true, // ⚠️ tắt luôn, Google bot sẽ không đọc được client-side
    },
    app: {
        baseURL: "/", // ⚠️ thay <REPO_NAME> bằng tên repo của bạn
        buildAssetsDir: "_nuxt/", // default, giữ nguyên
        head: {
            title: "Cho thuê phòng trọ tại Phú Giáo, KCN Tân Bình, Bắc Tân Uyên - Tìm nhà trọ giá rẻ, uy tín",
            link: [
                // Favicon chuẩn cho browser hiện đại
                {
                    rel: "icon",
                    type: "image/png",
                    sizes: "16x16",
                    href: "/favicon-16x16.png",
                },
                {
                    rel: "icon",
                    type: "image/png",
                    sizes: "32x32",
                    href: "/favicon-32x32.png",
                },
                {
                    rel: "icon",
                    type: "image/png",
                    sizes: "96x96",
                    href: "/favicon-96x96.png",
                },

                // SVG (ưu tiên nếu browser hỗ trợ)
                { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },

                // ICO (fallback cho browser cũ)
                { rel: "shortcut icon", href: "/favicon.ico" },

                // iOS
                {
                    rel: "apple-touch-icon",
                    sizes: "180x180",
                    href: "/apple-touch-icon.png",
                },

                // Manifest cho Android + PWA
                { rel: "manifest", href: "/site.webmanifest" },
            ],
            meta: [
                {
                    name: "google-site-verification",
                    content: "XRR12va6BxhJbOExSUsWvGvZZ9wjdy1N85LFQDGYEeg",
                },
                // SEO chính
                {
                    name: "apple-mobile-web-app-title",
                    content:
                        "Trọ Phú Giáo, trọ KCN Tân Bình, trọ Bàu Bàng, trọ Hưng Hoà, Bến Cát | trodayroi.vn",
                },
                { name: "application-name", content: "trodayroi.vn" },
                {
                    name: "description",
                    content:
                        "Website đăng tin cho thuê phòng trọ, nhà trọ, căn hộ tại Huyện Phú Giáo, KCN Tân Bình, Bắc Tân Uyên, Hưng Hòa, Bến Cát. Dễ dàng tìm kiếm trọ giá rẻ, gần trường học, khu công nghiệp, phù hợp sinh viên và người lao động.",
                },
                {
                    name: "keywords",
                    content:
                        "cho thuê phòng trọ Phú Giáo, nhà trọ Phú Giáo, thuê trọ giá rẻ Phú Giáo, tìm trọ Phú Giáo, phòng trọ sinh viên Phú Giáo, nhà trọ công nhân Phú Giáo, trọ kcn tân bình, trọ bàu bàng, trọ bến cát, trọ hưng hòa",
                },

                // Open Graph (Facebook, Zalo)
                {
                    property: "og:type",
                    content: "website",
                },
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
                {
                    property: "og:url",
                    content: "https://trodayroi.vn/",
                },

                // Twitter Card
                {
                    name: "twitter:card",
                    content: "summary_large_image",
                },
                {
                    name: "twitter:title",
                    content:
                        "Cho thuê phòng trọ Huyện Phú Giáo - Nhà trọ giá rẻ",
                },
                {
                    name: "twitter:description",
                    content:
                        "Website đăng tin cho thuê, tìm kiếm phòng trọ, nhà trọ giá rẻ tại Huyện Phú Giáo, KCN Tân Bình, Bắc Tân Uyên, Hưng Hòa, Bến Cát",
                },
                {
                    name: "twitter:image",
                    content: "https://trodayroi.vn/images/og-image.png",
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
    modules: ["@nuxtjs/robots", "@nuxtjs/seo", "@nuxtjs/sitemap"],
   
   // gắn Google Analytics (GA4)
    gtag: {
        id: "G-862G2PFH3V", // Thay bằng GA4 Measurement ID
        config: {
            anonymize_ip: true, // Ẩn IP (tùy chọn)
        },
        // debug: process.env.NODE_ENV !== "production", // Log khi dev
    },

    site: {
        url: "https://trodayroi.vn", // 🔁 sửa đúng URL GitHub Pages của bạn
    },
    // ✅ Sitemap cấu hình SEO
    sitemap: {
        sitemapName: "sitemap.xml",
        gzip: true,
        exclude: ["/admin/**"],
        defaults: {
            changefreq: "daily", // gợi ý Google crawl hàng ngày
            priority: 0.8, // ưu tiên cao hơn cho page động
        },
        routes: async () => {
            const rooms = await fetch(
                "https://trodayroi.vn/api/phong-tro"
            ).then((res) => res.json());
            return rooms.map((r: any) => ({
                url: `/phong-tro/${r.slug}-${r.id}`,
                lastmod: r.updatedAt || new Date().toISOString(),
                priority: 0.9, // tin đăng quan trọng
            }));
        },
    },

    robots: {
        rules: [
            { userAgent: "*", disallow: ["/admin/"] },
            { userAgent: "*", allow: "/" },
        ],
        sitemap: "https://trodayroi.vn/sitemap.xml", // ⚡ thêm link sitemap
    },

    compatibilityDate: "2025-07-15",
    devtools: { enabled: true },
    css: ["~/assets/css/main.css"],
    vite: {
        plugins: [tailwindcss()],
    },
});
