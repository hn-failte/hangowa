<template>
	<ul class="navbar">
		<router-link v-for="(item, index) in navList" tag="li" :to="item.url" :key="index">
			<p class="iconfont" v-html="item.icon"></p>
			<p>{{item.desc}}</p>
		</router-link>
	</ul>
</template>

<script>
// 下方导航栏
export default {
	name: "AppNav",
	data: ()=>{
		return {
			navList: [
				{
					desc: "首页",
					icon: "&#xe72b;",
					url: "index"
				},
				{
					desc: "发现",
					icon: "&#xe643;",
					url: "discover"
				},
				{
					desc: "我的商城",
					icon: "&#xe630;",
					url: "my"
				}
			]
		}
	}
}
</script>

<style lang="sass" scoped>
.navbar
	position: fixed
	bottom: 0
	left: 0
	width: 100%
	display: flex
	height: 1rem
	background: rgba(102,102,102,.8)
	li
		flex: 1
		&>.iconfont
			font-size: .3rem
		&>p
			font-size: .3rem
			&:first-of-type
				height: .6rem
				line-height: .6rem
				color: #ccc
			&:last-of-type
				height: .4rem
				line-height: .4rem
				color: #fff
</style>