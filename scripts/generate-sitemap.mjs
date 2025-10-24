import fs from "fs";
import path from "path";
import fetch from "node-fetch";

const DOMAIN = "https://trodayroi.vn";
const OUTPUT_FILE = path.resolve(".output/public/sitemap.xml");

// Hàm slugify title
function slugifyTitle(title) {
    return title
        .toLowerCase()
        .normalize("NFD") // tách dấu
        .replace(/[\u0300-\u036f]/g, "") // bỏ dấu
        .replace(/[^a-z0-9]+/g, "-") // thay ký tự không phải chữ/số bằng "-"
        .replace(/(^-|-$)/g, ""); // bỏ - đầu/cuối
}

async function generateSitemap() {
    try {
        // Fetch dữ liệu phòng trọ từ API
        const res = await fetch(
            "https://api.kongricsstudio.com/api/v1/phongtro/getPhongTroList?page=1&provinceId=28&limit=50"
        );
        const data = await res.json();
        const rooms = data.phongTroList || [];

        if (!rooms.length) {
            console.warn("⚠️ Không có dữ liệu phòng trọ từ API");
        }

        // Tạo các thẻ <url>
        const urls = rooms
            .map(
                (r) => `
  <url>
    <loc>${DOMAIN}/phong-tro/${slugifyTitle(r.title)}-${r.id}</loc>
    <lastmod>${r.createTime}</lastmod>
    <priority>0.9</priority>
  </url>`
            )
            .join("");

        // XML sitemap hoàn chỉnh
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${DOMAIN}/</loc></url>
  ${urls}
</urlset>`;

        // Ghi file ra .output/public
        fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
        fs.writeFileSync(OUTPUT_FILE, xml);
        console.log(
            "✅ Sitemap generated successfully with",
            rooms.length,
            "rooms."
        );
    } catch (err) {
        console.error("❌ Lỗi khi tạo sitemap:", err.message);
    }
}

generateSitemap();
