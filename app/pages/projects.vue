<template>
    <Filter />
    <section class="bg-gray-100 py-12 min-h-screen">
        <div class="max-w-screen-xl mx-auto px-4">
            <h1
                class="text-4xl font-extrabold text-blue-700 mb-3 relative inline-block"
            >
                Phòng trọ Phú Giáo, Bình Dương
                <span
                    class="absolute left-0 -bottom-1 w-20 h-1 bg-blue-500 rounded-full"
                ></span>
            </h1>
            <p class="text-gray-600 mb-8 max-w-xl">
                Tìm kiếm Cho Thuê Phòng Trọ, Thuê Nhà Trọ Giá Rẻ, Chất Lượng Tốt
            </p>

            <div class="grid gap-6">
                <!-- Sidebar lọc: ẩn trên mobile, hiện trên md+ -->
                <FilterSidebar
                    class="hidden md:block md:col-span-1"
                    v-model:filters="filters"
                />

                <!-- Content danh sách bất động sản -->
                <div class="col-span-1 md:col-span-3">
                    <div
                        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        <PropertyCard
                            v-for="(item, index) in filteredProperties"
                            :key="index"
                            :property="item"
                        />
                        <p
                            v-if="filteredProperties.length === 0"
                            class="col-span-full text-center text-gray-500 mt-8"
                        >
                            Không có bất động sản phù hợp.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>
import { reactive, computed } from "vue";
import PropertyCard from "../components/projects/PropertyCard.vue";
import Filter from "../components/projects/Filter.vue";

const filters = reactive({
    type: "",
    city: "",
    priceMin: "",
    priceMax: "",
    areaMin: "",
    areaMax: "",
    bedrooms: "",
});

const properties = [
    {
        id: "1",
        title: "Phòng cho thuê ngay Chợ Phú Giáo",
        image: "images/1.png",
        area: 100,
        bedrooms: 3,
        direction: "Đông",
        price: 8.5,
        type: "Nhà riêng",
        city: "TP.HCM",
    },
    {
        id: "2",
        title: "Còn 1 phòng trọ mới ngay ngã 4 Phạm Ngọc Thạch - Mỹ Phước Tân Vạn",
        image: "images/2.png",
        area: 250,
        bedrooms: 5,
        direction: "Tây",
        price: 15,
        type: "Biệt thự",
        city: "Hà Nội",
    },
    {
        id: "3",
        title: "Nhà trọ nguyên căn khu ẩm thực Thích Quảng Đức.",
        image: "images/3.png",
        area: 80,
        bedrooms: 2,
        direction: "Nam",
        price: 3.2,
        type: "Chung cư",
        city: "Đà Nẵng",
    },
    {
        id: "4",
        title: "Nhà riêng khu dân cư",
        image: "images/4.png",
        area: 120,
        bedrooms: 4,
        direction: "Bắc",
        price: 5.5,
        type: "Nhà riêng",
        city: "TP.HCM",
    },
    {
        id: "5",
        title: "Đất nền đẹp",
        image: "images/5.png",
        area: 150,
        bedrooms: 0,
        direction: "Tây Nam",
        price: 2.7,
        type: "Đất nền",
        city: "Cần Thơ",
    },
    {
        id: "6",
        title: "Căn hộ tiện nghi",
        image: "images/6.png",
        area: 90,
        bedrooms: 3,
        direction: "Đông Bắc",
        price: 4.3,
        type: "Chung cư",
        city: "Hà Nội",
    },
];

const filteredProperties = computed(() => {
    const priceMin = Number(filters.priceMin);
    const priceMax = Number(filters.priceMax);
    const areaMin = Number(filters.areaMin);
    const areaMax = Number(filters.areaMax);
    const bedroomsMin = parseInt(filters.bedrooms);

    function isNumberPositive(val) {
        return !isNaN(val) && val > 0;
    }

    return properties.filter((p) => {
        if (filters.type && p.type !== filters.type) return false;
        if (filters.city && p.city !== filters.city) return false;

        if (isNumberPositive(priceMin) && p.price < priceMin) return false;
        if (isNumberPositive(priceMax) && p.price > priceMax) return false;

        if (isNumberPositive(areaMin) && p.area < areaMin) return false;
        if (isNumberPositive(areaMax) && p.area > areaMax) return false;

        if (isNumberPositive(bedroomsMin) && p.bedrooms < bedroomsMin)
            return false;

        return true;
    });
});
</script>
