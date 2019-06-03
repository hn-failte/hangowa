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
    
}
</script>


<style lang="scss">
    .picbtn{
        height: 120px;
    }
    .picbtn>ul{
        display: flex;
    }
    .picbtn>ul>li{
        flex: 1;
        margin-top: 20px;
    }
    .picbtn>ul>li>span{
        font-size: 40px;
        display: inline-block;
        padding: 8px;
        border-radius: 50%;
        width: 40px;
        height: 40px;
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
        margin-top: 10px;
        font-size: 14px;
    }
</style>
