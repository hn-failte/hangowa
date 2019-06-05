<template>
    <div id="hgLogin">
        <div class="loginHeader">
            <router-link to="./Index" class="iconfont icon-home-line" tag="span"></router-link>
            <span class="hgLog">登录</span>
            <router-link to="./Register" class="hgReg" tag="span">注册</router-link>
        </div>
        <div class="jul"></div>
        <div class="logInput">
            <div class="tex">
                <label for>用户名:</label>
                <input type="text" v-model='inpname' @blur="userShi" placeholder="请输入用户名">
            </div>
            <p :class=className>{{username}}</p>
            <div class="pwd">
                <label for>密 &nbsp; 码:</label>
                <input type="password" v-model="inppwd" @blur="pwdShi" placeholder="请输入密码">
            </div>
            <p :class=pwdClassName>{{password}}</p>
        </div>
        <div class="xieyi">
            <v-touch :class="classNameg" tag="span" v-on:tap="gouf">{{gou}}</v-touch>
            <v-touch class="tongyi" tag="span" v-on:tap="gouf">七天自动登录</v-touch>
            <span class="userReg">忘记密码?</span>
        </div>
        <v-touch class="denl" tag="div" v-on:tap="lilo">登录</v-touch>
    </div>
</template>

<script>
// import login from "@api/login"
export default {
    created() {
        
    },
    data() {
        return {
            msg: "xixi",
            inpname: '',
            username: '',
            inppwd: '',
            password: '',
            className: '',
            pwdClassName: '',
            gou: '',
            classNameg: ['gou']
        };
    },
    methods: {
        lilo() {

        },
         gouf(){
            if(this.gou === ''){
                this.gou = '✔'
                this.classNameg = ['gou', 'gousuc']
            }else if(this.gou === '✔'){
                this.gou = ''
                this.classNameg = ['gou', 'goufail']
            }
        },
        userShi(){
            if (/^1[34578]\d{9}$/.test(this.inpname)) {
                this.username = '用户名可用'
                this.className = 'suc'
            }else if(this.inpname === ''){
                this.username = '用户名不能为空'
                this.className = 'fail'
            }else{
                this.username = '请输入正确的手机号码'
                this.className = 'fail'
            }
        },
        pwdShi(){
            if (/^[\w_-]{6,16}$/.test(this.inppwd)) {
                this.password = '密码可用'
                this.pwdClassName = 'suc'
            }else if(this.inppwd === ''){
                this.password = '密码不能为空'
                this.pwdClassName = 'fail'
            }else {
                this.password = '请输入6-16位密码'
                this.pwdClassName = 'fail'
            }
        }
    }
};
</script>


<style lang="scss" scoped>
#hgLogin {
    .loginHeader {
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
    .jul{
        height: 0.4rem;
        background: white;
    }
    .logInput {
        height: 3rem;
        background: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        p{
            height: 0.4rem;
            width: 4rem;
            font-size: 0.3rem;
            // background: red;
        }
        .suc{
            color: green;
        }
        .fail{
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
        input {
            height: 0.6rem;
            width: 4rem;
            border: 0.01rem solid rgb(37, 37, 37);
        }
    }
    .xieyi{
        height: 0.5rem;
        display: flex;
        width: 5.74rem;
        margin: 0.2rem auto 0;
        font-size: 0.24rem;
        align-items: center;
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
            margin: 0 0 0 2rem;
        }
        // span{
        //     background: red;
        // }
    }
    .denl {
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

