import Http from "@utils/http"

export default {
    login: (name, pwd)=>{ //登录
        // return Http.post("http://localhost:3000/users/login", "name="+name+"&pwd="+pwd) //测试服务器
        return Http.post("http://47.112.216.148:3000/users/login", "name="+name+"&pwd="+pwd) //正式服务器
    },
    register: (name, pwd)=>{ //注册
        // return Http.post("http://localhost:3000/users/register", "name="+name+"&pwd="+pwd) //测试服务器
        return Http.post("http://47.112.216.148:3000/users/register", "name="+name+"&pwd="+pwd) //正式服务器
    }
}