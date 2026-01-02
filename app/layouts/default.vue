<template>
  <div class="min-h-screen flex flex-col bg-gray-100">
    <Header class="hidden md:block" />

    <!-- 📱 Mobile Header (NOT HOME) -->
    <MobileHeader
      v-if="showMobileHeader"
      class="md:hidden"
      :title="$route.meta.title || ''"
    />
    <main class="flex-grow md:pb-0" :class="{ 'pb-16': showMobileTabBar }">
      <slot />
    </main>
    <!-- Footer: chỉ hiện desktop -->
    <Footer class="hidden md:block" />

    <!-- Gọi điện liên hệ -->
    <!-- <Social /> -->

    <!-- Tab bar: chỉ hiện mobile -->
    <MobileTabBar v-if="showMobileTabBar" class="md:hidden" />
  </div>
</template>

<script setup>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
// import Social from "~/components/Social.vue";
import MobileHeader from "~/components/MobileHeader.vue";
import MobileTabBar from "~/components/MobileTabBar.vue";

import { useRoute } from "vue-router";

const route = useRoute();

const showMobileHeader = computed(() => route.path !== "/");
const showMobileTabBar = computed(() => route.path === "/");
</script>
