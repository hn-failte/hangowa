<template>
    <div class="detail">
        <GoodInfo></GoodInfo>
        <GoodDesc></GoodDesc>
    </div>
</template>

<script>
// 商品详情
export default {
    name: "Detail",
    created() {
        this.$store.commit("detail/init");
        if(this.$route.query.type == "goods"){
            let data = this.$route.query.data;
            this.$store.dispatch("detail/acGetGoodDetail", data);
        }
        else if(this.$route.query.type == "url"){
            location.href = this.$route.query.data
        }
        else{
            // eslint-disable-next-line
            console.log("Wrong Type")
        }
    },
    components: {
        GoodInfo: ()=>import("@components/DetailChildren/GoodInfo"),
        GoodDesc: ()=>import("@components/DetailChildren/GoodDesc")
    },
    beforeRouteUpdate(to, from, next){
        this.$store.commit("detail/init");
        if(to.query.type == "goods"){
            let data = to.query.data;
            this.$store.dispatch("detail/acGetGoodDetail", data);
            document.documentElement.scrollTop = 0;
            next()
        }
        else if(to.query.type == "url"){
            location.href = to.query.data
        }
        else{
            // eslint-disable-next-line
            console.log("Wrong Type")
        }
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