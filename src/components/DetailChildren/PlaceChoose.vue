<template>
    <mt-popup v-model="flag" position="right" modal="true" closeOnClickModal="true">
        <div class="cityHeader">
            <a href="javascript: void(0);" @click="toggleRightPopup(false)">返回</a>
            <p>选择地区</p>
        </div>
        <div class="cityRegion">
            <h2>一级地区</h2>
            <h2>二级地区</h2>
            <h2>三级地区</h2>
        </div>
        <ul @click="getUrlId">
            <li class="city" v-for="(item, index) in cityData" :key="index" @click="getId(index)">
                <span>{{item.area_name}}</span>
                <span class="iconfont icon-jiantou"></span>
            </li>
        </ul>
    </mt-popup>
    
</template>

<script>
import Vuex from 'vuex'
export default {
    name: "PlaceChoose",
    created(){
        
    },
    
    data(){
        return {
            val: "",
        }
    },
    computed: {
        ...Vuex.mapState({
            choosePlace: state=>state.detail.choosePlace,
            cityData: state => state.location.provinceList
        }),
        flag: {
            get(){
                return this.choosePlace
            },
            set(newVal){
                this.toggleRightPopup(newVal);
                this.val = newVal;
            }
        }
    },
    methods: {
        ...Vuex.mapActions({
            toggleRightPopup: "detail/acToggleRightPopup",
            getProvinces: "location/acGetProvinces"
        }),
        getId(index){
            // if(this.cityData[index].area_id > 36){
            //     alert(1)
            // }
            // alert(this.cityData.area_id)
            this.getProvinces(this.cityData[index].area_id)
        },
        getUrlId(){
            // alert(this.$route.params.area_id)
        }
    },
}
</script>

<style lang="scss" scoped>
.mint-popup-right{
    background: #fff;
    width: 100%;
    height: 10rem;
    overflow: auto;
    .cityHeader{
        height: 0.8rem;
        display: flex;
        font-size: 0.3rem;
        padding:0 42% 0 0.5rem;
        justify-content: space-between;
        line-height: 0.8rem;
        background: rgb(248, 248, 248);
        border-bottom: 0.01rem solid rgb(212, 212, 212);
        a{
            font-size: 0.3rem;
        }
    }
    .cityRegion{
        height: 0.8rem;
        display: flex;
        justify-content: space-between;
        padding: 0 1rem;
        line-height: 0.8rem;
        border-bottom: 0.01rem solid rgb(212, 212, 212);
        h2{
            font-size: 0.3rem;
        }
    }
    .city{
        font-size: 0.3rem;
        height: 0.8rem;
        border-bottom: 0.01rem solid rgb(138, 138, 138);
        line-height: 0.8rem;
        // background: pink;
        padding: 0 0.5rem;
        display: flex;
        justify-content: space-between;
    }
}
</style>
