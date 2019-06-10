<template>
    <div>
        <ul>
            <li class="li1"><input type="checkbox" checked="allSelected"></li>
            <li class="li2">合计总金额：<span>￥400.50</span></li>
            <li class="li3"><button>确认信息</button></li>
        </ul>
    </div>
</template>



<script>
    import Vuex from "vuex";
    export default {
        name:"shopCarFooter",
        computed: {
            ...Vuex.mapState({
                allSelected:state=>state.car.allSelected
            }),
        },
    }
</script>


<style lang="scss" scoped>
    div{
        height: 0.9rem;
        line-height: 0.9rem;
    }
    div>ul{
        display: flex;
    }
    div>ul>li{
        flex: 1;
    }
    div>ul>li>input{
        width: 0.3rem;
        height: 0.3rem;
        border: 0;
        background-color: rgb(243, 50, 50);
    }
    div>ul>.li1{
        text-align: left;
        margin-left: 0.2rem;
    }
    div>ul>.li2{
        font-size: 0.2rem;
        &>span{
            font-size: 0.29rem;
            color: red;
        }
    }
    div>ul>.li3{
        text-align: right;
    }
    div>ul>.li3>button{
        height: 0.9rem;
        width: 1.7rem;
        background-color: red;
        border: 0;
        color: white;
        font-size: 0.3rem;
    }
</style>