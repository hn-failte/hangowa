import search from '@api/search'
export default {
    acSearchInfo({commit}, e){
        let val = e.target.value.toString().trim();
        if(val == "") return;
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
            search.searchInfo(val);
            setTimeout(() => {
                commit("muSearchInfo", [val, window.failtejsonpdata1])
            }, 100);
        }, 500);
    },
    async acSearchGoods({commit, state}){
        if(state.keyword == "") return;        
        let res = await search.searchGoods(state.keyword);
        commit("muSearchGoods", res)
    }
}