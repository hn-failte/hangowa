<template>
    <div>
        <header>
            <ul>
                <li class="iconfont icon-home-line"></li>
                <li><img src="../../assets/home_logo.png"></li>
                <li class="li3">分类</li>
            </ul>
        </header>
    </div>
</template>



<script>
    export default {

    }
</script>



<style lang="scss" scoped>
    div>header{
        height: 1rem;
        line-height: 1rem;
        &>ul>li>img{
            height: 1rem
        }
    }
    div>header>ul{
        display: flex;
    }
    div>header>ul>.icon-home-line{
        font-size: 1rem;
        text-align: left;
    }
    div>header>ul>li{
        flex: 1;
    }
    div>header>ul>.li3{
        font-size: 0.4rem;
        text-align: right;
        padding-right: 0.3rem;
    }
    

</style>
