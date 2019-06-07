<template>
    <mt-popup v-model="flag" position="bottom" modal="true" closeOnClickModal="true">
        asjcnjsnj
    </mt-popup>
</template>

<script>
import Vuex from 'vuex'
export default {
    name: "GoodsChoose",
    data(){
        return {
            val: ""
        }
    },
    computed: {
        ...Vuex.mapState({
            chooseGoods: state=>state.detail.chooseGoods
        }),
        flag: {
            get(){
                return this.chooseGoods
            },
            set(newVal){
                this.toggleBottomPopup(newVal);
                this.val = newVal;
            }
        }
    },
    methods: {
        ...Vuex.mapMutations({
            toggleBottomPopup: "detail/muToggleBottomPopup"
        })
    },
}
</script>

<style lang="scss" scoped>
.mint-popup-bottom{
    width: 100%;
    height: 4rem
}
</style>
