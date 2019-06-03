<template>
    <div>
        <header>
            <a class="backTop" @click="backTop"></a>
            <router-link tag="p" :to="{name: 'search'}" class="keyword">{{keyword}}</router-link>
            <a class="iconfont search">&#xe611;</a>
            <a class="kind"></a>
            <a class="more"></a>
        </header>
        <ul class="search-body">
            <router-link tag="li" to="detail" v-for="(item, index) in goodsList" :key="index">
                <img :src="item.goods_image_url">
                <div>
                    <p class="content-title">{{item.goods_name}}</p>
                    <p class="content-price">
                        <span class="price"> {{item.goods_price}} </span>
                    </p>
                    <p class="content-info"><span>销量<i>{{item.goods_salenum}}</i></span><span>{{item.store_name}}</span><button class="more"></button></p>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
import Vuex from 'vuex'
export default {
    name: "SeachList",
    created() {
        this.$store.dispatch("search/acSearchGoods")
    },
    computed: {
        ...Vuex.mapState({
            keyword: state=>state.search.keyword,
            goodsList: state=>state.search.goodsList
        })
    },
    methods: {
        backTop(){
            this.$router.back();
        }
    }
}
</script>

<style lang="sass" scoped>
header
    display: flex
    align-items: center
    height: 1rem
    background: rgba(248,248,248,0.95)
    .backTop
        display: block
        height: 100%
        width: 1rem
        background: url("../assets/common/backTop.png") no-repeat center
        background-size: .3rem
    .keyword
        background: #eee
        color: #aaa
        height: .6rem
        line-height: .6rem
        width: 100%
    .search
        display: block
        width: 1rem
    .kind
        display: block
        background: url("../assets/common/kind.png") no-repeat center
        background-size: .6rem
        width: 1rem
        height: 100%
    .more
        display: block
        background: url("../assets/common/more.png") no-repeat center
        background-size: .3rem
        width: 1rem
        height: 100%
.search-body
        width: 100%
        li
            padding: .3rem
            box-sizing: border-box
            border-bottom: 1px solid #aaa
            width: 100%
            height: 2.6rem
            background: #ccc
            display: flex
            img
                display: block
                width: 2rem
                height: 2rem
            p.content-title
                height: .8rem
                line-height: .4rem
                font-size: .27rem
                text-align: left
                padding: 0 .2rem
                box-sizing: border-box
                text-overflow: ellipsis
                overflow: hidden
            p.content-price
                height: .8rem
                line-height: .8rem
                text-align: left
                padding: 0 .2rem
                box-sizing: border-box
                .price
                    color: red
                    font-size: .3rem
            p.content-info
                height: .4rem
                line-height: .4rem
                text-align: left
                padding: 0 .2rem
                color: gray
.more
    background: url("../assets/common/more.png") no-repeat center
</style>
