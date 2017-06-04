<template>
  <div class="admin-cont">

    <div class="cont-block">
      <panelTable>
        <h6 slot="title">博客列表</h6>
        <table>
          <tr>
            <th style="width: 28%">博客标题</th>
            <th style="width: 18%">分类</th>
            <th style="width: 14%">浏览/评论数</th>
            <th style="width: 14%">创建时间</th>
            <th style="width: 14%">修改时间</th>
            <th style="width: 12%">操作</th>
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
        <table>
          <tr>
            <th style="width: 18%">评论者</th>
            <th style="width: 32%">内容</th>
            <th style="width: 24%">所在博客</th>
            <th style="width: 14%">评论时间</th>
            <th style="width: 12%">操作</th>
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
  }
}
</style>