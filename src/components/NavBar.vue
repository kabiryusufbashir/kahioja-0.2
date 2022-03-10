<template>
    <div id="nav" class="hidden md:grid grid-cols-6 gap-2 px-14 py-7">
        <Logo />
        <SearchBar />
    </div>
</template>

<script>
    import Logo from "@/components/nav/Logo.vue"
    import SearchBar from "@/components/nav/SearchBar.vue"

    export default {
        name: "NavBar",
        components: {
            Logo,
            SearchBar
        }
    }
</script>
