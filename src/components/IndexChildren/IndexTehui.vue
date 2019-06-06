<template>
    <div>
        <ul>
            <li class="li1"><div>超值特惠</div></li>
            <li class="li2">
                <router-link tag="img" :to="{name:'detail',query:{data:item.data,type:item.type}}"
                    v-for="(item,index) in TehuiList" :key="index"
                    v-lazy="item.image"></router-link>
            </li>
        </ul>
    </div>
</template>


<script>
import Vuex from "vuex";
export default {
    name:"IndexTehui",
    computed: {
        ...Vuex.mapState({
            TehuiList: state=>state.index.TehuiList
        }),
    }
}
</script>


<style lang="scss" scoped>
    div{
        height: 2.7rem;
        width: 100%;
        margin-top: 0.18rem;
    }
    div>ul>.li1>div{
        height: 0.4rem;
        line-height: 0.4rem;
        width: 100%;
        text-align: left;
        margin-left: 0.2rem;
        border-left: red 3px solid;
    }
    div>ul>.li2{
        width: 100%;
    }
    div>ul>.li2>img{
        width: 33%;
    }
</style>
