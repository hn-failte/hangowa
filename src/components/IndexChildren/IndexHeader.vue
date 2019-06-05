<template>
        <header>
            <ul>
                <li class="li1"><img src="../../assets/home_logo.png"></li>
                <li class="iconfont li2">
                    <router-link tag="input" to="/search" type="text" class="text"></router-link>
                    <span class="iconfont fdj">&#xe611;</span>
                </li>
                <router-link tag="li" to="/shopCar" class="iconfont li3">&#xe643;</router-link>
            </ul>
        </header>
</template>

<script>
export default {
    name: "IndexHeader"
}
</script>

<style lang="scss" scoped>
    header{
        // position: fixed;
        top: 0;
        width: 100%;
        height: 1rem;
        line-height: 1rem;
        z-index: 3;
    }
    header>ul{
        display: flex;
        position: fixed;
        width: 100%;
        height: 1rem;
        background-color: white;
        justify-content: space-between;
        .li1{
            height: 1rem;
            width: 30%;
            line-height: 1rem;
            margin-left: 0.1rem;
            img{
                width: 100%;
                height: .8rem;
                vertical-align: middle;
            }
        }
        .li2{
            position: relative;
            width: 50%;
            height: 1rem;
            background: transparent;
            .text{
                width: 100%;
                height: .6rem;
                box-sizing: border-box;
                margin: 0 .2rem;
                border-radius: 20px;
                border: 1px rgb(218, 214, 214) solid;
                background: transparent;
            }
        }
        .li3{
            height: 1rem;
            line-height: 1rem;
            font-size: .5rem;
            padding-right: .2rem
        }
        .fdj{
            position: absolute;
            z-index: -5;
            top: 2.5px;
            right: 0;
            font-size: .4rem;
        }
    }
</style>