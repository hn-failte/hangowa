<template>
    <div>
        <header>
            <ul>
                <li class="iconfont icon-home-line"></li>
                <li><img src="../../assets/home_logo.png"></li>
                <li class="li3">分类</li>
            </ul>
        </header>
        <div class="content">
            <div class="googsList" v-if="contentState">true</div>
            <div class="noGoogs" v-else>
                <div class="kong">
                    <p>购物车是空的哟，赶紧<a href="#">去逛逛</a></p>
                </div>
            </div>
        </div>
        <div class="mingxi">

        </div>
    </div>
</template>



<script>
export default {
    data(){
        return {
            contentState: false
        }
    }
}
</script>



<style lang="scss">
    div>header{
        height: 45px;
    }
    div>header>ul{
        display: flex;
    }
    div>header>ul>.icon-home-line{
        font-size: 50px;
        text-align: left;
        line-height: 45px;
    }
    div>header>ul>li{
        flex: 1;
    }
    div>header>ul>.li3{
        font-size: 18px;
        text-align: right;
        line-height: 45px;
        padding-right: 10px;
    }
    div>.content>.noGoogs{
        height: 330px;
        background-color: rgb(255, 212, 212);
        position: relative;
    }
    div>.content>.noGoogs>.kong{
        height: 40px;
        width: 100%;
        background-color: red;
        position: fixed;
        margin-top: 150px;
        font-size: 18px;
        line-height: 40px;
        background-color: rgb(224, 222, 222);
        border: 1px solid rgb(128, 127, 127);
    }
    div>.content>.noGoogs>.kong>p>a{
        font-size: 18px;
        color: blue;
    }

</style>
