<template>
    <section id="properties" class="py-12 bg-gray-100">
        <div class="max-w-7xl mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-8">Dự án nổi bật</h2>
            <div class="grid md:grid-cols-3 gap-8">
                <div
                    v-for="(property, index) in properties"
                    :key="index"
                    class="bg-white rounded-lg shadow hover:shadow-lg transition"
                >
                    <img
                        :src="property.image"
                        class="rounded-t-lg h-48 w-full object-cover"
                    />
                    <div class="p-4">
                        <h3 class="text-xl font-semibold">
                            {{ property.name }}
                        </h3>
                        <p class="text-gray-600">{{ property.location }}</p>
                        <p class="text-blue-600 font-bold mt-2">
                            {{ property.price }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const properties = [
    {
        slug: "nha-mat-pho-quan-1",
        name: "Căn hộ Vinhomes Central Park",
        location: "Quận Bình Thạnh, TP.HCM",
        price: "4.2 Tỷ",
        image: "images/1.png",
    },
    {
        slug: "nha-mat-pho-quan-2",
        name: "Biệt thự nghỉ dưỡng Đà Lạt",
        location: "Phường 9, Đà Lạt",
        price: "6.8 Tỷ",
        image: "images/6.png",
    },
    {
        slug: "nha-mat-pho-quan-3",
        name: "Chung cư cao cấp The Marq",
        location: "Quận 1, TP.HCM",
        price: "5.5 Tỷ",
        image: "images/7.png",
    },
];
</script>
