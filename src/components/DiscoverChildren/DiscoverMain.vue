<template>
    <main>
        <h3>精选专题商品</h3>
        <ul class="main-body">
            <router-link tag="li" class="contents" :to="{name: 'detail', query: {data: item.goods_id, type: 'goods'}}" v-for="(item, index) in topicGoodsList" :key="index">
                <img :src="item.goods_image">
                <p class="good-name">￥ {{item.goods_name}}</p>
                <p class="good-price">￥ {{item.goods_price}}</p>
            </router-link>
        </ul>
    </main>
</template>

<script>
import Vuex from "vuex"

export default {
    name: "DiscoverMain",
    computed: {
        ...Vuex.mapState({
            topicGoodsList: state=>state.discover.topicGoodsList
        })
    }
}
</script>

<style lang="sass" scoped>
main
    width: 100%
    h3
        height: .8rem
        line-height: .8rem
        font-size: .35rem
    ul
        display: flex
        flex-wrap: wrap
        li
            width: 50%
            box-sizing: border-box
            padding: .1rem
            img
                width: 100%
                height: 4rem
            p.good-name
                width: 100%
                height: 1.2rem
                line-height: .4rem
                font-size: .3rem
                text-align: left
            p.good-price
                text-align: left
                color: red
                font-weight: bold
                border-top: 1px solid #ccc
</style>