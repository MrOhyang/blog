<template>
  <div class="admin-leftbar-wrapper">
    <div class="admin-leftbar small-scroll-y">
      <h6>内容管理</h6>
      <nav>
        <router-link to="/admin/bloglist"><i class="iconfont icon-list"></i>博客/评论列表</router-link>
        <router-link to="xxx"><i class="iconfont icon-edit"></i>新建博客</router-link>
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

<style lang="less">
.admin-leftbar-wrapper{
  position: fixed;
  top: 50px;
  left: 0;
  padding: 18px 0 18px 18px;
  padding-bottom: 120+50+18px;
  width: 280px;
  height: 100%;
  background-color: #262d40;
  box-sizing: border-box;
  color: #fff;
  .admin-leftbar{
    /*overflow: hidden;*/
    overflow-y: auto;
    width: 100%;
    height: 100%;
    h6{
      padding: 6px 0;
      color: #fff;
    }
    nav{
      padding-left: 10px;
      width: 224px;
      a{
        display: block;
        height: 36px;
        line-height: 36px;
        text-indent: 14px;
        font-size: 0.95rem;
        border-radius: 2px;
        color: #fff;
        transition: all .2s ease-in-out;
        i.iconfont{
          padding-right: 10px;
          font-size: inherit;
        }
      }
      a.active, a:hover{
        padding-left: 14px;
        border-left: 4px #245c90 solid;
        background-color: #488fd2;
      }
    }
  }
}
</style>