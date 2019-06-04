export default {
    muGetIndexData(state, res){
        // eslint-disable-next-line
        // console.log(res.data.datas.list[0].adv_list.item);
        // console.log("index", res.data.datas.list[1].home4);

        let swiperList = res.data.datas.list[0].adv_list.item
        state.swiperList = swiperList;

        let AdList = res.data.datas.list[1].home4
        state.AdList = AdList;




    }
}