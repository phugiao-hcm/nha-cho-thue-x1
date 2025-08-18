<template>
    <aside class="bg-white p-4 border rounded shadow space-y-4 w-full">
        <h2 class="text-lg font-semibold mb-4">Bộ lọc tìm kiếm</h2>

        <div>
            <label class="block text-sm font-medium mb-1"
                >Loại bất động sản</label
            >
            <select
                v-model="localFilters.type"
                class="w-full border rounded px-2 py-1"
            >
                <option value="">Tất cả</option>
                <option>Nhà riêng</option>
                <option>Chung cư</option>
                <option>Biệt thự</option>
                <option>Đất nền</option>
            </select>
        </div>

        <div>
            <label class="block text-sm font-medium mb-1">Khu vực</label>
            <select
                v-model="localFilters.city"
                class="w-full border rounded px-2 py-1"
            >
                <option value="">Tất cả</option>
                <option>Xã Phước Hòa</option>
                <option>Xã Tân Hiệp</option>
                <option>Xã An Thái</option>
                <option>Xã Vĩnh Hòa</option>
                <option>Xã An Long</option>
                <option>Xã Phước Sang</option>
                <option>Xã Tân Long</option>
                <option>Xã Tân Bình</option>
            </select>
        </div>

        <div>
            <label class="block text-sm font-medium mb-1"
                >Khoảng giá (tỷ VNĐ)</label
            >
            <div class="flex gap-2">
                <input
                    v-model="localFilters.priceMin"
                    type="number"
                    min="0"
                    class="w-1/2 border rounded px-2 py-1"
                    placeholder="Từ"
                />
                <input
                    v-model="localFilters.priceMax"
                    type="number"
                    min="0"
                    class="w-1/2 border rounded px-2 py-1"
                    placeholder="Đến"
                />
            </div>
        </div>

        <div>
            <label class="block text-sm font-medium mb-1">Diện tích (m²)</label>
            <div class="flex gap-2">
                <input
                    v-model="localFilters.areaMin"
                    type="number"
                    min="0"
                    class="w-1/2 border rounded px-2 py-1"
                    placeholder="Từ"
                />
                <input
                    v-model="localFilters.areaMax"
                    type="number"
                    min="0"
                    class="w-1/2 border rounded px-2 py-1"
                    placeholder="Đến"
                />
            </div>
        </div>

        <div>
            <label class="block text-sm font-medium mb-1">Số phòng ngủ</label>
            <select
                v-model="localFilters.bedrooms"
                class="w-full border rounded px-2 py-1"
            >
                <option value="">Tất cả</option>
                <option>1+</option>
                <option>2+</option>
                <option>3+</option>
                <option>4+</option>
            </select>
        </div>

        <button
            class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            @click="applyFilter"
        >
            Tìm kiếm
        </button>
    </aside>
</template>

<script setup>
import { reactive, watch } from "vue";

const props = defineProps({
    modelValue: {
        type: Object,
        default: () => ({}),
    },
});
const emit = defineEmits(["update:filters", "apply-filter"]);

const localFilters = reactive({
    type: "",
    city: "",
    priceMin: "",
    priceMax: "",
    areaMin: "",
    areaMax: "",
    bedrooms: "",
});

watch(
    () => props.modelValue,
    (val) => {
        if (val) Object.assign(localFilters, val);
    },
    { immediate: true }
);

const applyFilter = () => {
    emit("update:filters", { ...localFilters });
    emit("apply-filter", { ...localFilters });
};
</script>
