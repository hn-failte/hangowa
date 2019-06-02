<template>
    <div>
        <IndexHeader></IndexHeader>
        <IndexLunbo></IndexLunbo>
        <IndexPicbtn></IndexPicbtn>
        <IndexAd></IndexAd>
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
    }
}
</script>

<style lang="scss" scoped>
    
</style>
