<template>
  <div class="admin-cont">

    <div class="cont-block">
      <h5>新建博客</h5>
    </div>

    <div class="cont-block">
      <div class="add-blog-title clearfix">
        <select class="pull-left" v-model="select_kind">
          <option v-for="kind in blog_kind_list" :value="kind">{{ kind.name }}</option>
        </select>
        <input type="text" placeholder="标题" class="pull-right" v-model.trim="title">
      </div>
    </div>

    <div class="cont-block">
      <!-- <div id="editor"></div> -->
      <quill-editor id="editor"
                    ref="myQuillEditor"
                    v-model="cont"
                    :options="editor_option"></quill-editor>
    </div>

    <div class="cont-block">
      <p class="p-add-btn">
        <button class="btn btn-primary" @click="addBlog()">新建</button>
      </p>
    </div>

  </div>
</template>

<script>
import moment from 'moment'
import { quillEditor } from 'vue-quill-editor'
export default {
  name: 'addBlog',
  data () {
    return {
      blog_kind_list: [],  // 博客 类型 列表
      select_kind: null,  // 选中的 博客类型
      title: '',  // 博客标题
      cont: '',  // 博客内容

      editor_option: {  // editor option
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
            ['blockquote', 'code-block'],

            [{ 'header': 1 }, { 'header': 2 }],               // custom button values
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
            [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
            [{ 'direction': 'rtl' }],                         // text direction

            [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

            [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
            [{ 'font': [] }],
            [{ 'align': [] }],

            ['clean']                                         // remove formatting button
          ]
        },
        // formats: [],
        placeholder: 'Compose an epic...',
        theme: 'snow'
      }
    };
  },
  components: { quillEditor },
  created () {
    this.getBlogKindList();
  },
  mounted () {
  },
  methods: {
    // 获取 博客类型列表
    getBlogKindList (page = 1, count = 99) {
      this.$http.post('/api/get_blog_kind_list', {
        page, count
      }).then(res => {
        if (res.data.code == 0) {
          this.blog_kind_list = res.data.data;
        } else {
          this.$warn(res.data.msg);
        }
      }).catch(error => {
        this.$warn('出现异常');
      });;
    },
    // 提交 博客
    addBlog () {
      if (!this.select_kind) {
        this.$warn('请先选择博客类型');
        return ;
      }
      if (this.title == '') {
        this.$warn('请填写标题');
        return ;
      }

      let bkid = this.select_kind.bkid,
          title = this.title,
          text = this.cont;

      this.$http.post('/api/create_blog', {
        bkid: bkid,
        title: title,
        text: text
      }).then(res => {
        if (res.data.code == 0) {
          this.$warn('创建成功');
        } else {
          this.$warn('出现异常');
        }
      }).catch(error => {
      });
    }
  }
};
</script>

<style lang="less" scoped>
.cont-block{
  padding-bottom: 10px;
  .add-blog-title{
    select{
      width: 18%;
    }
    input{
      float: left;
      margin-left: 2%;
      width: 80%;
    }
  }
  #editor{
    background-color: #fff;
  }
  .p-add-btn{
    button{
      width: 140px;
    }
  }
}
.cont-block:last-child{
  padding-bottom: 100px;
}
</style>

<style lang="less">
#editor{
  .ql-editor{
    min-height: 200px;
  }
}
</style>