<template>
    <div>
        <dl v-for="(item,index) in goodsList" :key="index">
            <dt><router-link tag="img" :to="item.dt.data" v-lazy="item.dt.image"></router-link></dt>
            <router-link tag="dd" :to="{name:'detail', query: {data: obj.goods_id, type: 'goods'}}" v-for="(obj,index) in item.dd" :key="1+index">
                <img v-lazy="obj.goods_image">
                <p>{{obj.goods_name}}</p>
                <p class="jiage">{{obj.goods_promotion_price}}</p>
            </router-link>
        </dl>
    </div>
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
