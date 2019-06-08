<template>
    <div id="hgRegister">
        <div class="regHeader">
            <router-link to="./Index" class="iconfont icon-home-line" tag="span"></router-link>
            <span class="hgLog">注册</span>
            <router-link to="./Login" class="hgReg" tag="span">登录</router-link>
        </div>
        <div class="regjl"></div>
        <div class="regInput">
            <div class="tex">
                <label for>用户名:</label>
                <input type="text" v-model="username" @blur="userShi" placeholder="请输入用户名">
            </div>
            <p :class="usernameClass">{{usernamePele}}</p>
            <div class="pwd">
                <label for>密 &nbsp; 码:</label>
                <input type="password" v-model="pwd" @blur="pwdShi" placeholder="请输入密码">
            </div>
            <p :class="pwdClass">{{pwdPele}}</p>
            <div class="pwds">
                <label for>确认密码:</label>
                <input type="password" v-model="pwds" @blur="pwdsShi" placeholder="再次输入密码">
            </div>
            <p :class="pwdsClass">{{pwdsPele}}</p>
        </div>
        <div class="xieyi">
            <v-touch :class="className" tag="span" v-on:tap="gouf">{{gou}}</v-touch>
            <v-touch class="tongyi" tag="span" v-on:tap="gouf">同意</v-touch>
            <span class="userReg">用户注册协议</span>
        </div>
        <v-touch class="regl" @tap="doRegister">注册</v-touch>
    </div>
</template>

<script>
import login from '@api/login'
export default {
    data() {
        return {
            username: "",
            usernamePele: "",
            usernameClass: "",
            pwd: "",
            pwdPele: "",
            pwdClass: "",
            pwds: "",
            pwdsPele: "",
            pwdsClass: "",
            gou: '',
            className: ['gou']
        };
    },
    methods: {
        async doRegister(){
            let flag = await login.register(this.username, this.pwd)
            console.log(flag)
        },
        gouf(){
            if(this.gou === ''){
                this.gou = '✔'
                this.className = ['gou', 'gousuc']
            }else if(this.gou === '✔'){
                this.gou = ''
                this.className = ['gou', 'goufail']
            }
        },
        userShi() {
            if (/^1[34578]\d{9}$/.test(this.username)) {
                this.usernamePele = "用户名可用";
                this.usernameClass = "suc";
            } else if(this.username === ''){
                this.usernamePele = "手机号码不能为空";
                this.usernameClass = "fail";
            } else {
                this.usernamePele = "请输入正确的手机号码";
                this.usernameClass = "fail";
            }
        },
        pwdShi() {
            if (/^[\w_-]{6,16}$/.test(this.pwd)) {
                this.pwdPele = "密码可用";
                this.pwdClass = "suc";
            } else if(this.pwd === ''){
                this.pwdPele = "密码不能为空";
                this.pwdClass = "fail";
            } else {
                this.pwdPele = "请输入6-16位密码";
                this.pwdClass = "fail";
            }
        },
        pwdsShi() {
            if(this.pwds !== this.pwd){
                this.pwdsPele = '密码不一致'
                this.pwdsClass = "fail";
            }else if(this.pwds === ''){
                this.pwdsPele = '密码不能为空'
                this.pwdsClass = "fail";
            }else if(/^[\w_-]{6,16}$/.test(this.pwds) && this.pwds === this.pwd) {
                this.pwdsPele = '密码可用'
                this.pwdsClass = "suc";
            }else {
                this.pwdsPele = '请输入6-16位密码'
                this.pwdsClass = 'fail'
            }
        }
    }
};
</script>


<style lang="scss" scoped>
#hgRegister {
    .regHeader {
        height: 0.86rem;
        background: rgb(241, 241, 241);
        display: flex;
        padding: 0 0.3rem;
        justify-content: space-between;
        align-items: center;
        .iconfont {
            font-size: 0.4rem;
        }
        .hgLog {
            font-size: 0.35rem;
            color: #111;
        }
        .hgReg {
            font-size: 0.3rem;
            color: red;
        }
    }
    .regjl{
        height: 0.4rem;
        background: white;
    }
    .regInput {
        height: 4rem;
        background: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        p{
            font-size: 0.3rem;
            height: 0.4rem;
            width: 4rem;
        }
        .suc {
            color: green;
        }
        .fail {
            color: red;
        }
        .tex {
            width: 5.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            label {
                font-size: 0.3rem;
            }
        }
        .pwd {
            width: 5.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            label {
                font-size: 0.3rem;
            }
        }
        .pwds {
            width: 5.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            label {
                font-size: 0.3rem;
            }
        }
        input {
            height: 0.6rem;
            width: 4rem;
            border: 0.01rem solid black;
            font-size: 0.24rem;
        }
    }
    .xieyi{
        height: 0.5rem;
        display: flex;
        width: 5.74rem;
        margin: 0.2rem auto 0;
        // justify-content: space-around;
        align-items: center;
        font-size: 0.24rem;
        .gou{
            height: 0.3rem;
            width: 0.3rem;
            border: 0.01rem solid rgb(158, 158, 158);
            border-radius: 50%;
            color: white;
            
        }
        .gousuc{
            background: rgb(72, 207, 174);
            border: 0.01rem solid rgb(72, 207, 174);
        }
        .goufail{
            background: white;
        }
        .tongyi{
            margin: 0 0.1rem;
        }
        .userReg{
            color: #5D9CEC;
        }
    }
    .regl {
        font-size: 0.4rem;
        width: 5.5rem;
        height: 0.7rem;
        background: skyblue;
        border-radius: 0.35rem;
        color: white;
        margin: 0.4rem auto;
        line-height: 0.7rem;
    }
}
</style>