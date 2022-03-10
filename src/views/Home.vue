<template>
  <div>
    <NavBar />
    <Slider />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue"
import Slider from "@/components/Slider.vue"

export default {
  name: "Home",
  components: {
    NavBar,
    Slider
  },
};
</script>
