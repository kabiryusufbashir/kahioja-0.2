<template>
    <div id="main-cat" class="relative top-36 md:top-0 md:px-14 px-4 my-8 text-center">
        <div class="grid md:grid-cols-2 gap-6">
            <div class="">
                <div class="mb-4 rounded-lg bg-white yus-shadow">
                    <div class="cate-title-yus my-12 pt-12">Shop Home Appliances</div>
                    <div class="py-8">
                        <img class="mx-auto" src="../assets/images/shop-home-appliciances.png" alt="Shop Home Appliances Logo">
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-6">
                    <div class="bg-white rounded-lg yus-shadow">
                        <div class="cate-title-yus my-12">Phone Accessories</div>
                        <div class="py-6">
                            <img class="mx-auto" src="../assets/images/phone-accessories.png" alt="Phone Accessories Logo">
                        </div>
                    </div>
                    <div class="bg-white rounded-lg yus-shadow">
                        <div class="cate-title-yus my-12">Watches</div>
                        <div class="py-6">
                            <img class="mx-auto" src="../assets/images/watches.png" alt="Watches Logo">
                        </div>
                    </div>
                </div>
            </div>
            <div class="">
                <div class="mb-4 rounded-lg yus-shadow">
                    <div class="cate-title-yus my-12 pt-16">Shop Groceries</div>
                    <div class="py-12">
                        <img class="mx-auto" src="../assets/images/shop-groceries.png" alt="Shop Groceries Logo">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MainCategory",
    }
</script>