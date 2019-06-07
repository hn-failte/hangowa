<template>
    <div>
        <shopCarHeader></shopCarHeader>
        <shopCarContent></shopCarContent>
        <shopCarFooter></shopCarFooter>
    </div>
</template>


<script>
import Vuex from 'vuex'
export default {
    name: "shopCar",
    created() {
        this.handleGetGoods();
    },
    components: {
        shopCarHeader: ()=>import("./shopCarChildren/shopCarHeader.vue"),
        shopCarContent: ()=>import("./shopCarChildren/shopCarContent.vue"),
        shopCarFooter: ()=>import("./shopCarChildren/shopCarFooter.vue"),
    },
    methods: {
        ...Vuex.mapActions({
            handleGetGoods:"car/handleGetGoods"
        })
    },
}
</script>


<style lang="scss" scoped>
    
</style>