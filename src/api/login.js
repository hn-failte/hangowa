import axios from "axios"

export default {
    query(){ //登录
        return axios({
            method: "get",
            url: "http://localhost:3000/users?name=xi&pwd=xixi",
        })
    },
    register(){ //注册
        return axios({
            method: "post",
            url: "http://localhost:3000/users",
            data: {
                name: "xi",
                pwd:"xixi"
            }
        })
    },
    delete(id="1"){ //删除用户
        return axios({
            method: "delete",
            url: "http://localhost:3000/users/"+id
        })
    },
    // update(id="9", obj={name: "asd"}){ //修改用户
    //     return axios({
    //         method: "patch",
    //         url: "http://localhost:3000/users/"+id,
    //         data: obj
    //     })
    // }
}

// Http({

// })