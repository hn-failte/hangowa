<template>
    <main>
        <h3>精选专题商品</h3>
        <ul class="main-body">
            <li class="contents">
                <img src="@assets/discover/main-shopping-1.jpg">
                <p>洋溪蜜柚2个装 共6斤左右 新鲜时令水果</p>
            </li>
            <li class="contents">
                <img src="@assets/discover/main-shopping-1.jpg">
                <p>洋溪蜜柚2个装 共6斤左右 新鲜时令水果</p>
            </li>
            <li class="contents">
                <img src="@assets/discover/main-shopping-1.jpg">
                <p>洋溪蜜柚2个装 共6斤左右 新鲜时令水果</p>
            </li>
            <li class="contents">
                <img src="@assets/discover/main-shopping-1.jpg">
                <p>洋溪蜜柚2个装 共6斤左右 新鲜时令水果</p>
            </li>
            <li class="contents">
                <img src="@assets/discover/main-shopping-1.jpg">
                <p>洋溪蜜柚2个装 共6斤左右 新鲜时令水果</p>
            </li>
        </ul>
    </main>
</template>

<script>
import Vuex from "vuex"

export default {
    name: "DiscoverMain",
    computed: {
        ...Vuex.mapState({
            //
        })
    }
}
</script>

<style lang="sass">
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
            p
                width: 100%
                height: .8rem
                line-height: .4rem
                font-size: .3rem
                text-align: left
</style>