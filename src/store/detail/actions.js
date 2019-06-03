import search from '@api/search'

export default {
    async acGetGoodDetail({commit}, id) {
        let data = await search.detailData(id);
        // eslint-disable-next-line no-console
        console.log(data);
        commit("muGetGoodDetail", data);
      }
}