<template>
    <ul class="search-info">
        <router-link tag="li" v-for="(item,index) in infoList" :to="{name: 'detail', query: {'index': index}}" :key="index">{{item[0]}}</router-link>
    </ul>
</template>

<script>
import Vuex from "vuex"
export default {
    name: "SearchBody",
    computed: {
        ...Vuex.mapState({
            infoList: state => state.search.infoList
        })
    },
}
</script>

<style lang="sass" scoped>
    .search-info
        margin-top: 1rem
        width: 100%
        height: 5rem
        li
            padding: 0 .5rem
            box-sizing: border-box
            border-bottom: 1px solid #aaa
            height: 1rem
            line-height: 1rem
            width: 100%
            text-align: left
</style>
