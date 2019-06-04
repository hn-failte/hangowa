export default {
    muGetLists(state, res){
        // eslint-disable-next-line
        console.log("discover", res.data.datas)
        let swiperList = res.data.datas.list[0].adv_list.item
        let bannerTopList = res.data.datas.list[1].explode3.item
        let bannerBottomList = res.data.datas.list[2].home3.item
        let topicGoodsList = res.data.datas.list[3].goods.item
        let globalGoodsList = res.data.datas.list[4].goods.item
        state.swiperList = swiperList
        state.bannerTopList = bannerTopList
        state.bannerBottomList = bannerBottomList
        state.topicGoodsList = topicGoodsList
        state.globalGoodsList = globalGoodsList
    }
}