<template>
    <ul class="search-body">
        <router-link tag="li" to="detail" v-for="(item, index) in goodsList" :key="index">
            <img :src="item.goods_image_url">
            <p class="content-title">{{item.goods_name}}</p>
            <p class="content-price">
                <span class="price"> {{item.goods_price}} </span>
            </p>
            <ul class="content-info">
                <li>销量<i> {{item.goods_salenum}}</i> </li>
                <li> {{item.store_name}}</li>
            </ul>
        </router-link>
    </ul>
</template>

<script>
import Vuex from 'vuex'
export default {
    name: "SearchListHeader",
    computed: {
        ...Vuex.mapState({
            goodsList: state=>state.search.goodsList
        })
    }
}
</script>

<style lang="sass" scoped>
ul.search-body
        width: 100%
        &>li
            position: relative
            box-sizing: border-box
            border-bottom: 1px solid #aaa
            width: 100%
            height: 2.6rem
            display: flex
            img
                position: absolute
                top: .3rem
                left: .3rem
                display: block
                width: 2rem
                height: 2rem
            p.content-title
                position: absolute
                top: .3rem
                left: 2.5rem
                height: .8rem
                line-height: .4rem
                font-size: .27rem
                text-align: left
                padding: 0 .2rem
                box-sizing: border-box
            p.content-price
                position: absolute
                top: 1.1rem
                left: 2.5rem
                height: .8rem
                line-height: .8rem
                text-align: left
                padding: 0 .2rem
                box-sizing: border-box
                .price
                    color: red
                    font-size: .3rem
            ul.content-info
                position: absolute
                top: 1.9rem
                left: 2.5rem
                height: .4rem
                width: 4rem
                line-height: .4rem
                text-align: left
                padding: 0 .2rem
                color: gray
                display: flex
                li
                    display: block
                    height: .4rem
                    line-height: .4rem
                    &:first-of-type
                        width: 1rem
                    &:last-of-type
                        width: 3rem
                        white-space: nowrap
                        text-overflow: ellipsis
                        overflow: hidden
</style>