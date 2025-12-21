<!-- components/PopularPosts.vue -->
<template>
    <div class="rounded-xl border bg-white p-4">
        <h3 class="mb-4 text-lg font-semibold">Bài viết được xem nhiều nhất</h3>

        <ul class="space-y-4">
            <li
                v-for="(post, index) in posts"
                :key="index"
                class="flex items-start gap-3"
            >
                <span
                    class="flex h-7 w-7 items-center justify-center rounded-full bg-red-100 text-sm font-semibold text-red-600"
                >
                    {{ index + 1 }}
                </span>
                <NuxtLink
                    to="#"
                    class="text-sm font-medium leading-snug hover:text-blue-600"
                >
                    {{ post }}
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script setup>
defineProps({
    posts: Array,
});
</script>
