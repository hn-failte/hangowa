<template>
    <div>
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
        this.$store.dispatch("search/acSearchGoods")
    },
    computed: {
        ...Vuex.mapState({
            hasResult: state=>state.search.hasResult
        })
    }
}
</script>

<style lang="sass" scoped>

</style>
