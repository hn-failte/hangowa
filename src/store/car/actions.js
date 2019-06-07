import axios from "axios";
export default {
    handleGetGoods({commit}){
        axios({
            method:"get",
            url:"http://localhost:3000/car"
        }).
        then((res)=>{
            commit("mutationsGetGoods",res.data )
        })

        
    }
}