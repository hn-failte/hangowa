<template>
    <div id="hgLogin">
        <div class="loginHeader">
            <span class="iconfont icon-home-line"></span>
            <span class="hgLog">登录</span>
            <router-link to='./Register' class="hgReg" tag='span'>注册</router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    #hgLogin{
        .loginHeader{
            height: 0.86rem;
            background: rgb(241, 241, 241);
            display: flex;
            padding: 0 0.3rem;
            justify-content: space-between;
            align-items: center;
            .iconfont{
                font-size: 0.4rem;
            }
            .hgLog{
                font-size: 0.35rem;
                color: #111;
            }
            .hgReg{
                font-size: 0.3rem;
                color: red;
            }
        }
    }
</style>

