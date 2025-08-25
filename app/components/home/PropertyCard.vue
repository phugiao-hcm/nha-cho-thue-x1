<template>
    <NuxtLink :to="`/properties/${property.name}`">
        <div
            class="rounded shadow hover:shadow-lg transition cursor-pointer bg-white"
        >
            <img
                :src="
                    property.images
                        ? property.images[0]
                        : '/images/og-image.png'
                "
                alt="property"
                class="w-full h-48 object-cover rounded-t"
            />
            <div class="p-4">
                <h3 class="text-lg font-semibold mb-3">
                    {{ property.nameAccommodation }}
                </h3>
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
                        {{ property.address }}
                    </p>
                </div>

                <div class="flex items-center gap-1 mb-1">
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
                        {{ property.area }}m² · {{ directionRoom(1) }}
                    </p>
                </div>

                <div class="flex items-center justify-between gap-1 mt-4">
                    <div class="flex items-center gap-1">
                        <p class="text-orange-600 font-bold text-lg">
                            {{ formatPriceVND(property.price) }}
                        </p>
                    </div>
                    <div
                        class="px-2 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded"
                    >
                        <p class="text-xs text-gray-500">Chỉ còn 2 phòng</p>
                    </div>
                </div>
            </div>
        </div>
    </NuxtLink>
</template>


<script setup lang="ts">
import { formatPriceVND } from "~/utils/format";
import { DIRECTION_ROOM } from "~/utils/const";

const props = defineProps({
    property: {
        type: Object,
        required: true,
    },
});

const directionRoom = (viewRoom: number) => {
    switch (viewRoom) {
        case DIRECTION_ROOM.East:
            return "Hướng Đông";
        case DIRECTION_ROOM.West:
            return "Hướng Tây";

        case DIRECTION_ROOM.South:
            return "Hướng Nam";
        case DIRECTION_ROOM.North:
            return "Hướng Bắc";
        case DIRECTION_ROOM.Southeast:
            return "Hướng Đông Nam";
        case DIRECTION_ROOM.Southwest:
            return "Hướng Tây Nam";
        case DIRECTION_ROOM.Northeast:
            return "Hướng Đông Bắc";
        case DIRECTION_ROOM.Northwest:
            return "Hướng Tây Bắc";
        default:
            break;
    }
};
</script>
