<template>
    <div>
        <div class="content">
            <div class="googsList" v-if="contentState">
                <dl>
                    <dt>
                        <input type="checkbox">
                        <span class="iconfont icon-shangcheng">&nbsp;&nbsp;&nbsp;荆门众邦特色馆</span>
                    </dt>
                    <dd>
                        <ul>
                            <li class="li1"><input type="checkbox"></li>
                            <li class="li2"><img src="../../assets/10_06124375466059094_240 (1).jpg"></li>
                            <li class="li3">
                                <ul>
                                    <li class="liA"><span>攀枝花新鲜大贵妃芒紫芒果 新鲜当季青水果带箱5斤爱文吉禄包邮</span><a class="iconfont">&#xe65d;</a></li>
                                    <li class="liB">
                                        <span>￥32.80</span>
                                        <div class="num">
                                            <button>-</button>
                                            <input type="text">
                                            <button>+</button>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </dd>


                    <dd>
                        <ul>
                            <li class="li1"><input type="checkbox"></li>
                            <li class="li2"><img src="../../assets/10_06124375466059094_240 (1).jpg"></li>
                            <li class="li3">
                                <ul>
                                    <li class="liA"><span>攀枝花新鲜大贵妃芒紫芒果 新鲜当季青水果带箱5斤爱文吉禄包邮</span><a class="iconfont">&#xe65d;</a></li>
                                    <li class="liB">
                                        <span>￥32.80</span>
                                        <div class="num">
                                            <button>-</button>
                                            <input type="text">
                                            <button>+</button>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </dd>


                    <dd>
                        <ul>
                            <li class="li1"><input type="checkbox"></li>
                            <li class="li2"><img src="../../assets/10_06124375466059094_240 (1).jpg"></li>
                            <li class="li3">
                                <ul>
                                    <li class="liA"><span>攀枝花新鲜大贵妃芒紫芒果 新鲜当季青水果带箱5斤爱文吉禄包邮</span><a class="iconfont">&#xe65d;</a></li>
                                    <li class="liB">
                                        <span>￥32.80</span>
                                        <div class="num">
                                            <button>-</button>
                                            <input type="text">
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
    export default {
        data(){
            return {
                contentState: true
            }
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
        border-top: 1px solid rgb(216, 214, 214);
        background-color: white;
        &>input{
            margin:0 0.2rem;
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
                line-height: 1.7rem;
                margin: 0 0.3rem;
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
                &>.liA{
                    height: 0.85rem;
                    display: flex;
                    &>span{
                        text-align: left;
                        padding: 0.2rem;
                    }
                    &>a{
                        text-align: right;
                        padding: 0.3rem;
                    }
                }
                &>.liB{
                    display: flex;
                    &>span{
                        flex: 1;
                        text-align: left;
                        margin: 0.2rem;
                    }
                    &>.num{
                        flex: 1;
                        text-align: right;
                        margin: 0.2rem;
                        height: 0.22rem;
                        &>input{
                            width: 0.2rem;
                            height: 100%;
                            border-top: 0.1px black solid;
                            border-bottom: 0.1px black solid;
                        }
                    }
                }
            }
        }
    }
    
</style>