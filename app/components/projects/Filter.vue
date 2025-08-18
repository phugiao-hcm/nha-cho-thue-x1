<template>
    <div class="sticky top-0 z-50 bg-white shadow-md p-3 mb-6 rounded-lg">
        <div class="max-w-7xl mx-auto px-4">
            <!-- Mobile: nút lọc -->
            <div class="flex md:hidden justify-between items-center">
                <button
                    @click="showMobileFilter = true"
                    class="px-4 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition"
                >
                    Bộ lọc
                </button>
                <button
                    @click="resetFilters"
                    class="text-sm text-gray-500 underline hover:text-gray-700"
                >
                    Đặt lại
                </button>
            </div>

            <!-- Desktop: filter ngang -->
            <div class="hidden md:flex flex-wrap items-center gap-4">
                <!-- Khu vực -->
                <select
                    v-model="filters.ward"
                    class="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Khu vực: Tất cả</option>
                    <option value="Phước Vĩnh">TT. Phước Vĩnh</option>
                    <option value="An Linh">Xã An Linh</option>
                    <option value="An Bình">Xã An Bình</option>
                    <option value="Tân Hiệp">Xã Tân Hiệp</option>
                    <option value="Tam Lập">Xã Tam Lập</option>
                    <option value="Vĩnh Hòa">Xã Vĩnh Hòa</option>
                    <option value="Phước Hòa">Xã Phước Hòa</option>
                </select>

                <!-- Loại phòng -->
                <select
                    v-model="filters.type"
                    class="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Loại: Tất cả</option>
                    <option value="Phòng trọ">Phòng trọ</option>
                    <option value="Phòng trọ có gác">Phòng trọ có gác</option>
                    <option value="Nhà nguyên căn nhỏ">
                        Nhà nguyên căn nhỏ
                    </option>
                    <option value="Căn hộ mini">Căn hộ mini</option>
                </select>

                <!-- Giá -->
                <select
                    v-model="filters.type"
                    class="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Giá: Tất cả</option>
                    <option value="Phòng trọ">Dưới 1 triệu</option>
                    <option value="Phòng trọ có gác">
                        Từ 1 triệu đến 3 triệu
                    </option>
                    <option value="Nhà nguyên căn nhỏ">Trên 3 triệu</option>
                </select>
                <!-- Diện tích -->
                <select
                    v-model="filters.type"
                    class="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Giá: Tất cả</option>
                    <option value="Phòng trọ">Dưới 1 triệu</option>
                    <option value="Phòng trọ có gác">
                        Từ 1 triệu đến 3 triệu
                    </option>
                    <option value="Nhà nguyên căn nhỏ">Trên 3 triệu</option>
                </select>

                <!-- Tiện ích -->
                <div class="flex gap-3 flex-wrap">
                    <label
                        v-for="u in allUtilities"
                        :key="u"
                        class="flex items-center gap-1 text-sm"
                    >
                        <input
                            type="checkbox"
                            v-model="filters.utilities"
                            :value="u"
                            class="accent-blue-500"
                        />
                        {{ u }}
                    </label>
                </div>

                <!-- Reset -->
                <button
                    @click="resetFilters"
                    class="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm transition"
                >
                    Đặt lại
                </button>
            </div>

            <!-- Mobile Offcanvas -->
            <transition name="slide">
                <div
                    v-if="showMobileFilter"
                    class="fixed inset-0 z-50 bg-black/40 flex justify-end"
                >
                    <div
                        class="bg-white w-80 h-full p-4 flex flex-col overflow-y-auto transform transition-transform duration-300 translate-x-0"
                    >
                        <h3 class="text-lg font-semibold mb-4">Bộ lọc</h3>

                        <!-- Khu vực -->
                        <select
                            v-model="filters.ward"
                            class="border border-gray-300 rounded-lg px-3 py-2 text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Khu vực: Tất cả</option>
                            <option value="Phước Vĩnh">TT. Phước Vĩnh</option>
                            <option value="An Linh">Xã An Linh</option>
                            <option value="An Bình">Xã An Bình</option>
                        </select>

                        <!-- Loại -->
                        <select
                            v-model="filters.type"
                            class="border border-gray-300 rounded-lg px-3 py-2 text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Loại: Tất cả</option>
                            <option value="Phòng trọ">Phòng trọ</option>
                            <option value="Phòng trọ có gác">
                                Phòng trọ có gác
                            </option>
                        </select>

                        <!-- Giá -->
                        <div class="mb-3">
                            <label class="block text-sm mb-1"
                                >Giá (triệu)</label
                            >
                            <div class="flex gap-2">
                                <input
                                    v-model="filters.priceMin"
                                    type="number"
                                    placeholder="Từ"
                                    class="w-20 px-2 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <input
                                    v-model="filters.priceMax"
                                    type="number"
                                    placeholder="Đến"
                                    class="w-20 px-2 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>

                        <!-- Diện tích -->
                        <div class="mb-3">
                            <label class="block text-sm mb-1"
                                >Diện tích (m²)</label
                            >
                            <div class="flex gap-2">
                                <input
                                    v-model="filters.areaMin"
                                    type="number"
                                    placeholder="Từ"
                                    class="w-20 px-2 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <input
                                    v-model="filters.areaMax"
                                    type="number"
                                    placeholder="Đến"
                                    class="w-20 px-2 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>

                        <!-- Tiện ích -->
                        <div class="mb-3">
                            <label class="block text-sm mb-1">Tiện ích</label>
                            <div class="flex flex-col gap-2">
                                <label
                                    v-for="u in allUtilities"
                                    :key="u"
                                    class="flex items-center gap-1 text-sm"
                                >
                                    <input
                                        type="checkbox"
                                        v-model="filters.utilities"
                                        :value="u"
                                        class="accent-blue-500"
                                    />
                                    {{ u }}
                                </label>
                            </div>
                        </div>

                        <!-- Buttons -->
                        <div class="mt-auto flex gap-2">
                            <button
                                @click="resetFilters"
                                class="flex-1 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm transition"
                            >
                                Đặt lại
                            </button>
                            <button
                                @click="showMobileFilter = false"
                                class="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition"
                            >
                                Áp dụng
                            </button>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref } from "vue";

const showMobileFilter = ref(false);

const filters = reactive({
    ward: "",
    type: "",
    priceMin: "",
    priceMax: "",
    areaMin: "",
    areaMax: "",
    utilities: [],
});

const allUtilities = ["WC riêng", "Gác lửng", "Chỗ để xe", "Wifi"];

function resetFilters() {
    filters.ward = "";
    filters.type = "";
    filters.priceMin = "";
    filters.priceMax = "";
    filters.areaMin = "";
    filters.areaMax = "";
    filters.utilities = [];
}
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
    transition: transform 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
    transform: translateX(100%);
}
</style>
