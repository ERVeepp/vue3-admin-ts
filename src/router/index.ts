import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout'
import { router_type } from '@/types/router'

/*此处扩展了routeItem的类型*/
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/Login.vue'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/hook',
    meta: { title: '示例', icon: 'dashboard' },
    alwaysShow: true,
    children: [
      {
        path: 'hook',
        component: () => import('@/views/example/hook/Hook.vue'),
        name: 'Hook',
        meta: { title: 'Hook示例', icon: 'dashboard' }
      },
      {
        path: 'vuex-use',
        component: () => import('@/views/example/vuex-use/VuexUse.vue'),
        name: 'VuexUse',
        meta: { title: 'vuex示例', icon: 'dashboard' }
      },
      {
        path: 'mock-test',
        component: () => import('@/views/example/mock-test/MockTest.vue'),
        name: 'MockTest',
        meta: { title: 'Mock示例', icon: 'dashboard' }
      },
      {
        path: 'svg-icon',
        component: () => import('@/views/example/svg-icon/SvgIcon.vue'),
        name: 'SvgIcon',
        meta: { title: 'Svg示例', icon: 'dashboard' }
      }
    ]
  }
]

//此处将动态路由导出
//此处将动态路由导出
export const asyncRoutes = [
  {
    path: '/release',
    component: Layout,
    meta: { title: '发布', icon: 'form' },
    alwaysShow: true,
    code: 1,
    redirect: '/release/dbc-file',
    children: [
      {
        path: 'dbc-file',
        component: () => import('@/views/release/DBCFile.vue'),
        name: 'DBCFile',
        code: 1,
        meta: { title: 'DBC文件', icon: 'form' }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: constantRoutes
})

export default router
