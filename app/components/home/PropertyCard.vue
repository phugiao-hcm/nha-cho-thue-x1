<template>
    <NuxtLink :to="`/properties/${property.name}`">
        <div
            class="rounded shadow hover:shadow-lg transition cursor-pointer bg-white"
        >
            <img
                :src="property.images[0]"
                alt="property"
                class="w-full h-48 object-cover rounded-t"
            />
            <div class="p-4">
                <h3 class="text-lg font-semibold text-blue-700 mb-1">
                    {{ property.name }}
                </h3>
                <p class="text-sm text-gray-600 mb-2">
                    {{ property.name }}m² · {{ property.name }} phòng ngủ ·
                    Hướng {{ property.name }}
                </p>
                <div class="text-red-600 font-bold text-lg">
                    {{ formatPriceVND(property.price) }}
                </div>
            </div>
        </div>
    </NuxtLink>
</template>


<script setup>
import { formatPriceVND } from "~/utils/format";

const props = defineProps({
    property: {
        type: Object,
        required: true,
    },
});
</script>
