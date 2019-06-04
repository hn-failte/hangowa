<template>
    <div id="hgRegister">
        <div class="regHeader">
            <router-link to="./Index" class="iconfont icon-home-line" tag="span"></router-link>
            <span class="hgLog">注册</span>
            <router-link to="./Login" class="hgReg" tag="span">登录</router-link>
        </div>
        <div class="regInput">
            <div class="tex">
                <label for>用户名:</label>
                <input type="text" v-model="username" @blur="userShi">
            </div>
            <p :class="usernameClass">{{usernamePele}}</p>
            <div class="pwd">
                <label for>密 &nbsp; 码:</label>
                <input type="password" v-model="pwd" @blur="pwdShi">
            </div>
            <p :class="pwdClass">{{pwdPele}}</p>
            <div class="pwds">
                <label for>确认密码:</label>
                <input type="password" v-model="pwds" @blur="pwdsShi">
            </div>
            <p :class="pwdsClass">{{pwdsPele}}</p>
            <div class="regl">注册</div>
        </div>
    </div>
</template>

<script>
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
            pwdsClass: ""
        };
    },
    methods: {
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
    .regInput {
        height: 5rem;
        // background: pink;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        margin-top: 0.4rem;
        p{
            font-size: 0.3rem;
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
        }
        .regl {
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