import Vue from 'vue'
import Router from 'vue-router'

// 首页相关
import index from '@/pages/index/index.vue'

// 文章相关
import article from '@/pages/article/article.vue'

// 后台管理页面相关
import admin from '@/pages/admin/admin.vue'
import blogList from '@/pages/admin/blogList.vue'
import addblog from '@/pages/admin/addBlog.vue'

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: __dirname,
  linkActiveClass: 'active',  // 全局配置 默认 class 激活类名
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }
    ,{
      path: '/article/:aid',
      name: 'article',
      component: article
    }
    ,{
      path: '/admin',
      component: admin,
      children: [
        {
          path: 'bloglist',
          component: blogList
        }
        ,{
          path: 'addblog',
          component: addblog
        }
        ,{
          path: '',
          redirect: 'bloglist'
        }
      ]
    }
    ,{
      path: '*',  // 不存在的地址自动跳转
      redirect: '/'
    }
  ]
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;