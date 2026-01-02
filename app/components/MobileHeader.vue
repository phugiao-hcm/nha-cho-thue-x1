<script setup lang="ts">
import { HomeIcon, ArrowLeftIcon, ShareIcon } from "@heroicons/vue/24/outline";

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

/* 🔗 Share (Facebook / Zalo style) */
const onShare = async () => {
  const shareData = {
    title: document.title,
    text: document.title,
    url: window.location.href,
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);
    } else {
      await navigator.clipboard.writeText(shareData.url);
      alert("Đã sao chép link");
    }
  } catch (err) {
    console.error("Share canceled", err);
  }
};
</script>

<template>
  <!-- 📱 Mobile Sticky Header -->
  <div
    class="md:hidden sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200"
    style="padding-top: env(safe-area-inset-top)"
  >
    <div class="flex items-center h-16 px-3 gap-2">
      <!-- 🔙 Back -->
      <button
        @click="goBack"
        class="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 active:scale-90 transition"
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
        class="ml-auto w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 active:scale-90 transition"
        aria-label="Home"
      >
        <HomeIcon class="w-4 h-4" />
      </button>

      <!-- 🔗 Share -->
      <button
        @click="onShare"
        class="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 active:scale-90 transition"
        aria-label="Share"
      >
        <ShareIcon class="w-4 h-4" />
      </button>
    </div>
  </div>
</template>
