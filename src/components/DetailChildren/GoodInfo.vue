<template>
  <div class="good-header">
    <swiper :options="swiperOption" ref="mySwiper">
      <img v-for="(item, index) in imgList" class="swiper-slide" :src="item" :key="index">
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <a href="javascript: void(0);" class="backTop" @click="backTop"></a>
  </div>
</template>

<script>
import Vuex from "vuex";
import "swiper/dist/css/swiper.css";
import { swiper } from "vue-awesome-swiper";

export default {
  name: "GoodInfo",
  data() {
    return {
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
    }
  }
};
</script>

<style lang="scss" scoped>
.good-header {
  position: relative;
  z-index: -4;
  .swiper-container {
    z-index: -3;
    width: 100%;
    .swiper-wrapper {
      z-index: -2;
      .swiper-slide {
        z-index: -1;
        width: 100%;
      }
    }
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
}
</style>
