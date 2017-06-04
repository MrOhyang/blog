<template>
  <header class="header-wrapper">
    <div class="header-cont">
      <nav>
        <router-link to="/" active-class="" :class="{true: 'active'}[$route.path=='/']">主页</router-link>
        <router-link to="/about">关于我</router-link>
        <router-link to="/admin">后台管理</router-link>
        <a href="javascript:;">GitHub</a>
      </nav>
    </div>
  </header>
</template>

<style lang="less">
header.header-wrapper{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: #fff;
  border-bottom: 1px #ddd solid;
  box-shadow: 0 0 2px 0 #ddd;
  .header-cont{
    margin: 0 auto;
    max-width: 1200px;
    nav{
      display: inline;
      float: right;
      a{
        display: inline-block;
        margin: 0 18px;
        padding: 0 12px;
        height: 50px;
        line-height: 50px;
        border-bottom: 4px transparent solid;
        box-sizing: border-box;
        transition: border .2s ease-in-out;
      }
      a.active, a:Hover{
        border-bottom: 4px #15aef0 solid;
      }
    }
  }
}
</style>