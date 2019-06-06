<template>
    <div class="search">
        <Loading v-if="lodingAnimRun"></Loading>
        <SearchHead></SearchHead>
        <SearchInfo></SearchInfo>
    </div>
</template>

<script>
// 搜索界面
import Vuex from 'vuex'
export default {
    name: "Search",
    created() {
        this.$store.dispatch("search/acSearchInfo")
    },
    computed: {
        ...Vuex.mapState({
            lodingAnimRun: state => state.search.lodingAnimRun
        })
    },
    components: {
        SearchHead: ()=>import("./SearchChildren/SearchHead"),
        SearchInfo: ()=>import("./SearchChildren/SearchInfo")
    }
}
</script>

<style lang="sass" scoped>
    .search
        width: 100%
        margin-bottom: 1rem
</style>