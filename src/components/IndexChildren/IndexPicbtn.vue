<template>
    <div class="picbtn">
        <ul>
            <li><span class="iconfont icon-shangcheng"></span><p>我的商城</p></li>
            <router-link tag="li" to="/shopCar"><span class="iconfont icon-gouwuche"></span><p>购物车</p></router-link>
            <li><span class="iconfont icon-wo"></span><p>每日签到</p></li>
        </ul>
    </div>
</template>


<script>
export default {
    name: "IndexPicbtn"
}
</script>


<style lang="scss" scoped>
    .picbtn{
        height: 2rem;
        width: 100%;
    }
    .picbtn>ul{
        height: 2rem;
        width: 100%;
        display: flex;
    }
    .picbtn>ul>li{
        flex: 1;
        margin-top: .4rem;
        width: 1rem;
        height: 1rem;
    }
    .picbtn>ul>li>span{
        font-size: 0.6rem;
        display: inline-block;
        border-radius: 50%;
        width: 1rem;
        height: 1rem;
        line-height: 1rem;
    }
    .picbtn>ul>li>.icon-shangcheng{
        background-color: rgb(241, 174, 149);
    }
    .picbtn>ul>li>.icon-gouwuche{
        background-color: rgb(176, 176, 250);
    }
    .picbtn>ul>li>.icon-wo{
        background-color: rgb(194, 250, 194);
    }
    .picbtn>ul>li>p{
        font-size: 0.3rem;
        margin-top: 0.1rem;
    }
</style>
