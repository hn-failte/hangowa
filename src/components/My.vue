<template>
    <div id="mall">
        <div class="mallTop">
            <div class="mallTopBg">
                <div class="trans">
                    <span class="iconfont icon-shezhi"></span>
                    <span class="iconfont icon-gengduo"></span>
                </div>
                <div class="login">
                    <router-link to="./login" class="iconfont icon-wo" tag='span'></router-link>
                    <router-link to="./login" class="loginDij" tag='span'>点击登录</router-link>
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
                        <h3>查看全部订单<span class="iconfont icon-jiantou"></span></h3>
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
                        <h3>查看全部财产<span class="iconfont icon-jiantou"></span></h3>
                    </a>
                </dt>
            </dl>
            <dl class="mainSales">
                <dt>
                    <a href="#">
                        <h2>我的分销管理</h2>
                        <span class="iconfont icon-jiantou"></span>
                    </a>
                </dt>
            </dl>
            <dl class="mainAddress">
                <dt>
                    <a href="#">
                        <h2>收货地址管理</h2>
                        <span class="iconfont icon-jiantou"></span>
                    </a>
                </dt>
            </dl>
            <dl class="mainSet">
                <dt>
                    <a href="#">
                        <h2>用户设置</h2>
                        <span class="iconfont icon-jiantou"></span>
                    </a>
                </dt>
            </dl>
        </div>
        <div class="mallBottom">
            <div class="navText">
                <a href="#">登录</a>|
                <a href="#">注册</a>|
                <a href="#">反馈</a>|
                <a href="#">返回顶部</a>
            </div>
            <div class="navPhoto">
                <dl>
                    <dt class="iconfont icon-bangzhushouji"></dt>
                    <dd>客户端</dd>
                </dl>
                <dl>
                    <dt class="iconfont icon-bangzhushouji iconCenter"></dt>
                    <dd>触屏版</dd>
                </dl>
                <dl>
                    <dt class="iconfont icon-bangzhushouji"></dt>
                    <dd>电脑版</dd>
                </dl>
            </div>
            <div class="copyRight">Copyright © 2014-2016 汉购网hangowa.com版权所有</div>
        </div>
    </div>
</template>

<script>
// import bscroll from 'better-scroll'
export default {
    data(){
        return {

        }
    },
    // beforeRouteEnter(to, from, next){
    //     console.log(to) // 要去哪
    //     console.log(from) // 从哪来
    //     alert('请登录')
    //     next('./Login')
    // }
    // beforeRouteLeave(to, from, next){
        
    // }
}
</script>

<style lang="scss" scoped>
    #mall{
        background: rgb(241, 241, 241);
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
                    border-bottom: 0.01rem solid #eee;
                    a{
                        display: flex;
                        height: 0.44rem;
                        justify-content: space-between;
                        align-items: center;
                        h2{
                            font-size: 0.34rem;
                            color: #111;
                        }
                        h3{
                            font-size: 0.25rem;
                            color: #999;
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
                            color: #888;
                        }
                        .consp{
                            color: #888;
                            font-size: 0.28rem;
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
                    border-bottom: 0.01rem solid rgb(230, 230, 230);
                    a{
                        display: flex;
                        height: 0.44rem;
                        justify-content: space-between;
                        align-items: center;
                        h2{
                            font-size: 0.34rem;
                            color: #111;
                        }
                        h3{
                            font-size: 0.25rem;
                            color: #999;
                        }
                    }
                }
            }
            .mainSales{
                height: 0.88rem;
                margin-top: 0.22rem;
                background: white;
                border-bottom: 0.01rem solid rgb(230, 230, 230); 
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
                            color: #111;
                        }
                        h3{
                            font-size: 0.25rem;
                            color: white;
                        }
                    }
                }
            }
            .mainAddress{
                height: 0.88rem;
                border-bottom: 0.01rem solid rgb(230, 230, 230); 
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
                            color: #111;
                        }
                        h3{
                            font-size: 0.25rem;
                            color: white;
                        }
                    }
                }
            }
            .mainSet{
                height: 0.88rem;
                border-bottom: 0.01rem solid rgb(230, 230, 230); 
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
                            color: #111;
                        }
                        h3{
                            font-size: 0.25rem;
                            color: white;
                        }
                    }
                }
            }
        }
        .mallBottom{
            // height: 2.83rem;
            height: 4.0rem;
            // background: pink;
            .navText{
                padding: 0.26rem;
                background: white;
                display: flex;
                justify-content: space-around;
                height: 0.4rem;
                a{
                    color: #111;
                    font-size: 0.24rem;
                }
            }
            .navPhoto{
                background: white;
                padding: 0.13rem 0.88rem;
                height: 1rem;
                display: flex;
                justify-content: space-between;
                border-top: 0.01rem solid rgb(230, 230, 230);
                border-bottom: 0.01rem solid rgb(230, 230, 230);
                dl{
                    width: 1.70rem;
                    .iconCenter{
                        color: #555;
                    }
                    dt{
                        font-size: 0.6rem;
                        color: #999;
                    }
                    dd{
                        font-size: 0.23rem;
                        color: #999;
                    }
                }
            }
            .copyRight{
                background: white;
                font-size: 0.23rem;
                padding: 0.29rem 0;
                color: #555;
                height: 0.4rem;
            }
        }
    }
</style>
