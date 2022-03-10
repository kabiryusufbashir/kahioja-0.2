<template>
  <div>
    <NavBar />
    <Slider />
    <MainCategory />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue"
import Slider from "@/components/Slider.vue"
import MainCategory from "@/components/MainCategory.vue"

export default {
  name: "Home",
  components: {
    NavBar,
    Slider,
    MainCategory
  },
}
</script>
