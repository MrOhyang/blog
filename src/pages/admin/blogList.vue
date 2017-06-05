<template>
  <div class="admin-cont">

    <div class="cont-block">
      <panelTable>
        <h6 slot="title">博客分类列表</h6>
        <table class="table-blogkindlist">
          <tr>
            <th>博客分类名称</th>
            <th>博客数量</th>
            <th>创建时间</th>
            <th>操作</th>
          </tr>
          <tr>
            <td>Vue 相关</td>
            <td>0</td>
            <td>2017-06-05</td>
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
        <h6 slot="title">博客列表</h6>
        <table class="table-bloglist">
          <tr>
            <th>博客标题</th>
            <th>分类</th>
            <th>浏览/评论数</th>
            <th>创建时间</th>
            <th>修改时间</th>
            <th>操作</th>
          </tr>
          <tr v-for="k in 3">
            <td v-for="n in 4">{{ n }}</td>
            <td>2017-06-04 22:58</td>
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
        <table class="table-comments">
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
    return {};
  },
  components: { panelTable }
};
</script>

<style lang="less">
.admin-cont{
  .cont-block{
    padding: 20px;
    // 表格
    table{
      width: 100%;
      text-align: left;
      border-collapse:collapse;
      tr{
        th, td{
          padding: 8px 16px;
          border-bottom: 1px #ddd solid;
        }
        th{
          font-weight: normal;
        }
        td{
          font-size: 0.95rem;
          a{
            margin-right: 10px;
            color: #00c;
          }
          a:last-child{
            margin-right: 0;
          }
        }
      }
    }
    table.table-blogkindlist{  // 博客分类列表
      tr{
        th:nth-child(1){ width: 44% }  // 博客分类名称
        th:nth-child(2){ width: 18% }  // 博客数量
        th:nth-child(3){ width: 20% }  // 创建时间
        th:nth-child(4){ width: 18% }  // 操作
      }
    }
    table.table-bloglist{  // 博客列表
      tr{
        th:nth-child(1){ width: 28% }  // 博客标题
        th:nth-child(2){ width: 18% }  // 分类
        th:nth-child(3){ width: 14% }  // 浏览/评论数
        th:nth-child(4){ width: 14% }  // 创建时间
        th:nth-child(5){ width: 14% }  // 修改时间
        th:nth-child(6){ width: 12% }  // 操作
      }
    }
    table.table-comments{  // 评论列表
      tr{
        th:nth-child(1){ width: 18% }  // 评论者
        th:nth-child(2){ width: 32% }  // 内容
        th:nth-child(3){ width: 24% }  // 所在博客
        th:nth-child(4){ width: 14% }  // 评论时间
        th:nth-child(5){ width: 12% }  // 操作
      }
    }
  }
}
</style>