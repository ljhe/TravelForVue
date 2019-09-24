<template>
    <div class="icons">
        <div class="icon">
            <div class="icon-img">
                <img class="icon-img-content" src="https://s.qunarzz.com/homenode/images/touchheader/inn.png">
            </div>
            <P class="icon-desc">景点门票</P>
        </div>
        <div class="icon">
            <div class="icon-img">
                <img class="icon-img-content" src="https://s.qunarzz.com/homenode/images/touchheader/inn.png">
            </div>
            <P class="icon-desc">景点门票</P>
        </div>
        <div class="icon">
            <div class="icon-img">
                <img class="icon-img-content" src="https://s.qunarzz.com/homenode/images/touchheader/inn.png">
            </div>
            <P class="icon-desc">景点门票</P>
        </div>
        <div class="icon">
            <div class="icon-img">
                <img class="icon-img-content" src="https://s.qunarzz.com/homenode/images/touchheader/inn.png">
            </div>
            <P class="icon-desc">景点门票</P>
        </div>
        <div class="icon">
            <div class="icon-img">
                <img class="icon-img-content" src="https://s.qunarzz.com/homenode/images/touchheader/inn.png">
            </div>
            <P class="icon-desc">景点门票</P>
        </div>
        <div class="icon">
            <div class="icon-img">
                <img class="icon-img-content" src="https://s.qunarzz.com/homenode/images/touchheader/inn.png">
            </div>
            <P class="icon-desc">景点门票</P>
        </div>
        <div class="icon">
            <div class="icon-img">
                <img class="icon-img-content" src="https://s.qunarzz.com/homenode/images/touchheader/inn.png">
            </div>
            <P class="icon-desc">景点门票</P>
        </div>
        <div class="icon">
            <div class="icon-img">
                <img class="icon-img-content" src="https://s.qunarzz.com/homenode/images/touchheader/inn.png">
            </div>
            <P class="icon-desc">景点门票</P>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Icons'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/css/varibles.styl'
  .icons
    overflow: hidden
    height: 0
    padding-bottom: 50%
    .icon
      /*生成相对定位的元素,相当于其正常位置进行定位*/
      position: relative
      overflow: hidden
      float: left
      width: 25%
      height: 0
      padding-bottom: 25%
      .icon-img
        /*上面不加 position: relative, .icon-img 会变得非常大，因为导致了 position: absolute 相对于根节点而言的*/
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .44rem
        /*限定了盒子模型的总面积*/
        box-sizing: border-box
        padding: .1rem
        .icon-img-content
          /*设置图片居中*/
          display: block
          margin: 0 auto
          height: 100%
      .icon-desc
          position: absolute
          left: 0
          right: 0
          bottom: 0
          height: .44rem
          line-height: .44rem
          text-align: center
          color: $darkTextColor
</style>
