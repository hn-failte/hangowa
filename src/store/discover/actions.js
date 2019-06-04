import discover from "@api/discover.js";
export default {
    async acGetLists({commit}){
        let res = await discover.discoverData()
        commit("muGetLists", res)
    },
}