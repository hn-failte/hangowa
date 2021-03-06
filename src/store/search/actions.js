import search from '@api/search'
export default {
    async acSearchInfo({commit, state},){
        state.lodingAnimRun = true; //发送请求，开启Loading动画
        let data = await search.searchInfo();
        state.lodingAnimRun = false; //接收数据，关闭Loading动画
        commit("muSearchInfo", data);
    },
    async acSearchGoods({commit, state}, keyword){
        if(keyword == "") return;
        state.lodingAnimRun = true; //发送请求，开启Loading动画
        let historyList = state.historyList;
        if(historyList.length>0){
            if(historyList.indexOf(keyword)<0) historyList.push(keyword);
        }
        else{
            historyList = [keyword];
        }
        state.historyList = historyList;
        localStorage.setItem("historyList", JSON.stringify(historyList));
        let res = await search.searchGoods(keyword);
        state.lodingAnimRun = false; //接收数据，关闭Loading动画
        commit("muSearchGoods", res)
    }
}