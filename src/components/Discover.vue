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
import discover from "@api/discover.js";
import Swiper from "swiper/dist/js/swiper.esm.bundle";
export default {
  name: "Discover",
  created() {
    // async function acDiscoverData(){
    //     let data = await discover.discoverData()
    //     console.log(data)
    // }
    // acDiscoverData()
  },
  components: { //子组件懒加载
      DiscoverHeader: ()=>import("@components/DiscoverChildren/DiscoverHeader"),
      DiscoverSwiper: ()=>import("@components/DiscoverChildren/DiscoverSwiper"),
      DiscoverBanner: ()=>import("@components/DiscoverChildren/DiscoverBanner"),
      DiscoverMain: ()=>import("@components/DiscoverChildren/DiscoverMain"),
      DiscoverGlobal: ()=>import("@components/DiscoverChildren/DiscoverGlobal"),
      DiscoverFooter: ()=>import("@components/DiscoverChildren/DiscoverFooter")
  }
};
</script>

<style lang="sass" scoped>
</style>