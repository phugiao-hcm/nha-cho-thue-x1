<template>
    <NuxtLink
        :to="link"
        class="group flex overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-md transition duration-300 mb-6"
    >
        <!-- Image -->
        <div
            class="relative h-28 w-36 flex-shrink-0 overflow-hidden sm:h-32 sm:w-48"
        >
            <img
                :src="image"
                :alt="title"
                style="max-width: 240px"
                class="h-full w-full object-cover group-hover:scale-105 transition duration-300"
            />
            <span
                class="absolute top-2 left-2 rounded-full bg-blue-600 px-2 py-0.5 text-[11px] font-medium text-white"
            >
                {{ category }}
            </span>
        </div>

        <!-- Content -->
        <div class="flex flex-1 flex-col justify-between p-3 sm:p-4">
            <div>
                <h3
                    class="mb-1 line-clamp-2 text-sm font-semibold text-gray-800 group-hover:text-blue-600 sm:text-base"
                >
                    {{ title }}
                </h3>

                <p class="line-clamp-2 text-xs text-gray-600 sm:text-sm">
                    {{ description }}
                </p>
            </div>

            <div
                class="mt-2 flex items-center justify-between text-[11px] text-gray-500 sm:text-xs"
            >
                <span>{{ date }}</span>
                <span class="font-medium text-blue-600">Xem chi tiết →</span>
            </div>
        </div>
    </NuxtLink>
</template>

<script setup>
defineProps({
    title: String,
    description: String,
    image: String,
    category: String,
    date: String,
    link: String,
});
</script>
