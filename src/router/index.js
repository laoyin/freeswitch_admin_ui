import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '面板', icon: 'dashboard' }
    }]
  },

  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: '配置', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: '网关展示', icon: 'el-icon-s-operation' }
      },
      // {
      //   path: 'tree',
      //   name: 'Tree',
      //   component: () => import('@/views/tree/index'),
      //   meta: { title: '网关增加', icon: 'tree' }
      // }
    ]
  },

  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: '网关增加', icon: 'el-icon-s-operation' }
      }
    ]
  },

  {
    path: '/dailplan',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Dailplan',
        component: () => import('@/views/dailplan/index'),
        meta: { title: '路由展示', icon: 'form' }
      }
    ]
  },

  {
    path: '/dailplan-add',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'DailplanAdd',
        component: () => import('@/views/dailplan-add/index'),
        meta: { title: '路由增加', icon: 'form' }
      }
    ]
  },
  {
    path: '/directory',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Directory',
        component: () => import('@/views/directory/index'),
        meta: { title: '分机展示', icon: 'el-icon-user-solid' }
      }
    ]
  },

  {
    path: '/directory-add',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'DirectoryAdd',
        component: () => import('@/views/directory-add/index'),
        meta: { title: '分机增加', icon: 'el-icon-user' }
      }
    ]
  },
  {
    path: '/web-terminal',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'WebTerminal',
        component: () => import('@/views/terminal/index'),
        meta: { title: 'web终端', icon: 'form' }
      }
    ]
  },
  {
    path: '/web-rtc',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'WebRTC',
        component: () => import('@/views/webrtc/index'),
        meta: { title: 'web-rtc', icon: 'el-icon-phone' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
