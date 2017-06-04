<template>
  <div class="pager-wrapper clearfix">
    <div class="pager clearfix">
      <span v-for="btn in btn_list"
            v-bind:class="{ active: (btn.num == page) }"
            @click="pageChange(btn)">
        {{ {true: '', false: btn.num}[btn.is_special] }}
        {{ {true: '...', false: ''}[btn.is_special && btn.str=='...'] }}
        {{ {'pre': '<', 'next': '>'}[btn.str] }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pager',
  props: {
    page: Number,   // 接收父组件的 当前页数，注意：页数由提供的父组件回调函数中去处理
    count: Number,  // 总页数
    callback: {     // 父组件回调函数
      type: Function,
      default () {}
    }
  },
  data () {
    return {
    }
  },
  computed: {
    // 按钮数据
    btn_list () {
      let list = [];

      if (this.count <= 0) {
        return list;
      }
      // if (this.count == 1) {
      //   list.push({ is_special: false, num: 1, str: '' });
      //   return list;
      // }
      list.push({ is_special: true, num: undefined, str: 'pre' })
      if (this.count < 11) {
        for (var i = 1; i <= this.count; i++) {
          list.push({ is_special: false, num: i, str: '' });
        }
      } else {
        let area_left = 5,
            area_right = this.count - 4;

        if (this.page <= area_left) {
          for (var i = 1; i<= 5 || i <= this.page + 2; i++) {
            list.push({ is_special: false, num: i, str: '' });
          }
          list.push({ is_special: true, num: undefined, str: '...' });
          list.push({ is_special: false, num: this.count, str: '' });
        } else {
          list.push({ is_special: false, num: 1, str: '' });
          list.push({ is_special: true, num: undefined, str: '...' });
          if (this.page < area_right) {
            for (var i = this.page - 2; i <= this.page + 2; i++) {
              list.push({ is_special: false, num: i, str: '' });
            }
            list.push({ is_special: true, num: undefined, str: '...' });
            list.push({ is_special: false, num: this.count, str: '' });
          } else {
            var i = area_right > (this.page - 2) ? (this.page - 2) : area_right;

            for (; i <= this.count; i++) {
              list.push({ is_special: false, num: i, str: '' });
            }
          }
        }
      }
      list.push({ is_special: true, num: undefined, str: 'next' });
      return list;
    }
  },
  methods: {
    // 点击按钮事件
    pageChange (btn) {
      let to_page = 0;  // 跳转到某页 的 某

      if (btn.is_special) {
        switch (btn.str) {
          case 'pre':   // 点击上一页
            if (this.page == 1) return ;
            to_page = this.page - 1;
            break;
          case 'next':  // 点击下一页
            if (this.page == this.count) return ;
            to_page = this.page + 1;
            break;
          case '...':
            return ;
        }
      } else {
        if (this.page == btn.num) return ;
        to_page = btn.num;
      }
      this.callback(to_page);
    }
  }
};
</script>

<style lang="less">
.pager-wrapper{
  padding: 10px 0;
  .pager{
    display: inline;
    float: right;
    span{
      display: inline;
      float: left;
      width: 34px;
      height: 34px;
      line-height: 34px;
      text-align: center;
      border: 1px #ddd solid;
      border-left: 0;
      cursor: pointer;
    }
    span:hover, span.active{
      background-color: #f3f3f3;
    }
    span:first-child{
      border-left: 1px #ddd solid;
      border-radius: 4px 0 0 4px;
    }
    span:last-child{
      border-radius: 0 4px 4px 0;
    }
    span:first-child:last-child{
      border-radius: 4px;
    }
  }
}
</style>