<template>
	<ul class="navbar">
		<router-link v-for="(item, index) in navList" tag="li" :to="item.url" :key="index">
			<p v-html="item.icon"></p>
			<p>{{item.desc}}</p>
		</router-link>
	</ul>
</template>

<script>
export default {
	name: "AppNav",
	data: ()=>{
		return {
			navList: [
				{
					desc: "首页",
					icon: "icon",
					url: "index"
				},
				{
					desc: "发现",
					icon: "icon",
					url: "discover"
				},
				{
					desc: "我的商城",
					icon: "icon",
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
		background: rgba(102,102,102,.5)
		li
			flex: 1
			&>p
				&:first-of-type
					height: .6rem
					line-height: .6rem
				&:last-of-type
					height: .4rem
					line-height: .4rem

				

</style>