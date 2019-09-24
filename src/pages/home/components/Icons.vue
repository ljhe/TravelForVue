<template>
    <div class="icons">
        <swiper>
            <swiper-slide v-for="(page, index) in pages" :key="index">
                <div class="icon"
                     v-for="item in page"
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
  data () {
    return {
      iconList: [{
        id: '0001',
        imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/inn.png',
        desc: '景点门票'
      }, {
        id: '0002',
        imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/haiwai.png',
        desc: '海外酒店'
      }, {
        id: '0003',
        imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/kezhan.png',
        desc: '民俗'
      }, {
        id: '0004',
        imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/bargainflight.png',
        desc: '低价机票'
      }, {
        id: '0005',
        imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/group.png',
        desc: '特惠酒店'
      }, {
        id: '0006',
        imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/tuan.png',
        desc: '旅游团购'
      }, {
        id: '0007',
        imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/freeTravel.png',
        desc: '自由行'
      }, {
        id: '0008',
        imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/aroundtravel.png',
        desc: '周边短途'
      }]
    }
  },
  computed: {
    pages () {
      const pages = {}
      this.iconList.forEach((item, index) => {
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
