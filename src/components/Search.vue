<template>
    <div class="search">
        <SearchHead></SearchHead>
        <SearchInfo v-if="state.searching"></SearchInfo>
        <SearchBody v-if="state.searched"></SearchBody>
    </div>
</template>

<script>
export default {
    name: "Search",
    data(){
        return {
            state: {
                recommend: false,
                searching: false,
                searched: false
            }
        }
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