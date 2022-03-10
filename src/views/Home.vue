<template>
  <div>
    <NavBar />
    <Slider />
    <MainCategory />
    <BestProducts />
    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue"
import Slider from "@/components/Slider.vue"
import MainCategory from "@/components/MainCategory.vue"
import BestProducts from "@/components/BestProducts.vue"
import Footer from "@/components/Footer.vue"

export default {
  name: "Home",
  components: {
    NavBar,
    Slider,
    MainCategory,
    BestProducts,
    Footer
  },
}
</script>
