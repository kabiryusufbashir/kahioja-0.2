<template>
    <div id="banner" class="slider relative top-36 md:top-0 mt-64 md:mt-6">
        <div class="flex items-center">
            <div class="slideshow-container">
                <div class="mySlides fade">
                    <img src="../assets/images/banner-1.jpg" style="width:100%">
                </div>
                
                <div class="mySlides fade">
                    <img src="../assets/images/banner-2.jpg" style="width:100%">
                </div>

                <div class="mySlides fade">
                    <img src="../assets/images/banner-3.jpg" style="width:100%">
                </div>
            </div>
        </div>
        <div class="flex flex-row justify-center items-center mt-8 mx-auto">    
            <span class="dot"></span> 
            <span class="dot"></span> 
            <span class="dot"></span> 
        </div>
    </div>
</template>

<script>
    export default {
       name: "Slider"
    }
</script>