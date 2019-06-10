import {getProvinces} from '@api/location'

export default {
    async acGetProvinces({commit},id){
        let data = await getProvinces(id);
        commit("muGetProvinces", [id,data])
    }
}