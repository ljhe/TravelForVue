<template>
    <div>
        <div class="title">周末去哪儿</div>
        <ul>
            <li
                class="item border-bottom"
                v-for="item of list"
                :key="item.id"
            >
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" />
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'Weekend',
  data () {
    return {
      list: [{
        id: '0001',
        imgUrl: 'https://imgs.qunarzz.com/p/p58/201302/28/00c6ce7ab5a6331693835fbb.jpg_750x500_88a41ad4.jpg',
        title: '八达岭长城',
        desc: '八达岭长城史称天下九塞之一，是万里长城的精华，在明长城中，独具代表性。八达岭长城是万里长城向游人开得'
      }, {
        id: '0002',
        imgUrl: 'https://imgs.qunarzz.com/p/p58/201302/28/00c6ce7ab5a6331693835fbb.jpg_750x500_88a41ad4.jpg',
        title: '八达岭长城',
        desc: '八达岭长城史称天下九塞之一，是万里长城的精华，在明长城中，独具代表性。八达岭长城是万里长城向游人开得'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/css/mixins.styl'
  .title
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 37.09%
    .item-img
      width: 100%
  .item-info
    padding: .1rem
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #ccc
      ellipsis()
</style>
