<template>
  <div>
    <DiscoverHeader></DiscoverHeader>
    <DiscoverSwiper></DiscoverSwiper>
    <DiscoverBanner></DiscoverBanner>
    <DiscoverMain></DiscoverMain>
    <DiscoverGlobal></DiscoverGlobal>
    <DiscoverFooter></DiscoverFooter>
  </div>
</template>

<script>
// 发现界面
import Vuex from 'vuex'
export default {
  name: "Discover",
  created() {
    this.$store.dispatch("discover/acGetLists")
  },
  components: { //子组件懒加载
      DiscoverHeader: ()=>import("@components/DiscoverChildren/DiscoverHeader"),
      DiscoverSwiper: ()=>import("@components/DiscoverChildren/DiscoverSwiper"),
      DiscoverBanner: ()=>import("@components/DiscoverChildren/DiscoverBanner"),
      DiscoverMain: ()=>import("@components/DiscoverChildren/DiscoverMain"),
      DiscoverGlobal: ()=>import("@components/DiscoverChildren/DiscoverGlobal"),
      DiscoverFooter: ()=>import("@components/DiscoverChildren/DiscoverFooter")
  },
  methods: {
    ...Vuex.mapActions({
      getLists: "discover/acGetLists"
    }),
    ...Vuex.mapMutations({
      //
    })
  },
};
</script>

<style lang="sass" scoped>
div
  position: relative
  z-index: -5
</style>