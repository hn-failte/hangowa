<template>
  <div id="app">
    <router-view></router-view>
    <AppNav v-show="$route.meta.showAppNav"></AppNav>
  </div>
</template>

<script>
import AppNav from "./components/AppNav"

export default {
	components: {
		AppNav
	}
}

</script>

<style lang="scss">
html,body{
  position: relative;
  z-index: -12;
  background: #eee
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  z-index: -10;
}
</style>
