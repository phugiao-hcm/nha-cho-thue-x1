<script setup lang="ts">
import { HomeIcon, ArrowLeftIcon } from "@heroicons/vue/24/outline";

defineProps<{
  title: string;
}>();

const router = useRouter();

const goBack = () => {
  if (window.history.length > 1) {
    router.back();
  } else {
    router.push("/");
  }
};

const goHome = () => {
  router.push("/");
};
</script>

<template>
  <!-- 📱 Mobile Sticky Header -->
  <div
    class="md:hidden sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200"
    style="padding-top: env(safe-area-inset-top)"
  >
    <div class="flex items-center h-12 px-3 gap-2">
      <!-- 🔙 Back -->
      <button
        @click="goBack"
        class="w-7 h-7 flex items-center justify-center rounded-full border border-gray-300 active:scale-90 transition"
        aria-label="Back"
      >
        <ArrowLeftIcon class="w-4 h-4" />
      </button>

      <!-- 🏷️ Title (LEFT aligned) -->
      <h1 class="text-sm font-semibold truncate max-w-[calc(100%-96px)]">
        {{ title }}
      </h1>

      <!-- 🏠 Home -->
      <button
        @click="goHome"
        class="ml-auto w-7 h-7 flex items-center justify-center rounded-full border border-gray-300 active:scale-90 transition"
        aria-label="Home"
      >
        <HomeIcon class="w-4 h-4" />
      </button>
    </div>
  </div>
</template>
