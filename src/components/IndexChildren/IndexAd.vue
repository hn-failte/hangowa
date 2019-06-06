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
}
</script>



<style lang="scss" scoped>
    div{
        height: 3.7rem;
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
        height: 3.7rem;
        line-height: 3.7rem;
    }
    div>.ul1>.li1>.ul2{
        line-height: 1.8rem;
        height: 3.7rem;
        box-sizing: border-box;
        li{
            padding: 0;
            height: 50%;
            img{
                height: 100%;
                padding: 0;
                width: 100%;
            }
        }
    }
    div>.ul1>li>.img3{
        width: 100%;
        height: 100%;
        vertical-align: middle;
    }
</style>

