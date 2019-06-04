<template>
        <header>
            <ul>
                <li class="li1"><img src="../../assets/home_logo.png"></li>
                <li class="iconfont li2"><router-link tag="input" to="/search" type="text" class="text"></router-link></li>
                <li class="iconfont li3">&#xe643;</li>
                <li class="iconfont fdj">&#xe611;</li>
            </ul>
        </header>
</template>

<script>
export default {
    name: "IndexHeader"
}
</script>

<style lang="scss" scoped>
    div>header{
        // position: fixed;
        top: 0;
        width: 100%;
        height: 62px;
        z-index: 3;
    }
    div>header>ul{
        display: flex;
        position: fixed;
        width: 100%;
        background-color: white;
    }
    div>header>ul>.li1{
        margin: 10px 20px 0 10px;
    }
    div>header>ul>.li2>.text{
        width: 150px;
        height: 33px;
        border-radius: 20px;
        border: 1px rgb(218, 214, 214) solid;
        margin: 15px 20px 0 0;
    }
    div>header>ul>.li3{
        margin: 15px 10px 0 0;
        font-size: 30px;
    }
    div>header>ul>.fdj{
        position: absolute;
        top: 21px;
        left: 270px;
        font-size: 23px;
    }   
</style>