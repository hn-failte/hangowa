<template>
    <div>
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
export default {
    name: "Index",
    components: {
        IndexHeader: ()=>import("./IndexChildren/IndexHeader.vue"),
        IndexLunbo: ()=>import("./IndexChildren/IndexLunbo.vue"),
        IndexPicbtn: ()=>import("./IndexChildren/IndexPicbtn.vue"),
        IndexAd: ()=>import("./IndexChildren/IndexAd.vue"),
        IndexTehui: ()=>import("./IndexChildren/IndexTehui.vue"),
        IndexShangpin: ()=>import("./IndexChildren/IndexShangpin.vue"),
        IndexFooter: ()=>import("./IndexChildren/IndexFooter.vue"),
    }
}
</script>

<style lang="scss" scoped>
    
</style>
