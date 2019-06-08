<template>
  <swiper :options="swiperOption" ref="mySwiper" @touchEnd="play">
    <router-link tag="img" :to="{name:'detail', query:{data:item.data, type:item.type}}"
                  v-for="(item,index) in swiperList" :key="index" class="swiper-slide"
                  :src="item.image"></router-link>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev" @click="prev"></div>
    <div class="swiper-button-next" slot="button-next" @click="next"></div>
  </swiper>
</template>

<script>
import Vuex from "vuex";
import "swiper/dist/css/swiper.css";

import { swiper } from "vue-awesome-swiper";

export default {
  name: "IndexLunbo",
  components: {
    swiper
  },
  computed: {
    ...Vuex.mapState({
      swiperList: state=>state.index.swiperList
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
    }
  }
};
</script>

<style lang="sass" scoped>
    .swiper-container
      width: 100%
      height: 3rem
      z-index: -3
      .swiper-wrapper
        z-index: -2
        .swiper-slide
          z-index: -1
    
</style>