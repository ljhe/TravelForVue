<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" src="https://img1.qunarzz.com/vs_ceph_vs_tts/033f6526-1db0-40c7-93c4-ba3572c04b4f.jpg_r_1280x840x90_c8cd8177.jpg"/>
            <div class="banner-info">
                <div class="banner-tittle">测试测试测试</div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe692;</span>
                    39
                </div>
            </div>
        </div>
        <common-gallary :imgs="imgs" v-show="showGallary" @close="handleBannerClose"></common-gallary>
    </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  data () {
    return {
      imgs: ['https://img1.qunarzz.com/vs_ceph_vs_tts/033f6526-1db0-40c7-93c4-ba3572c04b4f.jpg_r_1280x840x90_c8cd8177.jpg',
        'https://img1.qunarzz.com/p/tts9/1703/50/b760801172ca5e02.jpg_r_640x420x90_2b583270.jpg'],
      showGallary: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleBannerClose () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      /*设置从上到下的一个渐变色*/
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-tittle
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        height: .32rem
        line-height: .32rem
        margin-top: .14rem
        padding: 0 .4rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .8)
        font-size: .24rem
        .banner-icon
          font-size: .24rem
</style>
