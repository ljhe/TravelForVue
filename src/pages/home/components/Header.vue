<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xeb99;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xeb9c;</span>输入城市/景点/游玩主题
        </div>
        <router-link to="/city">
            <div class="header-right">
                {{this.$store.state.city}}<span class="iconfont arrow-icon">&#xe633;</span>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="stylus" scoped>
  /*样式里面引入样式,不能直接 import 前面需要加一个 @ */
  /*不能直接用 @,前面需要加 ~ */
  @import '~styles/css/varibles.styl'
  /*1rem = html 的 font-size = 50px;(该例中 html 的 font-size 设置为 50px )*/
  .header
    display: flex
    line-height: $headerHeight
    background: $bgColor
    color: #fff
    .header-left
      width: .64rem
      float: left
      .back-icon
        text-align: center
        font-size .4rem
    .header-input
      /*让所有弹性盒模型对象的子元素都有相同的长度(撑满当前 flex 容器),且忽略它们内部的内容.*/
      flex: 1
      height: .64rem
      /*设置行高 行高由上间距,文本高度,下间距组成,上间距的距离与下间距的距离是相等的,所以文字默认在这一行中是垂直居中的.*/
      line-height: .64rem
      margin-top: .12rem
      padding-left: .2rem
      background: #fff
      /*设置边框圆角*/
      border-radius: .1rem
      color: #ccc
    .header-right
      width: 1.24rem
      float: right
      text-align: center
      color: #fff
      .arrow-icon
        font-size: .24rem
        margin-left: .04rem
</style>
