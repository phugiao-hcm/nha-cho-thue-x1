<template>
    <NuxtLink :to="`/properties/${property.slug}`">
        <div
            class="rounded shadow hover:shadow-lg transition cursor-pointer bg-white"
        >
            <img
                :src="property.image"
                alt="property"
                class="w-full h-48 object-cover rounded-t"
            />
            <div class="p-4">
                <h3 class="text-lg font-semibold text-blue-700 mb-1">
                    {{ property.title }}
                </h3>
                <p class="text-sm text-gray-600 mb-2">
                    {{ property.area }}m² · {{ property.bedrooms }} phòng ngủ ·
                    Hướng {{ property.direction }}
                </p>
                <div class="text-red-600 font-bold text-lg">
                    {{ property.price }} tỷ
                </div>
            </div>
        </div>
    </NuxtLink>
</template>


<script setup>
const props = defineProps({
    property: {
        type: Object,
        required: true,
    },
});
</script>
