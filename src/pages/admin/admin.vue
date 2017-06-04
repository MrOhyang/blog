<template>
  <div class="admin-wrapper">
    <!-- 左侧导航栏 -->
    <adminLeftBar></adminLeftBar>
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
}
</style>