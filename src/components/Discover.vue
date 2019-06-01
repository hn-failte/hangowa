<template>
    <div>
        <header></header>
    </div>
</template>

<script>
import discover from "@api/discover.js"

export default {
    name: "Discover",
    created(){
        async function acDiscoverData(){
            let data = await discover.discoverData()
            console.log(data)
        }
        acDiscoverData()
    }
}
</script>

<style lang="sass" scoped>

</style>
