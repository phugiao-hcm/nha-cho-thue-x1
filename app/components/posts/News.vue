<template>
    <div class="max-w-6xl mx-auto pt-16">
        <!-- Section Title -->
        <h2 class="text-2xl font-bold mb-6 text-left">Tin đăng cùng khu vực</h2>

        <!-- Grid Layout for Items -->
        <div
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
            <!-- Single Item Card -->
            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                    src="https://placehold.co/600x401"
                    alt="Image 1"
                    class="w-full h-40 object-cover"
                />
                <div class="p-4">
                    <p class="text-sm text-gray-500">
                        Cho thuê phòng trọ gần cầu Điện Biên Phủ
                    </p>
                    <div class="flex justify-between items-center mt-2">
                        <p class="text-lg font-semibold">3 Triệu/tháng</p>
                        <p class="text-sm text-gray-400">16 m²</p>
                    </div>
                </div>
            </div>

            <!-- Repeat for other items -->
            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                    src="https://placehold.co/600x401"
                    alt="Image 2"
                    class="w-full h-40 object-cover"
                />
                <div class="p-4">
                    <p class="text-sm text-gray-500">
                        Phòng Duplex đầy đủ nội thất đi bộ qua Đại học Hutech
                    </p>
                    <div class="flex justify-between items-center mt-2">
                        <p class="text-lg font-semibold">4.5 Triệu/tháng</p>
                        <p class="text-sm text-gray-400">25 m²</p>
                    </div>
                </div>
            </div>

            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                    src="https://placehold.co/600x401"
                    alt="Image 3"
                    class="w-full h-40 object-cover"
                />
                <div class="p-4">
                    <p class="text-sm text-gray-500">
                        Phòng căn hộ Duplex đầy đủ nội thất view bancon thoáng
                        mát
                    </p>
                    <div class="flex justify-between items-center mt-2">
                        <p class="text-lg font-semibold">5.2 Triệu/tháng</p>
                        <p class="text-sm text-gray-400">28 m²</p>
                    </div>
                </div>
            </div>

            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                    src="https://placehold.co/600x401"
                    alt="Image 4"
                    class="w-full h-40 object-cover"
                />
                <div class="p-4">
                    <p class="text-sm text-gray-500">
                        Phòng cho thuê dạng chung cư tại Bình Thạnh
                    </p>
                    <div class="flex justify-between items-center mt-2">
                        <p class="text-lg font-semibold">3.5 Triệu/tháng</p>
                        <p class="text-sm text-gray-400">19 m²</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "News",
};
</script>

<style scoped>
/* Add custom styles if needed */
</style>
