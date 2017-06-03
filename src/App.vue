<template>
  <div id="app">
    <pagerHeader></pagerHeader>
    <router-view></router-view>
    <pagerFooter></pagerFooter>
  </div>
</template>

<script>
import pagerHeader from '@/pages/common/header.vue'
import pagerFooter from '@/pages/common/footer.vue'
export default {
  name: 'app',
  components: {
    pagerHeader,
    pagerFooter
  }
}
</script>

<style lang="less">
@import './assets/less/reset.less';
@import './assets/less/resize_font_size.less';
@import './assets/less/public.less';
/* 以下代码是用来控制 footer 自动吸底的, 结合 .footer-wrapper 一起看 */
html{
  height: 100%;
}
body{
  position: relative;
  padding-top: 50px;      // header
  padding-bottom: 120px;  // footer
  min-height: 100%;
  box-sizing: border-box;
  background-color: #f5f5f5;
}
#app{
  min-height: 100%;
}
</style>
