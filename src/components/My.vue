<template>
    <div id="mall">
        <div class="mallTop">
            <div class="mallTopBg">
                <div class="trans">
                    <span class="iconfont icon-gouwuche"></span>
                    <span class="iconfont icon-gengduo"></span>
                </div>
                <div class="login">
                    <span class="iconfont icon-wo"></span>
                    <span class="loginDij">点击登录</span>
                </div>
                <div class="collection">
                    <li>
                        <span class="iconfont icon-aixin"></span>
                        <i>商品收藏</i>
                    </li>
                    <li>
                        <span class="iconfont icon-shangcheng"></span>
                        <i>店铺收藏</i>
                    </li>
                    <li>
                        <span class="iconfont icon-zuji"></span>
                        <i>我的足迹</i>
                    </li>
                </div>
            </div>
        </div>
        <div class="mallMain">
            <dl class="mainOrde">
                <dt>
                    <a href="#">
                        <h2>我的订单</h2>
                        <h3>查看全部订单</h3>
                    </a>
                </dt>
                <dd>
                    <li>
                        <span class="iconfont icon-qianbao"></span>
                        <span class="consp">待付款</span>
                    </li>
                    <li>
                        <span class="iconfont icon-gouwuche"></span>
                        <span class="consp">待收货</span>
                    </li>
                    <li>
                        <span class="iconfont icon-che"></span>
                        <span class="consp">待自提</span>
                    </li>
                    <li>
                        <span class="iconfont icon-pingjia"></span>
                        <span class="consp">待评价</span>
                    </li>
                    <li>
                        <span class="iconfont icon-qian"></span>
                        <span class="consp">退款/退货</span>
                    </li>
                </dd> 
            </dl>
            <dl class="mainMoney">
                <dt>
                    <a href="#">
                        <h2>我的财产</h2>
                        <h3>查看全部财产</h3>
                    </a>
                </dt>
            </dl>
            <dl class="mainSales">
                <dt>
                    <a href="#">
                        <h2>我的财产</h2>
                        <h3>查看全部财产</h3>
                    </a>
                </dt>
            </dl>
            <dl class="mainAddress">
                <dt>
                    <a href="#">
                        <h2>我的财产</h2>
                        <h3>查看全部财产</h3>
                    </a>
                </dt>
            </dl>
            <dl class="mainSet">
                <dt>
                    <a href="#">
                        <h2>我的财产</h2>
                        <h3>查看全部财产</h3>
                    </a>
                </dt>
            </dl>
        </div>
        <div class="mallBottom"></div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    #mall{
        background: rgb(238, 237, 237);
        .mallTop{
            height: 4.84rem;
            background: rgb(99, 176, 235);
            .mallTopBg{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                width: 100%;
                height: 100%;
                background: url(../assets/mall/mallbg.png);
                .trans{
                    height: 0.86rem;
                    display: flex;
                    justify-content: space-between;
                    .iconfont{
                        width: 0.86rem;
                        height: 0.86rem;
                        line-height: 0.86rem;
                        font-size: 0.5rem;
                        color: white;
                    }
                    
                }
                .login{
                    height: 2.20rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    align-items: center;
                    .iconfont{
                        width: 1.7rem;
                        height: 1.7rem;
                        background: rgba(0, 0, 0, 0.4);
                        font-size: 1.4rem;
                        border-radius: 50%;
                        color: white;
                    }
                    .loginDij{
                        color: white;
                        font-size: 0.35rem;
                    }
                }
                .collection{
                    height: 1.32rem;
                    background: rgba(0, 0, 0, 0.2);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    li{
                        height: 0.88rem;
                        width: 2.48rem;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-around;
                        .iconfont{
                            font-size: 0.43rem;
                            color: white;
                        }
                        i{
                            font-size: 0.28rem;
                            color: white;
                        }
                    }
                }
            }
        }
        .mallMain{
            height: 6.51rem;
            margin: 0.2rem 0;
            .mainOrde{
                background: white;
                height: 2.3rem;
                
                dt{
                    height: 0.44rem;
                    margin-left: 0.22rem;
                    padding: 0.22rem 0.3rem 0.22rem 0;
                    border-bottom: 0.01rem solid black;
                    a{
                        display: flex;
                        height: 0.44rem;
                        justify-content: space-between;
                        align-items: center;
                        h2{
                            font-size: 0.34rem;
                        }
                        h3{
                            font-size: 0.25rem;
                        }
                    }
                }
                dd{
                    display: flex;
                    justify-content: space-around;
                    margin-top: 0.2rem;
                    li{
                        display: flex;
                        flex-direction: column;
                        .iconfont{
                            font-size: 0.5rem;
                        }
                        .consp{
                            font-size: 0.3rem;
                        }
                    }
                }
            }
            .mainMoney{
                height: 1.08rem;
                background: white;
                margin-top: 0.22rem;
                dt{
                    height: 0.44rem;
                    margin-left: 0.22rem;
                    padding: 0.22rem 0.3rem 0.22rem 0;
                    border-bottom: 0.01rem solid black;
                    a{
                        display: flex;
                        height: 0.44rem;
                        justify-content: space-between;
                        align-items: center;
                        h2{
                            font-size: 0.34rem;
                        }
                        h3{
                            font-size: 0.25rem;
                        }
                    }
                }
            }
            .mainSales{
                height: 0.88rem;
                margin-top: 0.22rem;
                background: white;
                border-bottom: 0.01rem solid black; 
                dt{
                    height: 0.44rem;
                    margin-left: 0.22rem;
                    padding: 0.22rem 0.3rem 0.22rem 0;
                    a{
                        display: flex;
                        height: 0.44rem;
                        justify-content: space-between;
                        align-items: center;
                        h2{
                            font-size: 0.34rem;
                        }
                        h3{
                            font-size: 0.25rem;
                        }
                    }
                }
            }
            .mainAddress{
                height: 0.88rem;
                border-bottom: 0.01rem solid black; 
                background: white;
                dt{
                    height: 0.44rem;
                    margin-left: 0.22rem;
                    padding: 0.22rem 0.3rem 0.22rem 0;
                    a{
                        display: flex;
                        height: 0.44rem;
                        justify-content: space-between;
                        align-items: center;
                        h2{
                            font-size: 0.34rem;
                        }
                        h3{
                            font-size: 0.25rem;
                        }
                    }
                }
            }
            .mainSet{
                height: 0.88rem;
                border-bottom: 0.01rem solid black; 
                background: white;
                dt{
                    height: 0.44rem;
                    margin-left: 0.22rem;
                    padding: 0.22rem 0.3rem 0.22rem 0;
                    a{
                        display: flex;
                        height: 0.44rem;
                        justify-content: space-between;
                        align-items: center;
                        h2{
                            font-size: 0.34rem;
                        }
                        h3{
                            font-size: 0.25rem;
                        }
                    }
                }
            }
        }
        .mallBottom{
            height: 2.83rem;
            background: pink;
        }
    }
</style>
