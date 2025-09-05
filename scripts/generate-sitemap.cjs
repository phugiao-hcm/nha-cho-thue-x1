// scripts/generate-sitemap.js
const { writeFileSync } = require("fs")
const { getFirestore, collection, getDocs } = require("firebase/firestore")
const { initializeApp } = require("firebase/app")

// ⚡ Load Firebase config (copy từ plugins/firebaseConfig.ts)
const firebaseConfig = {
  apiKey: "AIzaSyCEi3hqZ5QywZ4RFbQIW479wpBjNlM4xMs",
  authDomain: "nha-cho-thue-x1.firebaseapp.com",
  projectId: "nha-cho-thue-x1",
  storageBucket: "nha-cho-thue-x1.firebasestorage.app",
  messagingSenderId: "295176364130",
  appId: "1:295176364130:web:e11cdbec5626dc9a8df13b",
  measurementId: "G-ZWLR9NXP2Y"
}

const app = initializeApp(firebaseConfig)

async function generateSitemap() {
  const baseUrl = "https://trodayroi.vn"

  // Các trang tĩnh
  const staticRoutes = [
    { url: "/", priority: 1.0 },
    { url: "/about", priority: 0.8 },
    { url: "/posts", priority: 0.8 },
  ]

  // Lấy bài viết từ Firestore
  const db = getFirestore(app)
  const querySnapshot = await getDocs(collection(db, "posts"))

  const dynamicRoutes = querySnapshot.docs.map((doc) => {
    const data = doc.data()
    return {
      url: `/phong-tro/${data.slug || "bai-dang"}-${doc.id}`,
      lastmod: data.updatedAt || new Date().toISOString(),
      priority: 0.9,
    }
  })

  const allRoutes = [...staticRoutes, ...dynamicRoutes]

  // Build sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
      .map(
        (r) => `
  <url>
    <loc>${baseUrl}${r.url}</loc>
    <lastmod>${r.lastmod}</lastmod>
    <priority>${r.priority}</priority>
  </url>`
      )
      .join("\n")}
</urlset>`

  // Xuất ra file public/sitemap.xml
  writeFileSync("public/sitemap.xml", sitemap, "utf8")
  console.log("✅ Sitemap generated at public/sitemap.xml")
}

generateSitemap().catch((err) => {
  console.error("❌ Error generating sitemap:", err)
  process.exit(1)
})
