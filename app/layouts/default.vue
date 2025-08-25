<template>
    <div class="min-h-screen flex flex-col bg-gray-100">
        <Header />
        <main class="flex-grow">
            <slot />
        </main>
        <Footer />

        <!-- Gọi điện liên hệ -->
        <Social />
    </div>
</template>

<script setup>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import Social from "~/components/Social.vue";
</script>
