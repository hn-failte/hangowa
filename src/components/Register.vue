<template>
    <div id="hgLogin">
        <div class="loginHeader">
            <span class="iconfont icon-home-line"></span>
            <span class="hgLog">注册</span>
            <router-link to='./Login' class="hgReg" tag='span'>登录</router-link>
        </div>
        <div class="logInput">
            <div class="tex">
                <label for="">用户名:</label>
                <input type="text">
            </div>
            <div class="pwd">
                <label for="">密 &nbsp; 码:</label>
                <input type="password">
            </div>
            <div class="pwds">
                <label for="">确认密码:</label>
                <input type="password">
            </div>
            <div class="denl">注册</div>
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
        .logInput{
            height: 5rem;
            background: pink;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            margin-top: 0.4rem;
            .tex{
                width: 5.5rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                label{
                    font-size: 0.3rem;
                }
            }
            .pwd{
                width: 5.5rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                label{
                    font-size: 0.3rem;
                }
            }
            .pwds{
                width: 5.5rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                label{
                    font-size: 0.3rem;
                }
            }
            input{
                height: 0.6rem;
                width: 4rem;
                border: 0.01rem solid black;
            }
            .denl{
                font-size: 0.4rem;
                width: 5.5rem;
                height: 0.6rem;
                background: skyblue;
                border-radius: 0.3rem;
                color: white;
            }
        }
    }
</style>