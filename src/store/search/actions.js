import search from '@api/search'
export default {
    async acSearchInfo({commit},){
        let data = await search.searchInfo();
        commit("muSearchInfo", data);
    },
    async acSearchGoods({commit}, keyword){
        if(keyword == "") return;
        let res = await search.searchGoods(keyword);
        commit("muSearchGoods", res)
    }
}