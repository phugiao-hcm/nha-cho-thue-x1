<!-- pages/index.vue -->
<template>
    <section class="py-12">
        <div class="max-w-screen-xl mx-auto px-4">
            <!-- Title -->
            <div>
                <h1
                    class="text-3xl md:text-4xl font-extrabold text-orange-500 mb-3 relative inline-block"
                >
                    Phòng trọ Phú Giáo, Bình Dương
                    <span
                        class="absolute left-0 -bottom-1 w-20 h-1 bg-orange-500 rounded-full"
                    ></span>
                </h1>
                <p class="text-gray-600 mb-8 max-w-xl">
                    Tìm kiếm Cho Thuê Phòng Trọ, Thuê Nhà Trọ Giá Rẻ, Chất Lượng
                    Tốt
                </p>
            </div>

            <div class="flex flex-col md:flex-row gap-6 p-6 bg-gray-50">
                <!-- Main -->
                <main class="flex-1 order-1 md:order-none">
                    <!-- Mobile Filter Button -->
                    <div class="md:hidden flex justify-end mb-4">
                        <FilterSidebar
                            :show="showFilter"
                            @close="closeFilter"
                        />
                    </div>

                    <!-- Banner -->
                    <div
                        class="bg-white p-4 rounded-2xl shadow mb-4 flex flex-col md:flex-row md:justify-between md:items-center gap-3"
                    >
                        <div>
                            <h4 class="text-red-500 font-semibold">
                                Nhận ưu đãi đặc biệt - Đăng ký tài khoản ngay!
                            </h4>
                            <p class="text-sm text-gray-500">
                                Hãy đăng ký để nhận nhiều ưu đãi
                            </p>
                        </div>
                        <button
                            class="bg-orange-500 text-white px-4 py-2 rounded-xl"
                        >
                            Đăng ký ngay
                        </button>
                    </div>

                    <!-- Sort -->
                    <div
                        class="flex flex-col md:flex-row justify-between md:items-center gap-3 mb-4"
                    >
                        <h2 class="font-semibold">Bộ sưu tập Góc Lãng Mạn</h2>
                        <select
                            class="border rounded-lg px-3 py-2 text-sm w-full md:w-auto"
                        >
                            <option>Phù hợp nhất</option>
                            <option>Giá thấp nhất</option>
                            <option>Giá cao nhất</option>
                        </select>
                    </div>

                    <!-- Danh sách -->
                    <div class="space-y-4">
                        <!-- Skeleton -->
                        <template v-if="loading">
                            <Skeleton v-for="n in 4" :key="n" />
                        </template>

                        <!-- Data -->
                        <template v-else>
                            <div
                                v-for="hotel in hotels"
                                :key="hotel.id"
                                class="bg-white rounded-2xl shadow p-4 flex flex-col md:flex-row gap-4"
                            >
                                <img
                                    :src="hotel.image"
                                    class="w-full md:w-[200px] h-[150px] object-cover rounded-xl"
                                />
                                <div class="flex-1">
                                    <h3 class="font-semibold">
                                        {{ hotel.name }}
                                    </h3>
                                    <p class="text-sm text-gray-500">
                                        {{ hotel.rating }} ·
                                        {{ hotel.reviews }} đánh giá
                                    </p>
                                    <p class="text-sm text-gray-500">
                                        {{ hotel.distance }}
                                    </p>
                                </div>
                                <div class="text-right">
                                    <p
                                        class="line-through text-gray-400 text-sm"
                                    >
                                        {{ hotel.oldPrice }}
                                    </p>
                                    <p
                                        class="text-lg font-semibold text-orange-600"
                                    >
                                        {{ hotel.price }}
                                    </p>
                                    <p class="text-xs text-gray-500">
                                        Chỉ còn {{ hotel.rooms }} phòng
                                    </p>
                                </div>
                            </div>
                        </template>
                    </div>
                </main>

                <!-- Sidebar -->
                <aside
                    v-if="showFilter || screenWidth >= 768"
                    class="w-full md:w-80 bg-white p-4 rounded-2xl shadow self-start md:sticky md:top-6 h-fit order-2 md:order-none"
                >
                    <!-- Bản đồ -->
                    <div class="mb-6">
                        <div
                            class="h-32 bg-gray-200 rounded-lg flex items-center justify-center"
                        >
                            <span class="text-orange-500 font-medium"
                                >Xem trên bản đồ</span
                            >
                        </div>
                    </div>

                    <!-- Tìm kiếm -->
                    <section class="mb-6">
                        <h3 class="font-semibold mb-2">Tìm kiếm</h3>
                        <input
                            type="text"
                            placeholder="Nhập tên nhà trọ..."
                            class="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg text-base focus:outline-none focus:border-gray-400"
                        />
                    </section>

                    <!-- Khoảng giá -->
                    <section class="mb-6">
                        <h3 class="font-semibold mb-2">Khoảng giá</h3>
                        <input
                            id="default-range"
                            type="range"
                            value="1000"
                            min="1500000"
                            max="10000000"
                            class="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        />
                        <div
                            class="flex justify-between text-sm text-gray-500 mt-1"
                        >
                            <span>300.000đ</span>
                            <span>10.000.000đ</span>
                        </div>
                    </section>

                    <!-- Điểm đánh giá -->
                    <section class="mb-6">
                        <h3 class="font-semibold mb-2">Điểm đánh giá</h3>
                        <div class="space-y-2">
                            <label class="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm"
                                />
                                ≥ 4.5 ⭐
                            </label>
                            <label class="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm"
                                />
                                ≥ 4.0 ⭐
                            </label>
                            <label class="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm"
                                />
                                ≥ 3.5 ⭐
                            </label>
                        </div>
                    </section>

                    <!-- Tiện ích -->
                    <section>
                        <h3 class="font-semibold mb-2">Tiện ích</h3>
                        <div class="space-y-2 text-sm">
                            <label class="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm"
                                />
                                Wi-Fi miễn phí
                            </label>
                            <label class="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm"
                                />
                                Ghế tình yêu
                            </label>
                            <label class="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm"
                                />
                                Lễ tân 24/24
                            </label>
                            <label class="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm"
                                />
                                Thang máy
                            </label>
                        </div>
                    </section>
                </aside>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import Skeleton from "@/components/skeleton/PostSkeleton.vue";
import FilterSidebar from "~/components/posts/FilterSidebar.vue"; // đường dẫn đúng tới file

const showFilter = ref(false);

const openFilter = () => {
    showFilter.value = true;
};

const closeFilter = () => {
    showFilter.value = false;
};

const screenWidth = ref(window.innerWidth);
const hotels = ref<any>([]); // ban đầu rỗng

const handleResize = () => {
    screenWidth.value = window.innerWidth;
};

// Mock data
const loading = ref(true);
const mockHotels = ref([
    {
        id: 1,
        name: "Nhà trọ Hoa Hồng",
        rating: 4.6,
        reviews: 120,
        distance: "Cách trung tâm 1km",
        oldPrice: "3.000.000đ",
        price: "2.500.000đ",
        rooms: 2,
        image: "https://res.cloudinary.com/ds8q7doz2/image/upload/v1755679804/nen-o-tro-hay-chung-cu_1_dumw8m.png",
    },
    {
        id: 2,
        name: "Phòng trọ Moonlight",
        rating: 4.3,
        reviews: 85,
        distance: "Cách trung tâm 2km",
        oldPrice: "2.800.000đ",
        price: "2.200.000đ",
        rooms: 3,
        image: "https://res.cloudinary.com/ds8q7doz2/image/upload/v1755679804/nen-o-tro-hay-chung-cu_1_dumw8m.png",
    },
    {
        id: 3,
        name: "Bình Hưng Hotel 3",
        rating: 4.3,
        reviews: 85,
        distance: "Cách trung tâm 2km",
        oldPrice: "2.800.000đ",
        price: "2.200.000đ",
        rooms: 3,
        image: "https://res.cloudinary.com/ds8q7doz2/image/upload/v1755679804/nen-o-tro-hay-chung-cu_1_dumw8m.png",
    },
    {
        id: 4,
        name: "Bình Hưng Hotel 4",
        rating: 4.3,
        reviews: 85,
        distance: "Cách trung tâm 2km",
        oldPrice: "2.800.000đ",
        price: "2.200.000đ",
        rooms: 3,
        image: "https://res.cloudinary.com/ds8q7doz2/image/upload/v1755679804/nen-o-tro-hay-chung-cu_1_dumw8m.png",
    },
]);

onMounted(() => {
    window.addEventListener("resize", handleResize);

    // giả lập gọi API sau 3s
    setTimeout(() => {
        hotels.value = mockHotels.value;
        loading.value = false;
    }, 3000);
});
onBeforeUnmount(() => {
    window.removeEventListener("resize", handleResize);
});
</script>
