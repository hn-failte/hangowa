<template>
    <footer>
      <ul class="footer-top">
        <li>登录</li>|
        <li>注册</li>|
        <li>反馈</li>|
        <li>返回顶部</li>
      </ul>
      <ul class="footer-middle">
        <li>
          <p>
            <img src="@assets/discover/foot_app.png">
          </p>
          <p>客户端</p>
        </li>
        <li>
          <p>
            <img src="@assets/discover/foot_touch.png">
          </p>
          <p>触屏版</p>
        </li>
        <li>
          <p>
            <img src="@assets/discover/foot_pc.png">
          </p>
          <p>电脑端</p>
        </li>
      </ul>
      <div>Copyright &copy; 2014-2016 汉购网</div>
    </footer>
</template>

<script>
import Vuex from "vuex"

export default {
    name: "DiscoverFooter"
}
</script>

<style lang="sass">
footer
    width: 100%
    height: 3rem
    background: #fefefe
    margin-bottom: 1rem
    ul.footer-top
        width: 100%
        height: .8rem
        line-height: .8rem
        font-size: .3rem
        display: flex
        flex-direction: row
        li
            flex: 1
    ul.footer-middle
        width: 100%
        height: 1.6rem
        font-size: .3rem
        display: flex
        flex-direction: row
        justify-content: space-around
        li
            width: 25%
            display: flex
            flex-direction: column
            &>p
                flex: 1
                padding: .1rem
                box-sizing: border-box
                &:first-of-type
                    height: .8rem
                img
                    width: .5rem
                    height: .5rem
                    border: 1px solid #999
                    border-radius: 50%
                    padding: .1rem
                    background: rgba(231,231,231,.7)
    &>div
        width: 100%
        height: .6rem
        line-height: .6rem
</style>