import Http from "@utils/http"

export default {
    login: (name, pwd)=>{ //登录
        return Http.post("http://localhost:3000/users/login", "name="+name+"&pwd="+pwd)
    },
    register: (name, pwd)=>{ //注册
        return Http.post("http://localhost:3000/users/register", "name="+name+"&pwd="+pwd)
    }
}