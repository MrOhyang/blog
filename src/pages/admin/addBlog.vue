<template>
  <div class="admin-cont">

    <div class="cont-block">
      <h5>新建博客</h5>
    </div>

    <div class="cont-block">
      <input type="text" placeholder="标题">
    </div>

    <div class="cont-block">
      <div id="editor"></div>
    </div>

    <div class="cont-block">
      <p class="p-add-btn">
        <button class="btn btn-primary">新建</button>
      </p>
    </div>

  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'addBlog',
  data () {
    return {
    };
  },
  components: {  },
  created () {
  },
  mounted () {
    var quill = new Quill('#editor', {
      theme: 'snow'
    });
  },
  methods: {
  }
};
</script>

<style lang="less" scoped>
.cont-block{
  padding-bottom: 10px;
  #editor{
    min-height: 400px;
    background-color: #fff;
  }
  .p-add-btn{
    button{
      width: 140px;
    }
  }
}
</style>