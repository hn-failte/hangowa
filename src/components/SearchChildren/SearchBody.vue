<template>
    <main>
        <nav>
            排序
        </nav>
        <ul class="search-body">
            <li>
                <img src="../../assets/discover/main-shopping-1.jpg">
                <div>
                    <p class="content-title">午憩宝折叠躺椅午休午睡床靠背靠椅子懒人沙发滩家用休闲便携阳台</p>
                    <p class="content-price">
                        <span class="new-price">￥99</span>
                        <span class="old-price">￥108</span>
                    </p>
                    <p class="content-info">免运费</p>
                </div>
            </li>
            <li>
                <img src="../../assets/discover/main-shopping-1.jpg">
                <div>
                    <p class="content-title">午憩宝折叠躺椅午休午睡床靠背靠椅子懒人沙发滩家用休闲便携阳台</p>
                    <p class="content-price">
                        <span class="new-price">￥99</span>
                        <span class="old-price">￥108</span>
                    </p>
                    <p class="content-info">免运费</p>
                </div>
            </li>
            <li>
                <img src="../../assets/discover/main-shopping-1.jpg">
                <div>
                    <p class="content-title">午憩宝折叠躺椅午休午睡床靠背靠椅子懒人沙发滩家用休闲便携阳台</p>
                    <p class="content-price">
                        <span class="new-price">￥99</span>
                        <span class="old-price">￥108</span>
                    </p>
                    <p class="content-info">免运费</p>
                </div>
            </li>
            <li>
                <img src="../../assets/discover/main-shopping-1.jpg">
                <div>
                    <p class="content-title">午憩宝折叠躺椅午休午睡床靠背靠椅子懒人沙发滩家用休闲便携阳台</p>
                    <p class="content-price">
                        <span class="new-price">￥99</span>
                        <span class="old-price">￥108</span>
                    </p>
                    <p class="content-info">免运费</p>
                </div>
            </li>
            <li>
                <img src="../../assets/discover/main-shopping-1.jpg">
                <div>
                    <p class="content-title">午憩宝折叠躺椅午休午睡床靠背靠椅子懒人沙发滩家用休闲便携阳台</p>
                    <p class="content-price">
                        <span class="new-price">￥99</span>
                        <span class="old-price">￥108</span>
                    </p>
                    <p class="content-info">免运费</p>
                </div>
            </li>
            <li>
                <img src="../../assets/discover/main-shopping-1.jpg">
                <div>
                    <p class="content-title">午憩宝折叠躺椅午休午睡床靠背靠椅子懒人沙发滩家用休闲便携阳台</p>
                    <p class="content-price">
                        <span class="new-price">￥99</span>
                        <span class="old-price">￥108</span>
                    </p>
                    <p class="content-info">免运费</p>
                </div>
            </li>
        </ul>
    </main>
</template>

<script>
export default {
    name: "SearchBody"
}
</script>

<style lang="sass" scoped>
main
    margin-top: 1rem
    width: 100%
    nav
        height: .6rem
        line-height: .6rem
    .search-body
        width: 100%
        li
            padding: .3rem
            box-sizing: border-box
            border-bottom: 1px solid #aaa
            width: 100%
            height: 2.6rem
            background: #ccc
            display: flex
            img
                display: block
                width: 2rem
                height: 2rem
            p.content-title
                height: .8rem
                line-height: .4rem
                font-size: .3rem
                text-align: left
                padding: 0 .2rem
                box-sizing: border-box
                text-overflow: ellipsis
                overflow: hidden
            p.content-price
                height: .8rem
                line-height: .8rem
                text-align: left
                padding: 0 .2rem
                box-sizing: border-box
                .new-price
                    color: red
                    font-size: .3rem
                .old-price
                    color: gray
                    font-size: .25rem
                    text-decoration: line-through
            p.content-info
                height: .4rem
                line-height: .4rem
                text-align: left
                padding: 0 .2rem
                color: gray
</style>
