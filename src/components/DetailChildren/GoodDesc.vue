<template>
    <article>
        <h3>{{goods_info.goods_name}}</h3>
        <h4>{{goods_info.goods_jingle}}</h4>
        <h5><i>￥{{goods_info.goods_promotion_price}}</i><em>销量：{{goods_info.goods_salenum}}</em></h5>
        <h6 style="background:" @click="popupRightToggle">送至<i>{{goods_hair_info.area_name}}</i><em>{{goods_hair_info.if_store_cn}}</em></h6>
        <p>{{goods_hair_info.content}}</p>
        <p @click="popupBottomToggle"><span>已选</span><i>默认</i></p>
        <div class="shop">
            <h5>{{store_info.store_name}}</h5>
            <ul>
                <li>
                    <span>描述相符</span>
                    <em>{{store_info.store_desccredit.credit}}</em>
                    <i>{{store_info.store_desccredit.percent_text}}</i>
                </li>
                <li>
                    <span>服务态度</span>
                    <em>{{store_info.store_servicecredit.credit}}</em>
                    <i>{{store_info.store_servicecredit.percent_text}}</i>
                </li>
                <li>
                    <span>发货速度</span>
                    <em>{{store_info.store_deliverycredit.credit}}</em>
                    <i>{{store_info.store_deliverycredit.percent_text}}</i>
                </li>
            </ul>
        </div>
        <dl>
            <dt>店铺推荐</dt>
            <router-link tag="dd" :to="{name:'detail', query:{data: item.goods_id, type: 'goods'}}" v-for="(item, index) in goods_commend_list" :key="index">
                <img :src="item.goods_image_url">
                <p>{{item.goods_name}}</p>
                <p>$<em>{{item.goods_promotion_price}}</em></p>
            </router-link>
        </dl>
        <mt-popup v-model="popupRight" position="right" modal="true" closeOnClickModal="true">
            <a href="javascript: void(0);" @click="popupRightToggle">返回</a>
        </mt-popup>
        <mt-popup v-model="popupBottom" position="bottom" modal="true" closeOnClickModal="true">
            asjcnjsnj
        </mt-popup>
    </article>
</template>

<script>
import Vuex from 'vuex'
export default {
    name: "GoodDesc",
    data(){
        return {
            popupRight: false,
            popupBottom: false
        }
    },
    computed: {
        ...Vuex.mapState({
            imgList: state=>state.detail.imgList,
            goods_hair_info: state=>state.detail.goods_hair_info,
            goods_info: state=>state.detail.goods_info,
            store_info: state=>state.detail.store_info,
            goods_evaluate_info: state=>state.detail.goods_evaluate_info,
            goods_commend_list: state=>state.detail.goods_commend_list
        })
    },
    methods: {
        popupRightToggle(){
            this.popupRight = !this.popupRight;
        },
        popupBottomToggle(){
            this.popupBottom = !this.popupBottom;
        }
    }
}
</script>

<style lang="scss" scoped>
    article{
        position: relative;
        z-index: -5;
        height: 10rem;
        background: #fff;
        padding: .2rem;
        &>h3{
            font-size: .3rem;
            text-align: left;
            color: #000;
        }
        &>h4{
            font-size: .2rem;
            text-align: left;
            color: #b2b2b2;
        }
        &>h5{
            font-size: .2rem;
            text-align: left;
            color: red;
            display: flex;
            &>i,&>em{
                display: block;
                justify-content: space-between;
            }
        }
        &>h6{
            font-size: .2rem;
            text-align: left;
            color: #b2b2b2;
        }
        .mint-popup-right{
            width: 100%;
            height: 100%
        }
        .mint-popup-bottom{
            width: 100%;
            height: 4rem
        }
    }
</style>
