import discover from "@api/discover.js";
export default {
    async acGetLists({commit, state}){
        state.lodingAnimRun = true; //发送请求，开启Loading动画
        let res = await discover.discoverData()
        state.lodingAnimRun = false; //接收数据，关闭Loading动画
        commit("muGetLists", res)
    },
}