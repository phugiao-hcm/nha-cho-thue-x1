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

            <div class="flex flex-col md:flex-row gap-6 p-0 md:p-6 bg-gray-50">
                <!-- Main -->
                <main class="flex-1 order-1 md:order-none">
                    <!-- Mobile Filter Button -->
                    <!-- <div class="md:hidden flex justify-end mb-4">
                        <FilterSidebar
                            :show="showFilter"
                            @close="closeFilter"
                        />
                    </div> -->
                    <div class="flex justify-end mb-4 hidden">
                        <FilterSidebar
                            :show="showFilter"
                            @close="closeFilter"
                        />
                    </div>

                    <!-- Banner -->
                    <div
                        class="bg-white p-4 rounded-2xl shadow mb-4 flex flex-col md:flex-row md:justify-between md:items-center gap-3 hidden"
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
                        class="flex flex-col md:flex-row justify-between md:items-center gap-3 mb-4 hidden"
                    >
                        <h2 class="font-semibold">Bộ sưu tập Góc Trọ</h2>
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
                                class="bg-white rounded-2xl shadow p-4 flex flex-col md:flex-row gap-4 relative"
                                :class="
                                    hotel.availableRooms === 0
                                        ? 'opacity-70 bg-gray-100 cursor-not-allowed'
                                        : ''
                                "
                            >
                                <!-- Badge trạng thái -->
                                <span
                                    v-if="hotel.availableRooms === 0"
                                    class="absolute top-4 left-4 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded"
                                >
                                    Hết phòng
                                </span>
                                <span
                                    v-else
                                    class="absolute top-4 left-4 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded"
                                >
                                    Còn {{ hotel.availableRooms }} phòng
                                </span>

                                <img
                                    :src="
                                        hotel.imageList
                                            ? hotel.imageList[0].imagePath
                                            : '/images/og-image.png'
                                    "
                                    class="w-full md:w-[200px] h-56 sm:h-[150px] object-cover rounded-xl"
                                />
                                <div class="flex-1">
                                    <NuxtLink
                                        :to="
                                            hotel.availableRooms === 0
                                                ? ''
                                                : `/properties/${hotel.id}`
                                        "
                                        :class="
                                            hotel.availableRooms === 0
                                                ? 'pointer-events-none'
                                                : ''
                                        "
                                        @click="
                                            hotel.availableRooms > 0 &&
                                                onClickViewRoomDetail
                                        "
                                    >
                                        <h3
                                            class="font-semibold mb-2"
                                            :class="
                                                hotel.availableRooms === 0
                                                    ? 'text-gray-400'
                                                    : 'text-blue-600 dark:text-blue-500'
                                            "
                                        >
                                            {{ hotel.nameAccommodation }}
                                        </h3>
                                    </NuxtLink>

                                    <!-- giữ nguyên các phần còn lại -->
                                    <div class="flex mb-2 gap-1 items-center">
                                        <P>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke-width="1.5"
                                                stroke="currentColor"
                                                class="size-4 w-4 h-4 text-gray-500 mr-1"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                                />
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                                                />
                                            </svg>
                                        </P>
                                        <p class="text-sm text-gray-800">
                                            {{ hotel.address }}
                                        </p>
                                    </div>

                                    <div class="flex items-center gap-1 mb-2">
                                        <p>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke-width="1.5"
                                                stroke="currentColor"
                                                class="size-4 w-4 h-4 text-gray-500 mr-1"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                                                />
                                            </svg>
                                        </p>
                                        <p class="text-sm text-gray-600">
                                            {{ hotel.area }}m² ·
                                            <span v-if="hotel.viewRoom">
                                                ·
                                                {{
                                                    SET_TEXT_DIRECTION_ROOM(
                                                        hotel.viewRoom
                                                    )
                                                }}
                                            </span>
                                        </p>
                                    </div>

                                    <div class="mb-1 flex flex-wrap">
                                        <span
                                            v-for="(
                                                label, index
                                            ) in facilityTexts(
                                                hotel.facilities
                                            )"
                                            :key="index"
                                            class="bg-blue-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm mb-1"
                                            >{{ label }}</span
                                        >
                                    </div>

                                    <div class="mt-4 hidden">
                                        <div class="flex items-center">
                                            <svg
                                                class="w-4 h-4 text-yellow-300 me-1"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 22 20"
                                            >
                                                <path
                                                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                                                />
                                            </svg>
                                            <p
                                                class="ms-2 text-sm font-bold text-gray-900"
                                            >
                                                4.95
                                            </p>
                                            <span
                                                class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full"
                                            ></span>
                                            <a
                                                href="#"
                                                class="text-sm font-medium text-gray-900 underline hover:no-underline"
                                                >73 reviews</a
                                            >
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p
                                        class="text-lg font-semibold"
                                        :class="
                                            hotel.availableRooms === 0
                                                ? 'text-gray-400'
                                                : 'text-orange-600'
                                        "
                                    >
                                        {{ formatPriceVND(hotel.price) }} /tháng
                                    </p>
                                    <div
                                        v-if="hotel.availableRooms > 0"
                                        class="mt-1 px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded"
                                    >
                                        <p class="text-center text-xs">
                                            Còn {{ hotel.availableRooms }} phòng
                                        </p>
                                    </div>
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
                    <div class="text-orange-500 font-medium">
                        <p>Zalo/Hotline để đăng Tin miễn phí:</p>
                        <p>
                            <a
                                href="tel:0937704598"
                                class="text-blue-400 hover:underline"
                                >0937 704 598</a
                            >
                        </p>
                    </div>
                    <div class="hidden">
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
                                        type="radio"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm"
                                    />
                                    ≥ 4.5 ⭐
                                </label>
                                <label class="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm"
                                    />
                                    ≥ 4.0 ⭐
                                </label>
                                <label class="flex items-center gap-2">
                                    <input
                                        type="radio"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm"
                                    />
                                    ≥ 3.5 ⭐
                                </label>
                            </div>
                        </section>

                        <!-- Tiện ích -->
                        <section class="mb-6">
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
                                    Quản lý 24/24
                                </label>
                                <label class="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm"
                                    />
                                    Bãi giữ xe
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

                        <!-- Gần khu vực -->
                        <section>
                            <h3 class="font-semibold mb-2">Gần Khu vực</h3>
                            <div class="space-y-2 text-sm">
                                <label class="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm"
                                    />
                                    Chợ
                                </label>
                                <label class="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm"
                                    />
                                    Trường học
                                </label>
                                <label class="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm"
                                    />
                                    Cửa hàng tiện lợi
                                </label>
                                <label class="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm"
                                    />
                                    Khu công nghiệp
                                </label>
                            </div>
                        </section>
                    </div>
                </aside>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from "vue";
import Skeleton from "@/components/skeleton/PostSkeleton.vue";
import FilterSidebar from "~/components/posts/FilterSidebar.vue"; // đường dẫn đúng tới file
import { getPostList } from "~/apis/posts";
import { SET_TEXT_FACILITY_ROOM } from "~/utils/const";
const { $amplitude } = useNuxtApp();

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

onMounted(async () => {
    window.addEventListener("resize", handleResize);

    hotels.value = await getPostList();
    loading.value = false;
});
onBeforeUnmount(() => {
    window.removeEventListener("resize", handleResize);
});

const facilityTexts = (facilities: any) => {
    return SET_TEXT_FACILITY_ROOM.filter((item) =>
        facilities.includes(item.value)
    )
        .map((item) => item.label)
        .slice(0, 3); // chỉ lấy tối đa 3;
};

const onClickViewRoomDetail = () => {
    $amplitude.track("button_clicked_view_room_detail", {
        label: "(Posts) - Chọn Xem chi tiết phòng",
    });
};
</script>
