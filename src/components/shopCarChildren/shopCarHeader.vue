<template>
    <div>
        <header>
            <ul>
                <router-link tag="li" to="/index" class="iconfont icon-home-line"></router-link>
                <li><span>购物车</span></li>
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
        &>ul>li>span{
            line-height: 1rem;
            font-size: 0.4rem;
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
        font-size: 0.3rem;
        text-align: right;
        padding-right: 0.3rem;
    }
    

</style>
