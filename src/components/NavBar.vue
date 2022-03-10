<template>
    <!-- larger Screen  -->
    <div id="nav" class="hidden md:grid grid-cols-6 gap-2 px-14 py-7">
        <LargerScreen />
    </div>
    <!-- Mobile Screen  -->
    <div id="nav" class="md:hidden px-4 py-2 mb-4 text-sm fixed">
        <MobileScreen />
    </div>
    <!-- Bottom Nav  -->
    <div id="nav-bottom" class="md:hidden">
        <BottomNavBar />
    </div>
</template>

<script>
    import LargerScreen from "@/components/nav/LargerScreen.vue"
    import MobileScreen from "@/components/nav/MobileScreen.vue"
    import BottomNavBar from "@/components/nav/BottomNavBar.vue"
    
    export default {
        name: "NavBar",
        components: {
            LargerScreen,
            MobileScreen,
            BottomNavBar
        }
    }
</script>
