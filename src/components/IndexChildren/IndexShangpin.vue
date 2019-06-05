<template>
    <dl v-for="(item,index) in goodsList" :key="index">
        <dt><router-link :to="" :src=""></router-link></dt>
        <dd>v-for  good in item
            <img src="../../assets/10_06124375466059094_240.jpg">
            <p>攀枝花新鲜大贵妃芒紫芒果 新鲜当季青水果带箱5斤爱文吉禄包邮</p>
            <p class="jiage">￥32.80</p>
        </dd>
    </dl>
</template>


<script>
import Vuex from "vuex";
export default{
    name: "IndexShangpin",
        computed: {
            ...Vuex.mapState({
                goodsList: state=>state.index.goodsList 
        }),
    }
}
</script>


<style lang="scss" scoped>
    dl{
        margin: 0.4rem 0;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        background: #fff;
        dt{
            height: 1.5rem;
            width: 100%;
            padding: 0;
            img{
                width: 100%;
                height: 90%;
            }
        }
        dd{
            height: 4rem;
            width: 50%;
            img{
                height: 2.5rem;
                width: 90%;
            }
            p:first-of-type{
                height: 1rem;
                line-height: .5rem;
                font-size: .25rem;
                text-overflow: ellipsis;
                overflow: hidden;
            }
            p:last-of-type{
                height: .5rem;
                font-size: .3rem;
            }
        }
    }
</style>
