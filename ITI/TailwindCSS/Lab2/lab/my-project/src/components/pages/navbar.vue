<template>
    <nav class="bg-slate-900">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="relative flex h-16 items-center justify-between">
                <div
                    class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
                >
                    <div class="hidden sm:ml-6 sm:block">
                        <div class="flex space-x-4">
                            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                            <a
                                href="/"
                                class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700 hover:text-white"
                                aria-current="page"
                                >All Movies</a
                            >
                            <a
                                href="/create"
                                class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                                >Create Movie</a
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Mobile menu, show/hide based on menu state. -->
        <div class="sm:hidden" id="mobile-menu">
            <div class="px-2 pb-3">
                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                <a
                    href="/"
                    class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700 hover:text-white"
                    aria-current="page"
                    >All Movies</a
                >
                <a
                    href="/create"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >Create Movie</a
                >
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "navBar",
};
</script>

<style scoped></style>
