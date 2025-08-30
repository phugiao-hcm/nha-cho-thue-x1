<template>
    <div>
        <!-- Nút mở filter -->
        <button
            @click="toggleFilter"
            class="px-4 py-2 bg-orange-500 text-white rounded-lg"
        >
            Bộ lọc
        </button>

        <!-- Overlay mờ -->
        <transition name="fade">
            <div
                v-if="isOpen"
                class="fixed inset-0 bg-black bg-opacity-40 z-40"
                @click="toggleFilter"
            ></div>
        </transition>

        <!-- Sidebar filter -->
        <transition name="slide">
            <aside
                v-if="isOpen"
                class="fixed top-0 right-0 w-80 h-full bg-white shadow-xl z-50 p-4 flex flex-col"
            >
                <div
                    class="flex justify-between items-center border-b pb-2 mb-4"
                >
                    <h2 class="text-lg font-semibold">Bộ lọc</h2>
                    <button
                        @click="toggleFilter"
                        class="text-gray-500 hover:text-black"
                    >
                        ✕
                    </button>
                </div>

                <!-- Nội dung filter -->
                <div class="flex-1 overflow-y-auto space-y-4">
                    <div>
                        <h3 class="font-medium mb-2">Giá</h3>
                        <input type="range" min="0" max="100" class="w-full" />
                    </div>

                    <div>
                        <h3 class="font-medium mb-2">Tiện ích</h3>
                        <label class="flex items-center space-x-2 mb-1">
                            <input
                                type="checkbox"
                                value="wifi"
                                v-model="filters.facilities"
                            />
                            <span>Wi-Fi</span>
                        </label>
                        <label class="flex items-center space-x-2 mb-1">
                            <input
                                type="checkbox"
                                value="parking"
                                v-model="filters.facilities"
                            />
                            <span>Bãi đỗ xe</span>
                        </label>
                    </div>
                </div>

                <!-- Nút action -->
                <div class="mt-4 flex justify-end space-x-2 border-t pt-2">
                    <button
                        @click="resetFilters"
                        class="px-4 py-2 border rounded-lg text-gray-600"
                    >
                        Đặt lại
                    </button>
                    <button
                        @click="applyFilters"
                        class="px-4 py-2 bg-orange-500 text-white rounded-lg"
                    >
                        Áp dụng
                    </button>
                </div>
            </aside>
        </transition>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";

const isOpen = ref(false);

const filters = reactive({
    facilities: [] as string[],
});

const toggleFilter = () => {
    isOpen.value = !isOpen.value;
};

const resetFilters = () => {
    filters.facilities = [];
};

const applyFilters = () => {
    toggleFilter();
};
</script>

<style scoped>
/* Hiệu ứng transition */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
    transition: transform 0.3s;
}
.slide-enter-from,
.slide-leave-to {
    transform: translateX(100%);
}
</style>
