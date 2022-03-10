<template>
    <div id="nav" class="hidden md:grid grid-cols-6 gap-2 px-14 py-7">
        <LargerScreen />
    </div>
</template>

<script>
    import LargerScreen from "@/components/nav/LargerScreen.vue"
    
    export default {
        name: "NavBar",
        components: {
            LargerScreen,
        }
    }
</script>
