<template>
    <div>
        <ul class="ul1">
            <li class="li1">
                <ul class="ul2">
                    <li>
                        <router-link tag="img" :to="{name:'detail',query:{data:AdList.rectangle1_data,type:AdList.rectangle1_type}}"
                         class="img1"
                        :src="AdList.rectangle1_image"></router-link>
                    </li>


                    <li>
                        <router-link tag="img" :to="{name:'detail',query:{data:AdList.rectangle2_data,type:AdList.rectangle2_type}}"
                         class="img2"
                        :src="AdList.rectangle2_image"></router-link>
                    </li>
                    
                </ul>
            </li>
            <li class="li1">
                <router-link tag="img" :to="{name:'detail',query:{data:AdList.square_data,type:AdList.square_type}}"
                         class="img3"
                        :src="AdList.square_image"></router-link>
            </li>
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
        height: 4rem;
        width: 100%;
    }
    div>.ul1{
        width: 100%;
        display: flex;
        border-bottom: 10px solid rgb(219, 218, 218);
    }
    div>.ul1>.li1{
        flex: 1;
        width: 50%;
    }
    div>.ul1>.li1>.ul2>li>img{
        width: 100%;
        height: 80px;
    }
    div>.ul1>li>.img3{
        height: 163px;
        width: 100%
    }
</style>

