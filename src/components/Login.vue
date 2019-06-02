<template>
    <div id="hgLogin">
        <div class="loginHeader">
            <router-link to='./Index' class="iconfont icon-home-line" tag='span'></router-link>
            <span class="hgLog">登录</span>
            <router-link to='./Register' class="hgReg" tag='span'>注册</router-link>
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
            <!-- <div class="denl" @touchenter="li">登录</div> -->
            <v-touch class="denl" tag='div' v-on:tap="li">登录</v-touch>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            msg: 'xixi'
        }
    },
    methods: {
        li(){
            alert(1)
        }
    }
}
</script>


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
            height: 4rem;
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

