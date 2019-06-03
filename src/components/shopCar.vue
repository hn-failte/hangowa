<template>
    <div>
        <shopCarHeader></shopCarHeader>
    </div>
</template>


<script>
import Vuex from 'vuex'
export default {
    name: "shopCar",
    components: {
        shopCarHeader: ()=>import("./shopCarChildren/shopCarHeader.vue"),
    }
}
</script>


<style lang="scss" scoped>
    
</style>