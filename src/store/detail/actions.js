import search from '@api/search'

export default {
    async acGetGoodDetail({commit}, id) {
        if(id=="") return;
        let data = await search.goodDetail(id);
        // eslint-disable-next-line no-console
        console.log(data);
        commit("muGetGoodDetail", data);
      }
}