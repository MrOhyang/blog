<template>
  <div class="admin-leftbar-wrapper">
    <h6>内容管理</h6>
    <nav>
      <a href="javascript:;" class="active">博客列表</a>
      <a href="javascript:;">评论列表</a>
    </nav>
    <h6>成员管理</h6>
    <nav>
      <a href="javascript:;">成员列表</a>
    </nav>
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

<style lang="less">
.admin-leftbar-wrapper{
  position: fixed;
  top: 50px;
  left: 0;
  padding: 18px 18px;
  width: 280px;
  height: 100%;
  background-color: #262d40;
  box-sizing: border-box;
  color: #fff;
  h6{
    padding: 6px 0;
    color: #fff;
  }
  nav{
    padding-left: 10px;
    a{
      display: block;
      height: 36px;
      line-height: 36px;
      text-indent: 20px;
      font-size: 0.95rem;
      border-radius: 2px;
      color: #fff;
      transition: all .2s ease-in-out;
    }
    a.active, a:hover{
      padding-left: 20px;
      background-color: #488fd2;
    }
  }
}
</style>