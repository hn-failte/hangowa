<template>
    <div id="hgLogin">
        <div class="loginHeader">
            <router-link to="./Index" class="iconfont icon-home-line" tag="span"></router-link>
            <span class="hgLog">登录</span>
            <router-link to="./Register" class="hgReg" tag="span">注册</router-link>
        </div>
        <div class="logInput">
            <div class="tex">
                <label for>用户名:</label>
                <input type="text" v-model='inpname' @blur="userShi">
            </div>
            <p :class=className>{{username}}</p>
            <div class="pwd">
                <label for>密 &nbsp; 码:</label>
                <input type="password" v-model="inppwd" @blur="pwdShi">
            </div>
            <p :class=pwdClassName>{{password}}</p>
            <!-- <div class="denl" @touchenter="li">登录</div> -->
            <v-touch class="denl" tag="div" v-on:tap="lilo">登录</v-touch>
        </div>
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
            pwdClassName: ''
        };
    },
    methods: {
        lilo() {
            // async function fun(){
            //     console.log(1)
            //     let data = await login.query()
            //     console.log(data)
            // }
            // fun()
        },
        userShi(){
            if (/^1[34578]\d{9}$/.test(this.inpname)) {
                // alert("登录成功");
                // this.$toast({
                //     message: "登录成功",
                //     position: "bottom"
                // });
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
    .logInput {
        height: 5rem;
        // background: pink;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        margin-top: 0.4rem;
        p{
            // height: 0.3rem;
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
            border: 0.01rem solid black;
        }
        .denl {
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

