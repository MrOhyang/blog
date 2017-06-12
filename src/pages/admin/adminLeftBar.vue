<template>
  <div class="admin-leftbar-wrapper">
    <div class="admin-leftbar small-scroll-y">
      <h6>内容管理</h6>
      <nav>
        <router-link to="/admin/bloglist"><i class="iconfont icon-list"></i>博客内容管理</router-link>
        <router-link to="/admin/addBlog"><i class="iconfont icon-edit"></i>新建博客</router-link>
      </nav>
      <h6>成员管理</h6>
      <nav>
        <router-link to="xxx"><i class="iconfont icon-group"></i>成员列表</router-link>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'adminLeftBar',
  data () {
    return {};
  }
};
</script>