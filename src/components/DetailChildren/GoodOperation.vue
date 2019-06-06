<template>
    <ul class="operation">
        <li class="service">
            <a href="javascript: void(0)">
                <em class="iconfont">&#xe63f;</em>
                <em>客服</em>
            </a>
            <a href="javascript: void(0)">
                <em class="iconfont">&#xe643;</em>
                <em>购物车</em>
            </a>
        </li>
        <li class="shopping">
            <a href="javascript: void(0)">立即购买</a>
            <a href="javascript: void(0)">加入购物车</a>
        </li>
    </ul>
</template>

<script>
export default {
    name: "GoodOperation",
}
</script>


<style lang="sass" scoped>

ul.operation
    width: 100%
    position: fixed
    bottom: 0
    left: 0
    background: #fff
    height: 1rem
    line-height: 1rem
    display: flex
    border-top: 1px solid #ddd
    box-sizing: border-box
    li.service
        width: 32%
        display: flex
        a
            flex: 1
            display: flex
            flex-wrap: wrap
            border-right: 1px solid #ddd
            box-sizing: border-box
            em
                display: block
                width: 100%
                height: .4rem
                line-height: .4rem
                font-size: .25rem
                &.iconfont
                    height: .6rem
                    line-height: .6rem
                    font-size: .4rem
    li.shopping
        width: 68%
        display: flex
        a
            flex: 1
            display: flex
            flex-wrap: wrap
            display: block
            height: 1rem
            line-height: 1rem
            color: #fff
            font-weight: bold
            font-size: .3rem
            &:first-of-type
                background: #ed5564
            &:last-of-type
                background: #fb6e52
</style>