import Vue from 'vue'
import Router from 'vue-router'

// import Create from '@/view/Create/template.vue'
// import Detail from '@/view/Detail/template.vue'
// import Edit from '@/view/Edit/template.vue'
// import Edit from '@/view/Index/template.vue'
// import Login from '@/view/Login/template.vue'
// import My from '@/view/My/template.vue'
// import Register from '@/view/Register/template.vue'
// import User from '@/view/User/template.vue'

import store from '../store'

window.store = store

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: ()=>import('@/view/Index/template.vue')
    },
    {
      path: '/create',
      component: ()=>import('@/view/Create/template.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/detail/:blogId',
      component: ()=>import('@/view/Detail/template.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/edit/:blogId',
      component: ()=>import('@/view/Edit/template.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      component: ()=>import('@/view/Login/template.vue')
    },
    {
      path: '/my',
      component: ()=>import('@/view/My/template.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/register',
      component: ()=>import('@/view/Register/template.vue')
    },
    {
      path: '/user/:userId',
      component: ()=>import('@/view/User/template.vue')
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    store.dispatch('checkLogin').then(isLogin => {
      if (!isLogin) {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      } else {
        next()
      }
    })
  } else {
    next() // 确保一定要调用 next()
  }
})

export default router
