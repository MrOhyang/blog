const warnTpl = require('./warnTpl.vue');
const alertTpl = require('./alertTpl.vue');

const vueDialog = {};

vueDialog.install = function(Vue, options) {

  const warnComp = Vue.extend(warnTpl);
  const alertComp = Vue.extend(alertTpl);

  // 添加实例方法

  /**
   * @desc warn toast 弹层
   * @param {string} msg - 提示内容
   */
  Vue.$warn = Vue.prototype.$warn = (msg) => {
    new warnComp({
      propsData: {
        msg: msg
      }
    }).$mount();
  };

  /**
   * @desc alert 弹层
   * @param {object}   options       -
   * @param {string}   options.title - 标题 - 默认: '提示'
   * @param {string}   options.msg   - 内容
   * @param {function} options.ok    - 点击确认键的回调函数
   */
  Vue.$alert = Vue.prototype.$alert = (options) => {
    new alertComp({
      propsData: options
    }).$mount();
  };
};

module.exports = vueDialog;