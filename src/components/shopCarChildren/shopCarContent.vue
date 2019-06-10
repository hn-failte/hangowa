<template>
    <div>
        <div class="content">
            <div class="googsList" v-if="contentState" >
                <dl>
                    <dt>
                        <input type="checkbox" checked="allSelected" @change="handleToggle()">
                        <span class="iconfont icon-shangcheng">&nbsp;&nbsp;&nbsp;荆门众邦特色馆</span>
                    </dt>
                    <dd v-for="(item,index) in goodsList" :key="index">
                        <ul>
                            <li class="li1"><input type="checkbox" :checked="item.flag" @change="handleGoodsToggle(index)"></li>
                            <li class="li2"><img src="../../assets/10_06124375466059094_240 (1).jpg"></li>
                            <li class="li3">
                                <ul>
                                    <li class="liA"><span>{{item.name}}</span><a class="iconfont">&#xe65d;</a></li>
                                    <li class="liB">
                                        <span>{{item.price}}</span>
                                        <div class="num">
                                            <button>-</button>
                                            <button>22</button>
                                            <button>+</button>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </dd>

                </dl>
            </div>
            <div class="noGoogs" v-else>
                <div class="kong">
                    <p>购物车是空的哟，赶紧<a href="#">去逛逛</a></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import Vuex from "vuex";


    export default {
        data(){
            return {
                contentState: true
            }
        },
        name:"shopCarContent",
        computed: {
            ...Vuex.mapState({
                goodsList:state=>state.car.goodsList,
                allSelected:state=>state.car.allSelected
            }),
        },
        methods:{
            ...Vuex.mapMutations({
                handleToggle:"car/handleToggle",
                handleGoodsToggle:"car/handleGoodsToggle"
            })
        }
    }
</script>


<style lang="scss" scoped>
    div>.content>.noGoogs{
        height: 7rem;
        position: relative;
    }
    div>.content>.noGoogs>.kong{
        height: 0.8rem;
        width: 100%;
        background-color: red;
        position: fixed;
        margin-top: 3rem;
        font-size: 0.35rem;
        line-height: 0.8rem;
        background-color: rgb(224, 222, 222);
        border: 1px solid rgb(128, 127, 127);
    }
    div>.content>.noGoogs>.kong>p>a{
        font-size: 0.35rem;
        color: blue;
    }


    div>.content>.googsList>dl>dt{
        text-align: left;
        line-height: 0.8rem;
        height: 0.8rem;
        border-top: 1px solid rgb(216, 214, 214);
        background-color: white;
        &>input{
            margin:0 0.2rem;
            vertical-align: middle;
            width: 0.3rem;
            height: 0.3rem;
        }
        &>span{
            font-size: 0.25rem;
            vertical-align: middle;
        }
    }

    div>.content>.googsList>dl>dd{
        border-top: 1px solid rgb(216, 214, 214);
        background-color: white;
        &>ul{
            height: 1.7rem;
            display: flex;
            &>.li1{
                text-align: left;
                padding: 0 0.3rem;
                height: 1.7rem;
                line-height: 1.7rem;
                &>input{
                    width: 0.3rem;
                    height: 0.3rem;
                    vertical-align: middle;
                }
            }
            &>.li2{
                margin-top: 0.25rem;
                width: 1.3rem;
                height: 1.2rem;
                text-align: left;
                border: 1px solid rgb(216, 214, 214);
                align-items: center;
                &>img{
                    width: 1.3rem;
                    height: 1.2rem;
                    align-items: center;
                }
            }
            &>.li3>ul{
                width: 5rem;
                &>.liA{
                    height: 0.85rem;
                    display: flex;
                    position: relative;
                    &>span{
                        text-align: left;
                        padding: 0.2rem;
                    }
                    &>a{
                        font-size: 0.4rem;
                        position: absolute;
                        left: 4.5rem;
                        top: .2rem;
                    }
                }
                &>.liB{
                    height: 0.85rem;
                    line-height: 0.85rem;
                    display: flex;
                    &>span{
                        flex: 1;
                        text-align: left;
                        margin-left: .3rem;
                    }
                    &>.num{
                        flex: 1;
                        text-align: right;
                        &>button{
                            width: 0.5rem;
                            height: 0.5rem;
                            vertical-align: middle;
                            font-size: 0.25rem;
                        }
                        
                    }
                }
            }
        }
    }
    
</style>