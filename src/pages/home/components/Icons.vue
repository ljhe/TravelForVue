<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page, index) of pages" :key="index">
                <div class="icon"
                     v-for="item of page"
                     :key="item.id"
                >
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl">
                    </div>
                    <P class="icon-desc">{{item.desc}}</P>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
  name: 'Icons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        // 设置默认不滚动
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = {}
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/css/varibles.styl'
  @import '~styles/css/mixins.styl'
  .icons >>> .swiper-wrapper
    height: 0
    padding-bottom: 50%
  .icons
    overflow: hidden
    height: 0
    padding-bottom: 50%
    margin-top: .1rem
    .icon
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
          ellipsis()
</style>
