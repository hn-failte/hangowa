<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <img v-for="(item, index) in imgList" class="swiper-slide" :src="item.src" :key="index">
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
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
        loop: true, //循环播放
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
  },
};
</script>

<style lang="scss" scoped>
.swiper-container {
    z-index: -3;
    width: 100%;
    height: 8rem;
    .swiper-wrapper {
        z-index: -2;
        .swiper-slide {
            z-index: -1;
            //
        }
    }
}
</style>
