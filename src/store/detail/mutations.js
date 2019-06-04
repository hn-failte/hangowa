export default {
    init(state){
        // eslint-disable-next-line no-console
        console.log("detail", "init");
        state.imgList = []
    },
    muGetGoodDetail(state, res){
        let list = res.data.datas;
        // eslint-disable-next-line no-console
        console.log("detail", list);
        if(res.data.datas.error){
            location.href = "/index"
            return;
        }
        let imgList = list.goods_image.split(",") //获取商品轮播图
        state.imgList = imgList
    }
}