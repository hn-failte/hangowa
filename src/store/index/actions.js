import index from "@api/index"
export default {
    async acGetIndexData({commit}){
        //拉去远程数据
        let data = await index.indexData()
        commit("muGetIndexData", data)
    }
}