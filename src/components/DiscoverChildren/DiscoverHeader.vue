<template>
    <header>
      <div>
        <a href="javascript: void(0)"></a>
      </div>
      <div>
        <span>发现</span>
      </div>
      <div>
        <a href="javascript: void(0)"></a>
      </div>
    </header>
</template>

<script>
export default {
    name: "DiscoverHeader"
}
</script>

<style lang="sass">
header
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 1.5rem
    line-height: 1rem
    background: #eee
    display: flex
    div
        flex: 1
        height: 100%
        font-size: .4rem
        &>a
            display: block
            width: 1rem
            height: 100%
        &:first-of-type
            text-align: left
            background: url("../../assets/discover/arrow_left_b.png") no-repeat left
            background-size: .4rem
            &>a
                display: block
        &:nth-child(2)
            line-height: 1.5rem
        &:last-of-type
            text-align: right
            background: url("../../assets/discover/more_b.png") no-repeat right
            background-size: .4rem
            &>a
                display: block
</style>