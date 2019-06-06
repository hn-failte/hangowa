export default {
    init(state){
        // eslint-disable-next-line no-console
        console.log("detail", "init");
        state.imgList = [],
        state.goods_hair_info = {},
        state.goods_info = {},
        state.store_info = {},
        state.goods_evaluate_info = {},
        state.goods_commend_list = []
    },
    muGetGoodDetail(state, res){
        let list = res.data.datas;
        // eslint-disable-next-line no-console
        console.log("detail", list);
        if(res.data.datas.error){
            location.href = "/index"
            // eslint-disable-next-line no-console
            console.log("detail", res.data.datas.error);
            return;
        }
        state.imgList = list.goods_image.split(",") //获取商品轮播图
        state.goods_hair_info = list.goods_hair_info, //全国有货、运费...
        state.goods_info = {
            goods_name: list.goods_info.goods_name, //西班牙DM原酒进口红酒  干红葡萄酒750ml*2瓶   送酒具
            goods_jingle: list.goods_info.goods_jingle, //亏本冲量！两支再送欧式醒酒器1个，酒杯2个，海马刀1个，倒酒器酒塞1个！限量发售！
            goods_salenum: list.goods_info.goods_salenum, //销量
            goods_promotion_price: list.goods_info.goods_promotion_price, //售价
        };
        state.store_info = {
            store_deliverycredit: list.store_info.store_credit.store_deliverycredit, //物流
            store_desccredit: list.store_info.store_credit.store_desccredit, //描述
            store_servicecredit: list.store_info.store_credit.store_servicecredit, //服务
            store_name: list.store_info.store_name, //"每日壹品酒类专营店"
        };
        state.goods_evaluate_info = { //店家评分
            good_percent: list.goods_evaluate_info.good_percent,
            good_star: list.goods_evaluate_info.good_star,
            evaluation_count: list.goods_info.evaluation_count
        };
        state.goods_commend_list = list.goods_commend_list; //商品推荐
    },
    toggleRightPopup(state, val){
        state.choosePlace = !!val
    },
    toggleBottomPopup(state, val){
        state.chooseGoods = !!val
    }
}