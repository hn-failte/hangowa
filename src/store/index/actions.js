import index from "@api/index"
export default {
    async acGetIndexData({commit, state}){
        state.lodingAnimRun = true; //发送请求，开启Loading动画
        let data = await index.indexData()
        state.lodingAnimRun = false; //接收数据，关闭Loading动画
        commit("muGetIndexData", data)
    }
}