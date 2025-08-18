<template>
    <div class="rounded shadow hover:shadow-lg transition cursor-pointer">
        <img
            :src="property.image"
            alt="property"
            class="w-full h-48 object-cover rounded-t"
        />
        <div class="p-4">
            <NuxtLink :to="`/properties/${property.id}`">
                <div class="relative group">
                    <h3
                        class="text-lg font-semibold text-blue-700 mb-1 line-clamp-2"
                    >
                        {{ property.title }}
                    </h3>
                    <span
                        class="absolute bottom-full left-0 mb-2 hidden w-max max-w-xs rounded-md bg-gray-800 px-2 py-1 text-sm text-white group-hover:block"
                    >
                        {{ property.title }}
                    </span>
                </div>
            </NuxtLink>

            <div class="flex items-center gap-2 text-gray-600 text-sm">
                <!-- Icon địa chỉ -->
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="w-4 h-4 text-red-500"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5s-3 1.343-3 3 1.343 3 3 3z"
                    />
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 22s8-4.5 8-10a8 8 0 10-16 0c0 5.5 8 10 8 10z"
                    />
                </svg>
                <span>{{ property.city }}</span>
            </div>

            <div
                class="flex items-center justify-between text-sm text-gray-600"
            >
                <!-- Giá -->
                <div class="text-red-600 font-bold text-lg">
                    {{ property.price }} Triệu/tháng
                </div>

                <!-- Diện tích -->
                <div class="flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="w-4 h-4 text-green-600"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 4h16v16H4V4z"
                        />
                    </svg>
                    <span>{{ property.area }}m²</span>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
const props = defineProps({
    property: {
        type: Object,
        required: true,
    },
});
</script>
