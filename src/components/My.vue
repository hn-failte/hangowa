<template>
    <div id="mall">
        <div class="mallTop">
            <div class="mallTopBg">
                <div class="trans">
                    <span>设置</span>
                    <span>更多</span>
                </div>
                <div class="login"></div>
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
        <div class="mallMain"></div>
        <div class="mallBottom"></div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    #mall{
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
                    background: pink;
                    display: flex;
                    justify-content: space-between;
                    span{
                        width: 0.86rem;
                        height: 0.86rem;
                        line-height: 0.86rem;
                    }
                }
                .login{
                    height: 2.20rem;
                    background: red;
                }
                .collection{
                    height: 1.32rem;
                    background: rgba(0, 0, 0, 0.3);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    li{
                        height: 0.88rem;
                        width: 2.48rem;
                        background: pink;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-around;
                    }
                }
            }
        }
        .mallMain{
            height: 6.51rem;
            background: orange;
        }
        .mallBottom{
            height: 2.83rem;
            background: pink;
        }
    }
</style>
