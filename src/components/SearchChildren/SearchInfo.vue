<template>
    <div>
        <dl class="search-info">
            <dt>热门搜索</dt>
            <router-link tag="dd" v-for="(item,index) in infoList" :to="{name: 'searchlist', query: {keyword: item}}" :key="index">{{item}}</router-link>
        </dl>
        <dl class="search-history">
            <dt>历史记录</dt>
            <router-link tag="dd" v-for="(item,index) in historyList" :to="{name: 'searchlist', query: {keyword: item}}" :key="index">{{item}}</router-link>
        </dl>
        <a class="historyBtn" href="javascipt: void(0)" @click="clearHistory">清除历史</a>
    </div>
</template>

<script>
import Vuex from "vuex"
export default {
    name: "SearchBody",
    computed: {
        ...Vuex.mapState({
            infoList: state => state.search.infoList,
            historyList: state => state.search.historyList
        })
    },
    methods: {
        ...Vuex.mapMutations({
            clearHistory: "search/muClearHistory"
        })
    },
}
</script>

<style lang="sass" scoped>
    dl
        width: 100%
        display: flex
        flex-wrap: wrap
        &.search-info
            margin-top: 1rem
        &.search-history
            margin-bottom: 1rem
    dt
        width: 100%
        text-align: left
        padding: .2rem
        font-size: .3rem
    dd
        padding: .2rem
        margin: .1rem
        box-sizing: border-box
        border-radius: 25%
        background: #fff
        font-size: .25rem
    .historyBtn
        display: block
        width: 80%
        margin: 0 auto
        height: 1rem
        line-height: 1rem
        font-size: .3rem
        background: #ddd
        color: #333
</style>
