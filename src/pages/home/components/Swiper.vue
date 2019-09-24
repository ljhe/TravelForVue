<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" />
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20199/478f98476b86f665c958d01f39e14ace.jpg'
      }, {
        id: '0002',
        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/a685001bbf5e77a203ff8815e953efbe.jpg_945x288_52b6ec01.jpg'
      }]
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
        * 以下设置宽高比 宽为 100% 高为宽的 30.45% 高宽比例始终是 30.45%
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
