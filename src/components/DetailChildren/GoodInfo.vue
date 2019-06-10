<template>
  <div class="good-header">
    <swiper :options="swiperOption" ref="mySwiper">
      <img v-for="(item, index) in imgList" class="swiper-slide" :src="item" :key="index">
      <div class="swiper-pagination" slot="pagination"></div>
      <a href="javascript: void(0);" class="iconfont favorate">&#xe654;</a>
    </swiper>
    <div :class="{topMenu: true, show: topMenuShow}">
      <a href="javascript: void(0);" class="backTop" @click="backTop"></a>
      <ul class="topMenu-ul" v-show="topMenuShow">
        <li class="active">商品</li>
        <li>详情</li>
        <li>评价</li>
      </ul>
      <a href="javascript: void(0);" class="moreMenu" @click="moreMenu"></a>
    </div>
  </div>
</template>

<script>
import Vuex from "vuex";
import "swiper/dist/css/swiper.css";
import { swiper } from "vue-awesome-swiper";

export default {
  name: "GoodInfo",
  created() {
    window.vm_this = this
    document.onscroll = function(){
      // eslint-disable-next-line
      vm_this.topMenuShow = document.documentElement.scrollTop > 100 ? true : false
    }
  },
  beforeDestroy() {
    document.onscroll = null;
  },
  data() {
    return {
      topMenuShow: false,
      swiperOption: {
        touchRatio: 0.5, //触摸比例
        pagination: {
          //下方小圆点
          el: ".swiper-pagination",
          type: "bullets"
        },
        navigation: {
          //左右箭头按钮
          hideOnClick: true
        }
      }
    };
  },
  components: {
    swiper
  },
  computed: {
    ...Vuex.mapState({
      imgList: state => state.detail.imgList
    }),
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  methods: {
    backTop() {
      this.$router.back();
    },
    moreMenu(){}
  }
};
</script>

<style lang="scss" scoped>
.good-header {
  position: relative;
  z-index: -4;
  .swiper-container {
    position: relative;
    z-index: -3;
    width: 100%;
    height: 8rem;
    .swiper-wrapper {
      z-index: -2;
      height: 8rem;
      .swiper-slide {
        z-index: -1;
        width: 100%;
        height: 8rem;
      }
      .favorate{
        position: absolute;
        bottom: .5rem;
        right: .5rem;
        background: rgba($color: #eee, $alpha: 0.5);
        color: gray;
        padding: .1rem;
        border-radius: 50%;
      }
      .favorate-true{
        color: red;
      }
    }
  }
  div.topMenu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 0rem;
    background: #fff;
    &.show{
      height: 1rem;
    }
    .backTop {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 5;
      display: block;
      width: 1rem;
      height: 1rem;
      background: rgba($color: #fff, $alpha: 0.5)
        url("../../assets/common/backTop.png") no-repeat center;
      background-size: 0.3rem;
      border-radius: 50%;
    }
    .topMenu-ul{
      position: absolute;
      top: 0;
      left: 50%;
      width: 3rem;
      height: 1rem;
      line-height: 1rem;
      font-size: .3rem;
      margin-left: -1.5rem;
      display: flex;
      li{
        flex: 1;
        box-sizing: border-box;
        &.active{
          border-bottom: .1rem solid red
        }
      }
    }
    .moreMenu {
      position: fixed;
      top: 0;
      right: 0;
      z-index: 5;
      display: block;
      width: 1rem;
      height: 1rem;
      background: rgba($color: #eee, $alpha: 0.5)
        url("../../assets/common/more.png") no-repeat center;
      background-size: 0.3rem;
      border-radius: 50%;
    }
  }
}
</style>
