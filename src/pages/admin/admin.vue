<template>
  <div class="admin-wrapper">
    <!-- 左侧导航栏 -->
    <adminLeftBar></adminLeftBar>
    <!-- 中间的内容 -->
    <div class="admin-cont-wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import adminLeftBar from '@/pages/admin/adminLeftBar.vue'
export default {
  name: 'admin',
  data () {
    return {};
  },
  components: {
    adminLeftBar
  }
};
</script>

<style lang="less">
.admin-wrapper{
  .admin-cont-wrapper{
    padding-left: 280px;
  }
}
</style>