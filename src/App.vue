<template>
  <div id="app">
    <!-- keep-alive 会对页面做缓存 exclude 里面放不需要做缓存的页面的 name值  如列表的详情页-->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
