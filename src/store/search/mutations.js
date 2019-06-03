export default {
    muSearchInfo(state, arr){
        state.keyword = arr[0];
        state.recommend = false;
        state.searching = true;
        // eslint-disable-next-line no-console
        console.log(arr[1])
        let list = arr[1].result
        state.infoList = list
    },
    muSearchGoods(state, obj){
        if(!obj) return;
        state.recommend = false;
        state.searching = false;
        // eslint-disable-next-line no-console
        console.log(obj.data.datas.goods_list);
        let list = obj.data.datas.goods_list;
        state.goodsList = list;
    },
    
}