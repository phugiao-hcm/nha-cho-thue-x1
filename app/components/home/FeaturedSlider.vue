<template>
    <section class="py-10 px-4 bg-white">
        <div class="max-w-7xl mx-auto relative">
            <h2 class="text-2xl font-semibold mb-6">Bất động sản tiềm năng</h2>
            <Swiper
                :modules="[Navigation, Autoplay, Pagination]"
                :slides-per-view="1.3"
                :space-between="16"
                :loop="false"
                :autoplay="{ delay: 4000 }"
                :pagination="{ clickable: true }"
                :navigation="{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }"
                :breakpoints="breakpoints"
                class="group"
            >
                <SwiperSlide
                    v-for="(item, index) in featuredProperties"
                    :key="index"
                >
                    <div
                        class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
                    >
                        <img
                            :src="item.image"
                            :alt="item.title"
                            class="w-full h-60 object-cover"
                        />
                        <div class="p-4">
                            <h3 class="text-lg font-semibold">
                                {{ item.title }}
                            </h3>
                            <p class="text-blue-600 font-bold mt-2">
                                {{ item.price }} tỷ
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

                <!-- Nút điều hướng -->
                <div
                    class="swiper-button-prev hidden md:flex absolute top-1/2 left-0 transform -translate-y-1/2 z-10 text-gray-800 hover:text-black"
                ></div>
                <div
                    class="swiper-button-next hidden md:flex absolute top-1/2 right-0 transform -translate-y-1/2 z-10 text-gray-800 hover:text-black"
                ></div>
            </Swiper>
        </div>
    </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const featuredProperties = [
    {
        slug: "nha-mat-pho-quan-1",
        title: "Nhà phố Phú Giáo 120m²",
        price: 3.2,
        image: "images/1.png",
    },
    {
        slug: "nha-mat-pho-quan-2",
        title: "Biệt thự sân vườn đẹp",
        price: 5.8,
        image: "images/2.png",
    },
    {
        slug: "nha-mat-pho-quan-3",
        title: "Chung cư cao cấp TP.Thủ Dầu Một",
        price: 2.7,
        image: "images/3.png",
    },
    {
        slug: "nha-mat-pho-quan-4",
        title: "Đất nền Phú Giáo vị trí đẹp",
        price: 1.9,
        image: "images/4.png",
    },
    {
        slug: "nha-mat-pho-quan-5",
        title: "Căn hộ tiện nghi hiện đại",
        price: 3.5,
        image: "images/5.png",
    },
];

const breakpoints = {
    640: {
        slidesPerView: 1.5,
        spaceBetween: 16,
    },
    1024: {
        slidesPerView: 3.2,
        spaceBetween: 20,
    },
};
</script>
