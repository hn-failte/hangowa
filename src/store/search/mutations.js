export default {
    muSearchInfo(state, res){
        state.keyword = res;
        // eslint-disable-next-line no-console
        console.log("search", res.data.datas.list);
        let list = res.data.datas.list
        state.infoList = list
    },
    muSearchGoods(state, obj){
        if(!obj) return;
        // eslint-disable-next-line no-console
        console.log("search", obj.data.datas.goods_list);
        let list = obj.data.datas.goods_list;
        if(list.length === 0) state.hasResult = false
        else state.hasResult = true
        state.goodsList = list;
    },
    muClearHistory(state){
        state.historyList = [];
        localStorage.clear();
    }
}