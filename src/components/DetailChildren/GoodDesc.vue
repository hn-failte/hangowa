<template>
    <article>
        <h3>{{goods_info.goods_name}}</h3>
        <h4>{{goods_info.goods_jingle}}</h4>
        <h5><i>￥{{goods_info.goods_promotion_price}}</i><em>销量：{{goods_info.goods_salenum}}</em></h5>
        <h6 style="background:" @click="popupRightToggle">送至<i>{{goods_hair_info.area_name}}</i><em>{{goods_hair_info.if_store_cn}}</em></h6>
        <p class="postFee">{{goods_hair_info.content}}</p>
        <p class="selected" @click="popupBottomToggle"><span>已选</span><i>默认</i></p>
        <a class="this-shop" :href="'http://www.hangowa.com/wap/tmpl/store.html?store_id=10'+store_info.store_id">
            <h5>{{store_info.store_name}}</h5>
            <ul>
                <li>
                    <span>描述相符</span>
                    <em>{{store_info.store_desccredit?store_info.store_desccredit.credit:''}}</em>
                    <i>{{store_info.store_desccredit?store_info.store_desccredit.percent_text:''}}</i>
                </li>
                <li>
                    <span>服务态度</span>
                    <em>{{store_info.store_servicecredit?store_info.store_servicecredit.credit:''}}</em>
                    <i>{{store_info.store_servicecredit?store_info.store_servicecredit.percent_text:''}}</i>
                </li>
                <li>
                    <span>发货速度</span>
                    <em>{{store_info.store_deliverycredit?store_info.store_deliverycredit.credit:''}}</em>
                    <i>{{store_info.store_deliverycredit?store_info.store_deliverycredit.percent_text:''}}</i>
                </li>
            </ul>
        </a>
        <dl class="rec-shop">
            <dt>店铺推荐</dt>
            <router-link tag="dd" :to="{name:'detail', query:{data: item.goods_id, type: 'goods'}}" v-for="(item, index) in goods_commend_list" :key="index">
                <img v-lazy="item.goods_image_url">
                <p>{{item.goods_name}}</p>
                <p>$ <em>{{item.goods_promotion_price}}</em></p>
            </router-link>
        </dl>
        <div class="moreDetail">点击查看商品详情</div>
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
    background: #eee;
    &>h3{
        padding: .1rem;
        background: #fff;
        font-size: .3rem;
        text-align: left;
        color: #000;
    }
    &>h4{
        padding: .1rem;
        background: #fff;
        font-size: .25rem;
        text-align: left;
        color: #b2b2b2;
    }
    &>h5{
        padding: .1rem;
        background: #fff;
        font-size: .3rem;
        line-height: .5rem;
        text-align: left;
        display: flex;
        justify-content: space-between;
        font-weight: bold;
        &>i{
            font-size: .4rem;
            color: red;
        }
        &>em{
            font-size: .25rem;
            color: #333;
        }
    }
    &>h6{
        padding: .1rem;
        background: #fff;
        font-size: .3rem;
        text-align: left;
        color: gray;
        &>i{
            font-size: .3rem;
            padding: 0.1rem;
            color: #000;
        }
        &>em{
            font-size: .3rem;
            padding: 0.1rem;
            color: red;
        }
    }
    p.postFee{
        padding: .1rem;
        background: #fff;
        line-height: .4rem;
        color: gray;
        font-size: .25rem;
        padding-left: .7rem;
        text-align: left;
    }
    p.selected{
        font-size: .25rem;
        padding: .1rem;
        box-sizing: border-box;
        margin: .2rem 0;
        width: 100%;
        text-align: left;
        height: 1rem;
        line-height: 1rem;
        background: #fff url('../../assets/common/arrow_right.png') no-repeat 95% center;
        background-size: .4rem;
        i{
            font-size: .25rem;
            display: inline-block;
            margin: 0 .1rem;
            height: .5rem;
            line-height: .5rem;
            border: 1px solid gray;
            padding: 0 .1rem;
            text-align: center;
            vertical-align: middle;
        }
    }
    .this-shop{
        display: block;
        margin: .2rem 0;
        background: #fff;
        color: #333;
        h5{
            padding-left: .6rem;
            font-size: .3rem;
            text-align: left;
            height: 1rem;
            line-height: 1rem;
            background: url("../../assets/common/store.png") no-repeat .2rem center, url("../../assets/common/arrow_right.png") no-repeat 95% center;
            background-size: .3rem;
            border-bottom: 1px solid #c0c0c0;
        }
        ul{
            height: 1rem;
            line-height: 1rem;
            display: flex;
            justify-content: space-around;
            li{
                span{
                    font-size: .3rem;
                    color: gray;
                }
                em{
                    font-size: .3rem;
                    color: red;
                    font-weight: bold;
                    margin: .1rem;
                }
                i{
                    font-size: .25rem;
                    background: #f00;
                    color: #fff;
                    padding: .05rem;
                }
            }
        }
    }
    .rec-shop{
        margin: .2rem 0;
        background: #fff;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        padding: .2rem;
        box-sizing: border-box;
        dt{
            width: 100%;
            height: .5rem;
            line-height: .5rem;
            font-size: .3rem;
            color: #333;
            text-align: left;
        }
        dd{
            width: 25%;
            padding: .1rem;
            box-sizing: border-box;
            height: 3rem;
            img{
                width: 100%;
                height: 2rem;
            }
            p{
                width: 100%;
                height: .5rem;
                overflow: hidden;
                font-size: .22rem;
                text-align: left;
                &:first-of-type{
                    line-height: .25rem;
                    color: gray;
                }
                &:last-of-type{
                    font-size: .3rem;
                    color: #333;
                    em{
                        font-size: .3rem;
                    }
                }
            }
        }
    }
    div.moreDetail{
        height: 1rem;
        width: 100%;
        line-height: 1rem;
        color: #999;
        font-size: .3rem;
    }



    .mint-popup-right{
        background: #fff;
        width: 100%;
        height: 10rem;
    }
    .mint-popup-bottom{
        width: 100%;
        height: 4rem
    }
}
</style>
