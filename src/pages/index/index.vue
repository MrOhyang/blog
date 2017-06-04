<template>
  <div class="index-wrapper">

    <div class="block-wrapper">
      <router-link :to="'/article/' + n" class="block" v-for="n in 4" :key="n">
        <img>
        <div class="des">
          <h6>Vue学习笔记</h6>
          <p>一些自己东风微风我发</p>
        </div>
      </router-link>
    </div>

  </div>
</template>

<script>
</script>

<style lang="less">
@import '../..//assets/less/function.less';
.index-wrapper{
  margin: 0 auto;
  padding: 40px 0;
  max-width: 1200px;
  .block-wrapper{
    .flex();
    .flex-wrap(wrap);
    .block{
      margin-left: 2%;
      margin-bottom: 40px;
      width: 23.5%;
      height: 320px;
      background-color: #fff;
      box-sizing: border-box;
      transition: box-shadow .2s ease-in-out;
      cursor: pointer;
      img{
        display: block;
        width: 100%;
        height: 200px;
        background-color: #eee;
      }
      .des{
        padding: 10px 10px;
        box-sizing: border-box;
        h6{
          font-size: 0.9rem;
          color: #888;
        }
      }
    }
    .block:nth-child(4n+1){
      margin-left: 0;
    }
    .block:hover{
      box-shadow: 0 0 12px 0 #999;
    }
  }
}
</style>