<template>
  <div class="admin-cont">

    <div class="cont-block">
      <panelTable>
        <h6 slot="title">博客分类列表</h6>
        <table class="table table-blogkindlist">
          <tr>
            <th>博客分类名称</th>
            <th>博客数量</th>
            <th>创建时间</th>
            <th>操作</th>
          </tr>
          <tr v-for="kind in blog_kind_list.data">
            <td>{{ kind.name }}</td>
            <td>?</td>
            <td>{{ kind.created_time }}</td>
            <td>
              <a href="javascript:;">编辑</a>
              <a href="javascript:;">删除</a>
            </td>
          </tr>
          <tr v-show="blog_kind_list.data.length <= 0">
            <td colspan="4" class="text-center">无</td>
          </tr>
        </table>
      </panelTable>
    </div>

    <div class="cont-block">
      <panelTable>
        <h6 slot="title">博客列表</h6>
        <table class="table table-bloglist">
          <tr>
            <th>博客标题</th>
            <th>分类</th>
            <th>浏览/评论数</th>
            <th>创建时间</th>
            <th>修改时间</th>
            <th>操作</th>
          </tr>
          <tr v-for="blog in blog_list.data">
            <td>{{ blog.title }}</td>
            <td>{{ blog.blog_kind.name }}</td>
            <td>?/?</td>
            <td>{{ blog.created_time }}</td>
            <td>{{ blog.updated_time }}</td>
            <td>
              <a href="javascript:;">编辑</a>
              <a href="javascript:;">删除</a>
            </td>
          </tr>
        </table>
      </panelTable>
    </div>

    <div class="cont-block">
      <panelTable>
        <h6 slot="title">评论列表</h6>
        <table class="table table-comments">
          <tr>
            <th>评论者</th>
            <th>内容</th>
            <th>所在博客</th>
            <th>评论时间</th>
            <th>操作</th>
          </tr>
          <tr v-for="k in 3">
            <td></td>
            <td></td>
            <td>
              <router-link to="/" target="_blank">有关Vue编辑器的那些事</router-link>
            </td>
            <td>2017-06-04 22:58</td>
            <td>
              <a href="javascript:;">编辑</a>
              <a href="javascript:;">删除</a>
            </td>
          </tr>
        </table>
      </panelTable>
    </div>

  </div>
</template>

<script>
import moment from 'moment'
import panelTable from '@/pages/admin/panelTable.vue'
export default {
  name: 'blogList',
  data () {
    return {
      blog_list: {  // 博客 列表
        page: null,
        count: null,
        data: []
      },
      blog_kind_list: {  // 博客 类型 列表
        page: null,
        count: null,
        data: []
      }
    };
  },
  components: { panelTable },
  created () {
    this.getBlogKindList();
    this.getBlogList();
  },
  methods: {
    // 获取 博客类型列表
    getBlogKindList (page = 1, count = 10) {
      this.$http.post('/api/get_blog_kind_list', {
        page, count
      }).then(res => {
        if (res.data.code == 0) {
          this.blog_kind_list.page = page;
          this.blog_kind_list.count = count;
          this.blog_kind_list.data = res.data.data;
        } else {
          this.$warn(res.data.msg);
        }
      }).catch(error => {
        this.$warn('出现异常');
      });;
    },
    // 获取 博客列表
    getBlogList (page = 1, count = 10) {
      this.$http.post('/api/get_blog_list', {
        page, count
      }).then(res => {
        if (res.data.code == 0) {
          this.blog_list.page = page;
          this.blog_list.count = count;
          this.blog_list.data = res.data.data;
        } else {
          this.$warn(res.data.msg);
        }
      }).catch(error => {
        this.$warn('出现异常');
      });
    }
  }
};
</script>