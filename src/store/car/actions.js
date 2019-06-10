import axios from "axios";
export default {
    handleGetGoods({commit}){
        axios({
            method:"get",
            url:"http://localhost:3000/car"
        }).
        then((res)=>{
            res.data.map((item)=>{
                item.flag = true; 
            })
            commit("mutationsGetGoods",res.data )
        })

        
    }
}