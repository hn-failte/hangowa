import {getProvinces} from '@api/location'

export default {
    async acGetProvinces({commit}){
        let data = await getProvinces();
        commit("muGetProvinces", data)
    }
}