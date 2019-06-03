<template>
    <header>
        <a class="backTop" @click="backTop"></a>
        <router-link tag="p" :to="{name: 'search'}" class="keyword">{{keyword}}</router-link>
        <a class="iconfont search">&#xe611;</a>
        <a class="kind"></a>
        <a class="more"></a>
    </header>
</template>

<script>
import Vuex from 'vuex'
export default {
    name: "SearchListHeader",
    computed: {
        ...Vuex.mapState({
            keyword: state=>state.search.keyword
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
        background: url("../../assets/common/backTop.png") no-repeat center
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
        background: url("../../assets/common/kind.png") no-repeat center
        background-size: .6rem
        width: 1rem
        height: 100%
    .more
        display: block
        background: url("../../assets/common/more.png") no-repeat center
        background-size: .3rem
        width: 1rem
        height: 100%
</style>
