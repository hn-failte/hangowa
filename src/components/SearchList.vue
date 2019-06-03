<template>
    <div>
        <header>
            <button class="backTop"></button>
        </header>
        <ul class="search-body">
            <router-link tag="li" to="detail" v-for="(item, index) in goodsList" :key="index">
                <img :src="item.img2">
                <div>
                    <p class="content-title">{{item.name}}</p>
                    <p class="content-price">
                        <span class="new-price"> {{item.price}} </span>
                        <span class="old-price"> {{item.originalPrice}} </span>
                    </p>
                    <p class="content-info">{{item.fastPostFee==0 ? "免运费" : "满"+fastPostFee+"包邮"}}</p>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
import Vuex from 'vuex'
export default {
    name: "SeachList",
    computed: {
        ...Vuex.mapState({
            goodsList: state=>state.search.goodsList
        })
    },
}
</script>

<style lang="sass" scoped>
header
    height: 1rem
    background: gray
    .backTop
        background: url("../assets/common/backTop.png")
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
                .new-price
                    color: red
                    font-size: .3rem
                .old-price
                    color: gray
                    font-size: .25rem
                    text-decoration: line-through
            p.content-info
                height: .4rem
                line-height: .4rem
                text-align: left
                padding: 0 .2rem
                color: gray
</style>
