<template>
    <aside>
        <div class="imgWrapper">
            <img src="@assets/common/search.png">
        </div>
        <p>没有找到任何相关信息</p>
        <p>选择或搜索其它商品分类/名称...</p>
        <a href="javascript:void(0)" @click="backTop">重新选择</a>
    </aside>
</template>

<script>
export default {
    name: "SearchListNone",
    methods: {
        backTop(){
            this.$router.back();
        }
    }
}
</script>


<style lang="sass" scoped>
aside
    position: fixed
    top: 0
    bottom: 0
    left: 0
    right: 0
    margin: auto
    width: 4rem
    height: 4rem
    div.imgWrapper
        margin: 0 auto
        height: 2rem
        width: 2rem
        padding: .4rem
        box-sizing: border-box
        background: #ccc
        border-radius: 50%
        img
            height: 1.2rem
    p
        &:first-of-type
            height: .6rem
            line-height: .6rem
            font-size: .3rem
            color: #000
            font-weight: 600
        &:last-of-type
            height: .6rem
            line-height: .6rem
            font-size: .25rem
            color: #999
    a
        display: block
        height: .8rem
        line-height: .6rem
        width: 2rem
        margin: 0 auto
        padding: .1rem
        border-radius: .1rem
        border: 1px solid #666
        box-sizing: border-box
</style>
