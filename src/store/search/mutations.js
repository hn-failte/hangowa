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
    muGoSearch(state, obj){
        state.recommend = false;
        state.searching = false;
        // eslint-disable-next-line no-console
        console.log(obj.data);
        let list = obj.data;
        state.goodsList = list;
    },
    
}