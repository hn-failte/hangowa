export default {
    muGetIndexData(state, res){
        // eslint-disable-next-line
        console.log(res.data.datas.list[0].adv_list.item);
        // console.log("index", res.data.datas.list[1].home4);
        // console.log("index",res.data.datas.list[2].explode3.item);
        console.log("index",res.data.datas)

        let swiperList = res.data.datas.list[0].adv_list.item
        state.swiperList = swiperList;

        let AdList = res.data.datas.list[1].home4
        state.AdList = AdList;

        let TehuiList = res.data.datas.list[2].explode3.item
        state.TehuiList = TehuiList;

        let goodsList = [
            {
                dt: res.data.datas.list[3].home1,
                dd: res.data.datas.list[4].goods.item,
            },
            {
                dt: res.data.datas.list[5].home1,
                dd: res.data.datas.list[6].goods.item,
            },
            {
                dt: res.data.datas.list[7].home1,
                dd: res.data.datas.list[8].goods.item,
            },
            {
                dt: res.data.datas.list[9].home1,
                dd: res.data.datas.list[10].goods.item,
            },
        ]

        state.goodsList = goodsList;
    }
}