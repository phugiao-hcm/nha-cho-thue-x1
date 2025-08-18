<template>
    <div
        class="max-w-6xl mx-auto mt-6 px-4 md:px-0 grid gap-4 sm:grid-cols-1 md:grid-cols-3"
    >
        <!-- Bên trái: Hình ảnh và thông tin -->
        <div class="md:col-span-2 space-y-4">
            <div class="w-full mx-auto overflow-hidden grid grid-cols-1 gap-4">
                <!-- Main Swiper -->
                <swiper
                    class="w-full rounded-lg overflow-hidden"
                    :space-between="10"
                    :loop="true"
                    :navigation="true"
                    :pagination="{ clickable: true }"
                    :thumbs="{ swiper: thumbsSwiper }"
                    :modules="modules"
                    :breakpoints="{
                        0: { slidesPerView: 1, spaceBetween: 0 },
                        640: { slidesPerView: 1, spaceBetween: 5 },
                        768: { slidesPerView: 1, spaceBetween: 8 },
                        1024: { slidesPerView: 1, spaceBetween: 10 },
                    }"
                >
                    <swiper-slide
                        v-for="(img, i) in property.images"
                        :key="i"
                        class="box-border"
                    >
                        <img
                            :src="img"
                            class="w-full h-48 sm:h-56 md:h-64 lg:h-80 object-cover"
                        />
                    </swiper-slide>
                </swiper>

                <!-- Thumbnails -->
                <swiper
                    @swiper="setThumbsSwiper"
                    :loop="true"
                    :space-between="10"
                    :slides-per-view="4"
                    :freeMode="true"
                    :watchSlidesProgress="true"
                    :modules="modules"
                    class="w-full"
                >
                    <swiper-slide
                        v-for="(img, i) in property.images"
                        :key="'thumb-' + i"
                    >
                        <img
                            :src="img"
                            class="w-full h-16 sm:h-20 object-cover rounded cursor-pointer"
                        />
                    </swiper-slide>
                </swiper>
            </div>

            <!-- Tiêu đề -->
            <h1
                class="text-xl sm:text-lg md:text-xl font-bold text-gray-800 mt-2"
            >
                {{ property.title }}
            </h1>

            <!-- Giá + diện tích -->
            <div class="flex flex-wrap items-center gap-3 mt-2">
                <p class="text-red-600 text-2xl sm:text-xl font-semibold">
                    {{ property.price }} triệu/tháng
                </p>
                <span class="text-gray-600">{{ property.area }} m²</span>
            </div>

            <!-- Địa chỉ -->
            <div
                class="flex items-center text-gray-600 mt-2 text-sm sm:text-xs md:text-sm"
            >
                <Icon name="mdi:map-marker" class="w-5 h-5 mr-1 text-red-500" />
                {{ property.address }}
            </div>

            <!-- MÔ TẢ CHI TIẾT -->
            <div class="bg-white rounded-lg shadow p-4 mt-4 md:mt-6">
                <h2 class="font-bold text-lg mb-3">Mô tả chi tiết</h2>
                <div
                    class="text-gray-700 whitespace-pre-line leading-relaxed"
                    v-html="property.description"
                />
                <div class="mt-4 flex flex-wrap items-center gap-2">
                    <span class="font-semibold">SĐT Liên hệ:</span>
                    <span
                        class="bg-gray-100 px-3 py-1 rounded-lg text-gray-700"
                    >
                        {{ maskedPhone }}
                    </span>
                    <button
                        class="text-blue-600 font-semibold"
                        @click="showPhone = true"
                    >
                        Hiện SĐT
                    </button>
                </div>
            </div>

            <!-- Section Google Maps -->
            <div class="w-full h-64 md:h-96 rounded-lg overflow-hidden">
                <iframe
                    src="https://www.google.com/maps?q=10.8008,106.6832&hl=vi&z=15&output=embed"
                    width="100%"
                    height="450"
                    style="border: 0"
                    allowfullscreen=""
                    loading="lazy"
                ></iframe>

                <!-- <iframe
                    :src="mapUrl"
                    width="100%"
                    height="100%"
                    class="border-0"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe> -->
            </div>
        </div>

        <!-- Bên phải: Liên hệ -->
        <div class="md:col-span-1">
            <div
                class="bg-white rounded-lg shadow p-4 md:sticky md:top-20 space-y-3"
            >
                <!-- Liên hệ -->
                <div class="flex items-center gap-3 mb-3">
                    <img
                        src="https://placehold.co/60x60"
                        alt="avatar"
                        class="w-12 h-12 rounded-full"
                    />
                    <div>
                        <h3 class="font-semibold text-sm sm:text-xs md:text-sm">
                            Căn hộ dịch vụ Cao Cấp
                        </h3>
                        <p class="text-sm text-gray-500">Môi giới</p>
                    </div>
                </div>

                <button
                    class="w-full bg-orange-500 text-white py-2 rounded-lg mb-2 hover:bg-orange-600 text-sm sm:text-xs md:text-sm"
                >
                    Chat ngay
                </button>
                <button
                    class="w-full border border-orange-500 text-orange-500 py-2 rounded-lg hover:bg-orange-50 text-sm sm:text-xs md:text-sm"
                >
                    Gọi: 092962xxxx
                </button>
            </div>
        </div>
    </div>

    <News />
</template>

<script setup>
import { ref, computed } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import News from "../../components/projects/News.vue";

// modules Swiper
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
// Swiper thumbs sync
const thumbsSwiper = ref(null);
const thumbsSwiperReady = ref(false);
const mainSwiper = ref(null);
const activeIndex = ref(0);

const setThumbsSwiper = (swiper) => {
    thumbsSwiper.value = swiper;
};

const modules = [FreeMode, Navigation, Thumbs];
// dữ liệu mẫu
const property = {
    id: "1",
    title: "Phòng mới 2 cửa lớn đón gió mát mẻ rộng rãi. FULL nội thất",
    images: [
        "https://placehold.co/200x400",
        "https://placehold.co/600x401",
        "https://placehold.co/600x402",
    ],
    price: 5.5,
    area: 35,
    address: "Đường Nguyễn Kiệm, Phường 9, Quận Phú Nhuận, TP HCM",
    interior: "Nội thất cao cấp",
    deposit: "5.500.000",
    description: `
1. Cam kết.
- Hợp đồng thuê & cọc rõ ràng.
- Hình ảnh thật 100%.
- Không phát sinh chi phí ẩn.

2. Tiện ích.
- 2 Cửa lớn đón gió CỰC MÁT
- Thang máy tận cửa
- Ra vào vân tay
- An ninh tuyệt đối.
  `,
};

// ẩn hiện số điện thoại
const showPhone = ref(false);
const maskedPhone = computed(() =>
    showPhone.value ? "0929621234" : "092962 ***"
);

// const mapUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${property.latitude},${property.longitude}`;
</script>

<style>
/* Highlight thumbnail active */
.swiper-slide-thumb-active img {
    border: 2px solid #f97316; /* Tailwind orange-500 */
}
</style>
