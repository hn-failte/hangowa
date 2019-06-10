export default {
    muGetProvinces(state, res){
        let id = res[0];
        if(!id || id==0){
            var list = res[1].data.datas.area_list;
            // eslint-disable-next-line no-console
            // console.log(list);
            state.provinceList = list;
        }
        else{
            list = res[1].data.datas.area_list;
            state.provinceList = list;
        }
        // console.log(id)
    }
}