<template>
  <div class="panel-table">
    <div class="panel-title">
      <slot name="title"></slot>
    </div>
    <div class="panel-body">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="less" scoped>
.panel-table{
  background-color: #fff;
  border: 1px #ddd solid;
  border-radius: 2px;
  .panel-title{
    padding-left: 16px;
    height: 36px;
    line-height: 36px;
    background-color: #337ab7;
    border-radius: 2px 2px 0 0;
    h6{
      font-size: 1.05rem;
      color: #fff;
    }
  }
  .panel-body{
    padding: 10px;
  }
}
</style>