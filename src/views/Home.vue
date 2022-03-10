<template>
  <div>
    <NavBar />
    <Slider />
    <MainCategory />
    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue"
import Slider from "@/components/Slider.vue"
import MainCategory from "@/components/MainCategory.vue"
import Footer from "@/components/Footer.vue"

export default {
  name: "Home",
  components: {
    NavBar,
    Slider,
    MainCategory,
    Footer
  },
}
</script>
