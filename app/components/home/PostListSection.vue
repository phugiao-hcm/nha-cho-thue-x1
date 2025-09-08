<template>
    <section class="bg-white py-12">
        <div class="max-w-screen-xl mx-auto px-4">
            <h1
                class="text-4xl font-extrabold text-orange-500 mb-3 relative inline-block"
            >
                Lựa chọn chỗ ở HOT
                <span
                    class="absolute left-0 -bottom-2 w-30 h-1 bg-orange-500 rounded-full"
                ></span>
            </h1>
            <p class="text-gray-600 mb-8 max-w-xl">
                Tìm kiếm các chỗ ở đẹp và phù hợp nhất với bạn tại Phú Giáo, KCN
                Tân Bình
            </p>

            <!-- debug thử dữ liệu trả về -->
            <!-- <pre>{{ postList }}</pre> -->

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <template v-if="pending">
                    <Skeleton v-for="n in 4" :key="n" />
                </template>
                <template v-else>
                    <PropertyCard
                        v-for="(item, index) in postList"
                        :key="index"
                        :property="item"
                    />
                </template>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import PropertyCard from "./PropertyCard.vue";
import { usePhongTroList } from "~/apis/posts";
import Skeleton from "~/components/skeleton/CardSkeleton.vue";

const postList = ref<any[]>([]);

// gọi API
const { data, pending } = await usePhongTroList({ page: 1, limit: 20 });
postList.value = data.value.data.phongTroList;
</script>
