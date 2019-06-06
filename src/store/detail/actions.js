import search from '@api/search'

export default {
    async acGetGoodDetail({commit, state}, id) {
        if(id=="") return;
        state.lodingAnimRun = true; //发送请求，开启Loading动画
        let data = await search.goodDetail(id);
        state.lodingAnimRun = false; //接收数据，关闭Loading动画
        commit("muGetGoodDetail", data);
      }
}