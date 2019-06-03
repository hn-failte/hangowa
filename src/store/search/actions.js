import search from '@api/search'
export default {
    acSearchInfo({commit}, e){
        let val = e.target.value.toString().trim();
        // eslint-disable-next-line no-console
        if(val == "") return;
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
            search.searchInfo(val);
            setTimeout(() => {
                commit("muSearchInfo", [val, window.failtejsonpdata1])
            }, 100);
        }, 500);
    },
    async acGoSearch({commit, state}){
        if(state.keyword == "") return;
        let res = await search.goSearch(state.keyword);
        commit("muGoSearch", res)
    }
}