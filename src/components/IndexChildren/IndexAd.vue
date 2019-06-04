<template>
    <div>
        <ul class="ul1">
            <li class="li1">
                <ul class="ul2">
                    <li>
                        <router-link tag="img" :to="{name:'',qurey:{data:home4.rectangle1_data,type:home4.rectangle1_type}}"
                        v-for="(home4,index) in AdList" :key="index" class="img1"
                        :src="home4.image"></router-link>
                    </li>


                    <li><img class="img2" src="../../assets/s0_06064914487884924.png"></li>
                    
                </ul>
            </li>
            <li class="li1"><img class="img3" src="../../assets/s0_06064914759580108.png"></li>
        </ul>
    </div>
</template>


<script>
import Vuex from "vuex";

export default {
    name: "IndexAd",
    computed: {
        ...Vuex.mapState({
        AdList: state=>state.index.AdList
        
    }),
    },
created(){
    console.log(this)
}
}
</script>



<style lang="scss" scoped>
    div{
        height: 185px;
    }
    div>.ul1{
        display: flex;
        border-bottom: 10px solid rgb(219, 218, 218);
    }
    div>.ul1>.li1{
        flex: 1;
    }
    div>.ul1>.li1>.ul2>li>.img1{
        width: 200px;
        height: 80px;
    }
    div>.ul1>.li1>.ul2>li>.img2{
        width: 200px;
        height: 80px;
    }
    div>.ul1>li>.img3{
        height: 160px;
        width: 170px;
    }
</style>

