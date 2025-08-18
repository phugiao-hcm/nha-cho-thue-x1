<template>
    <header class="bg-white shadow-md sticky top-0 z-50">
        <div
            class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center"
        >
            <!-- Logo -->
            <NuxtLink to="/" class="text-2xl font-extrabold text-blue-600">
                Trọ Phú Giáo
            </NuxtLink>

            <!-- Hamburger Icon for Mobile -->
            <button
                @click="isOpen = !isOpen"
                class="md:hidden text-gray-700 focus:outline-none"
                aria-label="Toggle menu"
            >
                <svg
                    v-if="!isOpen"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
                <svg
                    v-else
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>

            <!-- Desktop Navigation -->
            <nav class="hidden md:flex space-x-6 font-medium text-gray-700">
                <NuxtLink to="/" class="hover:text-blue-600 transition-colors"
                    >Trang chủ</NuxtLink
                >
                <NuxtLink
                    to="/projects"
                    class="hover:text-blue-600 transition-colors"
                    >Dự án</NuxtLink
                >
                <NuxtLink
                    to="/about"
                    class="hover:text-blue-600 transition-colors"
                    >Về chúng tôi</NuxtLink
                >
            </nav>
        </div>

        <!-- Mobile Navigation -->
        <div v-if="isOpen" class="md:hidden px-4 pb-4 space-y-2 text-gray-700">
            <NuxtLink
                to="/"
                @click="isOpen = false"
                class="block hover:text-blue-600 transition-colors"
            >
                Trang chủ
            </NuxtLink>
            <NuxtLink
                to="/projects"
                @click="isOpen = false"
                class="block hover:text-blue-600 transition-colors"
            >
                Dự án
            </NuxtLink>
            <NuxtLink
                to="/about"
                @click="isOpen = false"
                class="block hover:text-blue-600 transition-colors"
            >
                Về chúng tôi
            </NuxtLink>
        </div>
    </header>
</template>

<script setup>
import { ref } from "vue";
const isOpen = ref(false);
</script>
