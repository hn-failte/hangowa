<template>
    <div class="index">
        <IndexHeader></IndexHeader>
        <IndexLunbo></IndexLunbo>
        <IndexPicbtn></IndexPicbtn>
        <IndexAd></IndexAd>
        <IndexTehui></IndexTehui>
        <IndexShangpin></IndexShangpin>
        <IndexFooter></IndexFooter>
    </div>
</template>

<script>
import index from "@api/index"
export default {
    name: "Index",
    created() {
        // async function fun(){
        //     let data = await index.indexData()
        //     console.log(data)
        // }
        // fun()
        this.$store.dispatch("index/acGetIndexData")
    },
    components: {
        IndexHeader: ()=>import("./IndexChildren/IndexHeader.vue"),
        IndexLunbo: ()=>import("./IndexChildren/IndexLunbo.vue"),
        IndexPicbtn: ()=>import("./IndexChildren/IndexPicbtn.vue"),
        IndexAd: ()=>import("./IndexChildren/IndexAd.vue"),
        IndexTehui: ()=>import("./IndexChildren/IndexTehui.vue"),
        IndexShangpin: ()=>import("./IndexChildren/IndexShangpin.vue"),
        IndexFooter: ()=>import("./IndexChildren/IndexFooter.vue"),
    }
    // methods: {
    //     ...Vuex.mapMutations({
    //         getIndexData: "index/muGetIndexData"
    //     })
    // }
}
</script>

<style lang="scss" scoped>
    .index{
        position: relative;
        z-index: -10
    }
</style>
