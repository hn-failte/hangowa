<template>
  <swiper :options="swiperOption" ref="mySwiper" @touchEnd="play">
    <img class="swiper-slide" @click="doalert" src="../../assets/discover/s1_1.jpg">
    <img class="swiper-slide" @click="doalert" src="../../assets/discover/s1_1.jpg">
    <img class="swiper-slide" @click="doalert" src="../../assets/discover/s1_1.jpg">
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev" @click="prev"></div>
    <div class="swiper-button-next" slot="button-next" @click="next"></div>
  </swiper>
</template>

<script>
import Vuex from "vuex";
import "swiper/dist/css/swiper.css";

import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "DiscoverSwiper",
  components: {
    swiper,
    // eslint-disable-next-line
    swiperSlide
  },
  computed: {
    ...Vuex.mapState({
      //
    }),
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  data() {
    return {
      swiperOption: {
        touchRatio: 0.5, //触摸比例
        loop: true, //循环播放
        autoplay: true, //自动播放
        pagination: {
          //下方小圆点
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true
        },
        navigation: {
          //左右箭头按钮
          hideOnClick: true
        }
      },
      slides: [
        "../../assets/discover/s1_1.jpg",
        "../../assets/discover/s1_1.jpg",
        "../../assets/discover/s1_1.jpg"
      ],
      virtualData: {
        slides: []
      }
    };
  },
  methods: {
    play() {
      setTimeout(() => {
        this.swiper.autoplay.start();
      }, 500);
    },
    prev() {
      this.swiper.slidePrev();
    },
    next() {
      this.swiper.slideNext();
    },
    doalert(){
      alert(1)
    }
  }
};
</script>

<style lang="sass" scoped>
    .swiper-container
      z-index: -3
      width: 100%
      margin-top: 1rem
      height: 3rem
      .swiper-wrapper
        z-index: -2
        .swiper-slide
          z-index: -1
        //
    
</style>