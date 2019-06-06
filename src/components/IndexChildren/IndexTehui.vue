<template>
    <div class="tehui">
        <ul>
            <li class="li1"><div>超值特惠</div></li>
            <li class="li2">
                <router-link tag="img" :to="{name:'detail',query:{data:item.data,type:item.type}}"
                    v-for="(item,index) in TehuiList" :key="index"
                    :src="item.image"></router-link>
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
    div.tehui{
        height: 3rem;
        width: 100%;
        margin: .2rem 0;
        ul{
            height: 3rem;
            margin: 0;
            .li1{
                padding-left: .2rem;
                box-sizing: border-box;
                height: 0.6rem;
                line-height: 0.6rem;
                background: #fff;
                div{
                    display: inline-block;
                    vertical-align: middle;
                    height: 0.4rem;
                    line-height: 0.4rem;
                    width: 100%;
                    text-align: left;
                    padding-left: 0.2rem;
                    border-left: red .1rem solid;
                    box-sizing: border-box;
                }
            }
            .li2{
                height: 2.4rem;
                width: 100%;
                display: flex;
                img{
                    height: 2.4rem;
                    flex: 1;
                }
            }
        }
    }
</style>
