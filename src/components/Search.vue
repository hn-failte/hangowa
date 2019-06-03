<template>
    <div class="search">
        <SearchHead></SearchHead>
        <SearchInfo v-if="searching"></SearchInfo>
        <SearchBody v-if="searched"></SearchBody>
    </div>
</template>

<script>
import Vuex from "vuex"
export default {
    name: "Search",
    computed: {
        ...Vuex.mapState({
            recommend: state=>state.search.recommend,
            searching: state=>state.search.searching,
            searched: state=>state.search.searched
        })
    },
    components: {
        SearchHead: ()=>import("./SearchChildren/SearchHead"),
        SearchInfo: ()=>import("./SearchChildren/SearchInfo"),
        SearchBody: ()=>import("./SearchChildren/SearchBody")
    }
}
</script>

<style lang="sass" scoped>
    .search
        width: 100%
        margin-bottom: 1rem
</style>