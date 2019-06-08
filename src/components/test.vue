<template>
    <div>
        用户名<input type="text" name="name" v-model="name"><br>
        密码<input type="text" name="pwd" v-model="pwd"><br>
        <input type="button" value="Login" @click="submitLogin">
    </div>
</template>

<script>
import login from '@api/login'
export default {
    data() {
        return {
            name: "",
            pwd: ""
        }
    },
    methods: {
        async submitLogin(){
            let res = await login.login(this.name, this.pwd)
            if(res.data.errCode==0) alert(1)
        }
    },
}
</script>

<style lang="scss" scoped>
    div{
        margin-top: 1rem;
    }
    input[type="text"]{
        margin-top: .2rem;
        height: .5rem;
        width: 3rem;
        font-size: .24rem
    }
    input[type="submit"]{
        height: .5rem;
        width: 1rem;
        font-size: .24rem;
    }
</style>
