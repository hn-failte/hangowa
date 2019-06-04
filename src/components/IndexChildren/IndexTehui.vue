<template>
    <div>
        <ul>
            <li class="li1"><div>超值特惠</div></li>
            <li class="li2">
                <img src="../../assets/s0_06125450960431206.jpg">
                <img src="../../assets/s0_06069971007810722.jpg">
                <img src="../../assets/s0_06064918250540013.jpg">
            </li>
        </ul>
    </div>
</template>


<script>
export default {
    
}
</script>


<style lang="scss" scoped>
    div{
        height: 2.7rem;
    }
    div>ul>.li1>div{
        height: 0.3rem;
        line-height: 0.3rem;
        width: 1.1rem;
        margin-left: 0.2rem;
        border-left: red 3px solid;
    }
    div>ul>.li2>img{
        width: 2.3rem;
    }
</style>
