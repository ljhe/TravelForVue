<template>
    <div class="search">
        <input class="search-input" type="text" placeholder="请输入城市名或拼音"/>
    </div>
</template>

<script>
export default {
  name: 'Search'
}
</script>

<style lang="stylus" scoped>
  @import "~styles/css/varibles.styl"
  .search
    height .72rem
    padding 0 .1rem
    background-color $bgColor
    .search-input
      /*限定了盒子模型的总面积*/
      box-sizing border-box
      width 100%
      height .62rem
      padding 0 .1rem
      line-height .62rem
      text-align center
      border-radius .06rem
      color #666
</style>
