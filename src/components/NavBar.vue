<template>
    <!-- larger Screen  -->
    <div id="nav" class="hidden md:grid grid-cols-6 gap-2 px-14 py-7">
        <LargerScreen />
    </div>
    <!-- Mobile Screen  -->
    <div id="nav" class="md:hidden px-4 py-2 mb-4 text-sm fixed">
        <MobileScreen />
    </div>
</template>

<script>
    import LargerScreen from "@/components/nav/LargerScreen.vue"
    import MobileScreen from "@/components/nav/MobileScreen.vue"
    
    export default {
        name: "NavBar",
        components: {
            LargerScreen,
            MobileScreen
        }
    }
</script>
