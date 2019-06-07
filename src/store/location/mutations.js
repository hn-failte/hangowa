export default {
    muGetProvinces(state, res){
        let list = res.data.datas.area_list;
        // eslint-disable-next-line no-console
        console.log(list);
        state.provinceList = list;
    }
}