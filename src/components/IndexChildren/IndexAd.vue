<template>
    <div>
        <ul class="ul1">
            <li class="li1">
                <ul class="ul2">
                    <li><img class="img1" src="../../assets/s0_06064914275721971.png"></li>
                    <li><img class="img2" src="../../assets/s0_06064914487884924.png"></li>
                    
                </ul>
            </li>
            <li class="li1"><img class="img3" src="../../assets/s0_06064914759580108.png"></li>
        </ul>
    </div>
</template>


<script>
export default {
    name: "IndexAd"
}
</script>



<style lang="scss" scoped>
    div{
        height: 200px;
    }
    div>.ul1{
        display: flex;
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

