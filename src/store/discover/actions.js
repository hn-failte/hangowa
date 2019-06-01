
import discover from "@api/discover.js";
export default {
    async acGetLists({commit}){
        console.log(1)
        let res = await discover.discoverData()
        commit("muGetLists", res)
    },
}