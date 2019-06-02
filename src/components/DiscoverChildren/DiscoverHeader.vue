<template>
  <header>
    <a href="javascript: void(0)" @click="backTop" class="backTop"></a>
    <div class="discover-title">发现</div>
    <a class="more" href="javascript: void(0)" @click="moreMenuToggle"></a>
    <ul class="more-menu" v-show="moreMenuOpened">
      <li>more</li>
      <li>more</li>
      <li>more</li>
      <li>more</li>
    </ul>
  </header>
</template>

<script>
export default {
  name: "DiscoverHeader",
  data(){
    return {
      moreMenuOpened: false
    }
  },
  methods: {
    backTop(){
      this.$router.back();
    },
    moreMenuToggle(){
      this.moreMenuOpened = !this.moreMenuOpened
    }
  }
};
</script>

<style lang="sass" scoped>
header
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 1rem
    line-height: 1rem
    background: #eee
    display: flex
    a.backTop
      display: block
      width: 1rem
      height: 100%
      background: url("../../assets/discover/arrow_left_b.png") no-repeat center
      background-size: .3rem
    a.more
      display: block
      text-align: center
      width: 1rem
      height: 1rem
      background: url("../../assets/discover/more_b.png") no-repeat center
      background-size: .4rem
    .discover-title
      width: 100%
      height: 100%
    .more-menu
      position: absolute
      background: red
      z-index: 2
      top: 1rem
      right: 0
      width: 2rem
      display: flex
      flex-direction: column
      li
        width: 100%
        flex: 1
</style>