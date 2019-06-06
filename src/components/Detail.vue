<template>
    <div class="detail">
        <Loading v-if="lodingAnimRun"></Loading>
        <PlaceChoose></PlaceChoose>
        <GoodsChoose></GoodsChoose>
        <GoodInfo></GoodInfo>
        <GoodDesc></GoodDesc>
        <GoodOperation></GoodOperation>
    </div>
</template>

<script>
// 商品详情
// import { Indicator } from 'mint-ui';
import Vuex from 'vuex'
export default {
    name: "Detail",
    created() {
        if(this.$route.query.type == "goods"){
            this.$store.commit("detail/init");
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
    computed: {
        ...Vuex.mapState({
            lodingAnimRun: state => state.detail.lodingAnimRun
        })
    },
    components: {
        GoodInfo: ()=>import("@components/DetailChildren/GoodInfo"),
        GoodDesc: ()=>import("@components/DetailChildren/GoodDesc"),
        GoodOperation: ()=>import("@components/DetailChildren/GoodOperation"),
        PlaceChoose: ()=>import("@components/DetailChildren/PlaceChoose"),
        GoodsChoose: ()=>import("@components/DetailChildren/GoodsChoose")
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