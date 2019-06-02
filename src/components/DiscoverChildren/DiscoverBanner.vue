<template>
    <section>
        <div class="banner-header">
            <h3>专题精选</h3>
        </div>
        <div class="banner-main">
            <p class="top">
                <img src="@assets/discover/main-top.jpg">
                <img src="@assets/discover/main-top.jpg">
                <img src="@assets/discover/main-top.jpg">
            </p>
            <p class="bottom">
                <img src="@assets/discover/main-bottom.jpg">
                <img src="@assets/discover/main-bottom.jpg">
            </p>
        </div>
    </section>
</template>

<script>
import Vuex from "vuex"

export default {
    name: "DiscoverBanner",
    computed: {
        ...Vuex.mapState({
            //
        })
    }
}
</script>

<style lang="sass" scoped>
section
    width: 100%
    height: 4.2rem
    background: #fff
    .banner-header
        height: .7rem
        width: 100%
        text-align: left
        h3
            height: .5rem
            line-height: .5rem
            font-size: .35rem
            border-left: .1rem solid red
            margin-left: .1rem
            padding-left: .2rem
    .banner-main
        width: 100%
        height: 4.5rem
        .top
            display: flex
            justify-content: space-around
            width: 100%
            height: 1.5rem
            img
                width: 33%
                height: 100%
        .bottom
            display: flex
            width: 100%
            height: 2rem
            img
                width: 50%
                height: 100%

</style>