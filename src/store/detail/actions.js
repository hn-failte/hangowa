
import detail from "@api/detail";

export default {
    async acGetGoodDetail({commit}, id) {
        let data = await detail.detailData(id);
        // eslint-disable-next-line no-console
        console.log(data);
        commit("muGetGoodDetail", data);
      }
}