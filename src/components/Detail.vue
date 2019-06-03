<template>
    <div class="detail">
        <GoodInfo></GoodInfo>
        <GoodDesc></GoodDesc>
    </div>
</template>

<script>
// 商品详情
import Vuex from 'vuex'
export default {
    name: "Detail",
    components: {
        GoodInfo: ()=>import("@components/DetailChildren/GoodInfo"),
        GoodDesc: ()=>import("@components/DetailChildren/GoodDesc")
    }
}
</script>

<style lang="scss" scoped>
    div.detail{
        margin-bottom: 1rem;
        position: relative;
        z-index: -5;
    }
</style>