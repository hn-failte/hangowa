<template>
    <div class="search">
        <SearchHead></SearchHead>
        <SearchInfo v-if="searching"></SearchInfo>
    </div>
</template>

<script>
// 搜索界面
import Vuex from "vuex"
export default {
    name: "Search",
    computed: {
        ...Vuex.mapState({
            recommend: state=>state.search.recommend,
            searching: state=>state.search.searching
        })
    },
    components: {
        SearchHead: ()=>import("./SearchChildren/SearchHead"),
        SearchInfo: ()=>import("./SearchChildren/SearchInfo")
    },
    beforeDestroy() {
        this.$store.state.search.recommend = true;
        this.$store.state.search.searching = false
    },
}
</script>

<style lang="sass" scoped>
    .search
        width: 100%
        margin-bottom: 1rem
</style>