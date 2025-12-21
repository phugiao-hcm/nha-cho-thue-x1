<template>
    <div class="bg-gray-50 text-gray-800">
        <!-- Hero Section -->
        <section class="bg-gradient-to-r from-blue-50 to-white py-20">
            <div class="max-w-6xl mx-auto px-4 text-center">
                <h1 class="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                    Tin tức phòng trọ mới nhất
                </h1>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                    Thông tin mới, đầy đủ, hấp dẫn về thị trường phòng trọ tại
                    Phước Hòa, Phú Giáo, khu công nghiệp Tân Bình (Bắc Tân
                    Uyên), Hưng Hòa thông qua dữ liệu lớn về giá, giao dịch,
                    nguồn cung - cầu và khảo sát thực tế của đội ngũ phóng viên,
                    biên tập của trodayroi.vn.
                </p>
            </div>
        </section>

        <!-- Mission Section -->
        <section>
            <div
                class="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-12"
            >
                <!-- LEFT: News List -->
                <div class="space-y-6 lg:col-span-2">
                    <NewsCard
                        v-for="item in news"
                        :key="item.id"
                        v-bind="item"
                    />
                </div>

                <!-- RIGHT: Sidebar -->
                <div class="space-y-6">
                    <PopularPosts :posts="popularPosts" />
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import NewsCard from "~/components/news/NewsCard.vue";
import PopularPosts from "~/components/news/PopularPosts.vue";

const news = [
    {
        id: 1,
        title: "Tìm Phòng Trọ Xã Phước Hòa Giá Rẻ, Ở Lâu Dài",
        excerpt:
            "Tổng hợp phòng trọ chính chủ tại Xã Phước Hòa, giá từ 1–2 triệu, phù hợp công nhân và người đi làm.",
        image: "https://placehold.co/600x401",
        category: "Tin tức",
        date: "19/12/2025 09:00",
        author: "Hải Âu",
        link: "#",
    },
    {
        id: 2,
        title: "Phòng Trọ Gần KCN Tân Bình – Đi Làm Chỉ 5 Phút",
        excerpt:
            "Danh sách phòng trọ gần KCN Tân Bình (Bắc Tân Uyên), an ninh, giờ giấc tự do.",
        image: "https://placehold.co/600x401",
        category: "Tin tức",
        date: "18/12/2025 14:00",
        author: "Hải Âu",
        link: "#",
    },
];

const popularPosts = [
    "Bỏ túi 10+ mẹo chọn phòng trọ cho người đi làm từ A-Z, an toàn và tiết kiệm",
    "Nhà Ở Xã Hội Tiếp Tục Tăng Giá Mạnh",
    "Tìm trọ Nhà Trọ Sạch Sẽ dễ dàng qua các nền tảng trực tuyến",
    "Phòng Trọ Giá Rẻ, Sạch Sẽ, An Ninh – Gần Khu Công Nghiệp",
];
</script>