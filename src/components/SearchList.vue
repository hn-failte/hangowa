<template>
    <div class="searchList">
        <Loading v-if="lodingAnimRun"></Loading>
        <SearchListHeader></SearchListHeader>
        <SearchListNav></SearchListNav>
        <SearchListMain v-if="hasResult"></SearchListMain>
        <SearchListNone v-else></SearchListNone>
    </div>
</template>

<script>
import Vuex from 'vuex'
export default {
    name: "SeachList",
    components: {
        SearchListHeader: ()=>import('./SearchListChildren/SearchListHeader'),
        SearchListNav: ()=>import('./SearchListChildren/SearchListNav'),
        SearchListMain: ()=>import('./SearchListChildren/SearchListMain'),
        SearchListNone: ()=>import('./SearchListChildren/SearchListNone')
    },
    created() {
        let keyword = this.$route.query.keyword
        this.$store.dispatch("search/acSearchGoods", keyword)
    },
    computed: {
        ...Vuex.mapState({
            lodingAnimRun: state => state.search.lodingAnimRun,
            hasResult: state=>state.search.hasResult
        })
    }
}
</script>

<style lang="sass" scoped>
    div.searchList
        margin-bottom: 1rem
</style>
