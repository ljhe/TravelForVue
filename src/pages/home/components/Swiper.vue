<template>
    <div class="wrapper">
        <!--初始 list 为 [], 当有值的时候,会导致轮播默认显示最后一张,设置 v-if 来解决这个问题-->
        <swiper :options="swiperOption" v-if="showSwiper">
            <swiper-slide v-for="item of list" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" />
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
    /* scoped 修饰的是当前页面的组件,而 swiper-pagination 在 swiper 组件中
     * >>> 样式进行穿透, wrapper 下面只要出现 swiper-pagination, 就会修改它的样式,不受 scoped 影响
     */
    .wrapper >>> .swiper-pagination-bullet-active
        background: #fff
    .wrapper
        /*
        * 以下设置宽高比 宽为 100% 高为宽的 31.25% 高宽比例始终是 31.25%
        * or
        * height: 31.25vw
        */
        overflow: hidden
        width: 100%
        height: 0
        padding-bottom: 30.45%

        background: #eee
        .swiper-img
            width: 100%
</style>
