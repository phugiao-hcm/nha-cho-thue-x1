<!-- pages/index.vue -->
<template>
    <section class="py-12">
        <div class="max-w-screen-xl mx-auto px-4">
            <div>
                <h1
                    class="text-4xl font-extrabold text-blue-700 mb-3 relative inline-block"
                >
                    Phòng trọ Phú Giáo, Bình Dương
                    <span
                        class="absolute left-0 -bottom-1 w-20 h-1 bg-blue-500 rounded-full"
                    ></span>
                </h1>
                <p class="text-gray-600 mb-8 max-w-xl">
                    Tìm kiếm Cho Thuê Phòng Trọ, Thuê Nhà Trọ Giá Rẻ, Chất Lượng
                    Tốt
                </p>
            </div>
            <div class="flex gap-6 p-6 bg-gray-50">
                <!-- Sidebar -->
                <aside
                    class="w-80 bg-white p-4 rounded-2xl shadow self-start sticky top-6 h-fit"
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
                        <input type="range" class="w-full" />
                        <div
                            class="flex justify-between text-sm text-gray-500 mt-1"
                        >
                            <span>20.000đ</span>
                            <span>1.760.000đ</span>
                        </div>
                    </section>

                    <!-- Điểm đánh giá -->
                    <section class="mb-6">
                        <h3 class="font-semibold mb-2">Điểm đánh giá</h3>
                        <div class="space-y-2">
                            <label class="flex items-center gap-2">
                                <input type="checkbox" class="form-checkbox" />
                                ≥ 4.5 ⭐
                            </label>
                            <label class="flex items-center gap-2">
                                <input type="checkbox" class="form-checkbox" />
                                ≥ 4.0 ⭐
                            </label>
                            <label class="flex items-center gap-2">
                                <input type="checkbox" class="form-checkbox" />
                                ≥ 3.5 ⭐
                            </label>
                        </div>
                    </section>

                    <!-- Tiện ích -->
                    <section>
                        <h3 class="font-semibold mb-2">Tiện ích</h3>
                        <div class="space-y-2 text-sm">
                            <label class="flex items-center gap-2">
                                <input type="checkbox" class="form-checkbox" />
                                Wi-Fi miễn phí
                            </label>
                            <label class="flex items-center gap-2">
                                <input type="checkbox" class="form-checkbox" />
                                Ghế tình yêu
                            </label>
                            <label class="flex items-center gap-2">
                                <input type="checkbox" class="form-checkbox" />
                                Lễ tân 24/24
                            </label>
                            <label class="flex items-center gap-2">
                                <input type="checkbox" class="form-checkbox" />
                                Thang máy
                            </label>
                        </div>
                    </section>
                </aside>

                <!-- Main -->
                <main class="flex-1">
                    <!-- Banner -->
                    <div
                        class="bg-white p-4 rounded-2xl shadow mb-4 flex justify-between items-center"
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
                    <div class="flex justify-between items-center mb-4">
                        <h2 class="font-semibold">Bộ sưu tập Góc Lãng Mạn</h2>
                        <select class="border rounded-lg px-3 py-1 text-sm">
                            <option>Phù hợp nhất</option>
                            <option>Giá thấp nhất</option>
                            <option>Giá cao nhất</option>
                        </select>
                    </div>

                    <!-- Danh sách -->
                    <div class="space-y-4">
                        <!-- Hiển thị Skeleton khi loading -->
                        <template v-if="loading">
                            <Skeleton v-for="n in 4" :key="n" />
                        </template>

                        <!-- Hiển thị data khi xong -->
                        <template v-else>
                            <div
                                v-for="hotel in hotels"
                                :key="hotel.id"
                                class="bg-white rounded-2xl shadow p-4 flex gap-4"
                            >
                                <img
                                    :src="hotel.image"
                                    class="w-[200px] h-[150px] object-cover rounded-xl"
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
            </div>
        </div>
    </section>
</template>

<script setup>
import Skeleton from "~/components/skeleton/PostSkeleton.vue";
import { ref, onMounted } from "vue";

const hotels = ref([]); // ban đầu rỗng
const loading = ref(true); // trạng thái loading

// dữ liệu giả lập từ API
const mockHotels = [
    {
        id: 1,
        name: "Montcalm Hotel Saigon",
        rating: "4.7",
        reviews: "1716",
        distance: "3.2km · Quận 1, TP.HCM",
        price: "225.000đ",
        oldPrice: "450.000đ",
        rooms: 3,
        image: "https://res.cloudinary.com/ds8q7doz2/image/upload/v1755679804/nen-o-tro-hay-chung-cu_1_dumw8m.png",
    },
    {
        id: 2,
        name: "Bình Hưng Hotel",
        rating: "4.8",
        reviews: "1897",
        distance: "3.7km · Tân Bình, TP.HCM",
        price: "100.000đ",
        oldPrice: "125.000đ",
        rooms: 3,
        image: "https://res.cloudinary.com/ds8q7doz2/image/upload/v1755679804/nen-o-tro-hay-chung-cu_1_dumw8m.png",
    },
    {
        id: 3,
        name: "Bình Hưng Hotel 3",
        rating: "4.8",
        reviews: "1897",
        distance: "3.7km · Tân Bình, TP.HCM",
        price: "100.000đ",
        oldPrice: "125.000đ",
        rooms: 4,
        image: "https://res.cloudinary.com/ds8q7doz2/image/upload/v1755679804/nen-o-tro-hay-chung-cu_1_dumw8m.png",
    },
    {
        id: 4,
        name: "Bình Hưng Hotel 4",
        rating: "4.8",
        reviews: "1897",
        distance: "3.7km · Tân Bình, TP.HCM",
        price: "100.000đ",
        oldPrice: "125.000đ",
        rooms: 4,
        image: "https://res.cloudinary.com/ds8q7doz2/image/upload/v1755679804/nen-o-tro-hay-chung-cu_1_dumw8m.png",
    },
];

onMounted(() => {
    // giả lập gọi API sau 3s
    setTimeout(() => {
        hotels.value = mockHotels;
        loading.value = false;
    }, 3000);
});
</script>
