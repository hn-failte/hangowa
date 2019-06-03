<template>
    <header>
        <a href="javascript: void(0)" @click="backTop" class="backTop"></a>
        <input type="search" @input="searchInfo($event)">
        <a class="more" href="javascript: void(0)" @click="goSearch">搜索</a>
    </header>
</template>

<script>
import Vuex from 'vuex'
export default {
    name: "SearchHead",
    methods: {
        ...Vuex.mapActions({
            searchInfo: "search/acSearchInfo",
            goSearch: "search/acGoSearch",
        }),
        backTop(){
            this.$router.back();
        }
    }
}
</script>

<style lang="sass" scoped>
header
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 1rem
    line-height: 1rem
    background: #eee
    display: flex
    align-items: center
    a.backTop
        display: block
        width: 1rem
        height: 100%
        background: url("../../assets/common/backTop.png") no-repeat center
        background-size: .3rem
    a.more
        display: block
        text-align: center
        width: 1rem
        height: 1rem
        background: #eee
    input[type="search"]
        display: block
        width: 100%
        vertical-align: middle
        height: .6rem
        border: none
</style>