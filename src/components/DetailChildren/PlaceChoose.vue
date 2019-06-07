<template>
    <mt-popup v-model="flag" position="right" modal="true" closeOnClickModal="true">
        <a href="javascript: void(0);" @click="toggleRightPopup(false)">返回</a>
    </mt-popup>
</template>

<script>
import Vuex from 'vuex'
export default {
    name: "PlaceChoose",
    data(){
        return {
            val: ""
        }
    },
    computed: {
        ...Vuex.mapState({
            choosePlace: state=>state.detail.choosePlace
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
            toggleRightPopup: "detail/acToggleRightPopup"
        })
    },
}
</script>

<style lang="scss" scoped>
.mint-popup-right{
    background: #fff;
    width: 100%;
    height: 10rem;
}
</style>
