<template>
    <header>
        <a href="javascript: void(0)" @click="backTop" class="backTop"></a>
        <input type="search" v-model="keyword" placeholder="请输入搜索关键字" autofocus="autofocus">
        <router-link tag="a" :to="{name: 'searchlist', query: {keyword: keyword}}" class="more" href="javascript: void(0)">搜索</router-link>
    </header>
</template>

<script>
/* eslint-disable */
import Vuex from 'vuex'
export default {
    name: "SearchHead",
    data() {
        return {
            keywordContent: "",
            loadFlag: false
        }
    },
    computed: {
        keyword: {
            get(){
                if(!this.loadFlag){
                    let keyword = this.$route.query.keyword
                    this.keywordContent = keyword
                    this.loadFlag = true
                }
                return this.keywordContent
            },
            set(newVal){
                this.keywordContent = newVal;
            }
        }
    },
    methods: {
        ...Vuex.mapActions({
            searchInfo: "search/acSearchInfo",
        }),
        backTop(){
            this.$router.back();
        }
    }
}
</script>

<style lang="sass" scoped>
header
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 1rem
    line-height: 1rem
    background: #eee
    display: flex
    align-items: center
    a.backTop
        display: block
        width: 1rem
        height: 100%
        background: url("../../assets/common/backTop.png") no-repeat center
        background-size: .3rem
    a.more
        display: block
        text-align: center
        width: 1rem
        height: 1rem
        background: #eee
    input[type="search"]
        display: block
        width: 100%
        vertical-align: middle
        height: .6rem
        border: none
</style>