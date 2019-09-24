<template>
  <div>
      <div class="title">热门推荐</div>
      <ul v-for="item in recommendList" :key="item.id">
          <li class="item border-bottom">
            <img class="item-img" :src="item.imgUrl"/>
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
            <button class="item-button">查看详情</button>
          </div>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'https://imgs.qunarzz.com/p/tts2/1803/94/ee19b679ce2d6e02.jpg_336x320_06d64507.jpg',
        title: '金秋畅游',
        desc: '北京出发-跟团游 金秋畅游☞北京+承德+坝上草原+金山岭长城4日游|推荐亲子草原越野+烤羊篝火'
      }, {
        id: '0002',
        imgUrl: 'https://imgs.qunarzz.com/p/tts2/1803/94/ee19b679ce2d6e02.jpg_336x320_06d64507.jpg',
        title: '金秋畅游',
        desc: '北京出发-跟团游 金秋畅游☞北京+承德+坝上草原+金山岭长城4日游|推荐亲子草原越野+烤羊篝火'
      }, {
        id: '0003',
        imgUrl: 'https://imgs.qunarzz.com/p/tts2/1803/94/ee19b679ce2d6e02.jpg_336x320_06d64507.jpg',
        title: '金秋畅游',
        desc: '北京出发-跟团游 金秋畅游☞北京+承德+坝上草原+金山岭长城4日游|推荐亲子草原越野+烤羊篝火'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/css/mixins.styl'
  .title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      /*保证内容不超出外层容器*/
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-button
        line-height: .44rem
        margin-top: .16rem
        background: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        color: #fff
</style>
