<template>
    <!-- Popular Category -->
    <div id="popular-cat" class="relative top-36 md:top-0 md:px-14 px-4 mt-8">
        <h1 class="headings-yus">
            Popular Product Categories
        </h1>
        <div class="grid md:grid-cols-6 grid-cols-3 gap-6 my-8 text-center">
            <div v-for="(cate, index) in uniqueCategory" :key="index.id"  class="cursor-pointer">
                <div>
                    <a href="#">
                        <div class="cate-yus rounded-full border-8 md:border-24">
                            <img class="mx-auto" :src="cate.categories[0].image" :alt="cate.categories[0].name">
                        </div>
                        <span class="cate-title-yus">{{ cate.categories[0].name  }}</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Category",
        data() {
            return {
                categories: [],
                data: []
            }
        },
        methods:{
            async getCategories(){
                try {
                    let response = await fetch("https://testapi.kahioja.com/products")
                    this.data = await response.json()
                    this.categories = this.data.products
                    // console.log(this.categories)
                } catch (error) {
                    console.log(error)
                }
            }
        },
        created(){
            this.getCategories()
        },
        computed:{
            uniqueCategory(){
                return this.categories.reduce((seed, current) => {
                    return Object.assign(seed, {
                        [current.name] : current
                    })
                }, {})
            }
        }
    }
</script>