import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'
import { getUserAuthRouter } from '@/api/table'
import { getRole, setRole } from '@/utils/auth'

export const constantRoutesDict = {
  "/login": {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  '/404': {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  // '/':{
  //   path: '/',
  //   component: Layout,
  //   redirect: '/dashboard',
  //   children: [{
  //     path: 'dashboard',
  //     name: 'Dashboard',
  //     component: () => import('@/views/phone-page/index'),
  //     meta: { title: '电话', icon: 'dashboard' }
  //   }]
  // },

  '/example':{
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
      }
    ]
  },
  '/form':{
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

  '/dailplan':{
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

  '/dailplan-add':{
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

  '/ivr': {
    path: '/ivr',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'IVR',
        component: () => import('@/views/ivr/index'),
        meta: { title: 'IVR', icon: 'form' }
      }
    ]
  },
  '/ivr-add':{
    path: '/ivr-add',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'IVR-ADD',
        component: () => import('@/views/ivr-add/index'),
        meta: { title: 'IVR-增加', icon: 'form' }
      }
    ]
  },
  '/directory':{
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
  '/directory-add': {
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
  // '/web-terminal':{
  //   path: '/web-terminal',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'WebTerminal',
  //       component: () => import('@/views/terminal/index'),
  //       meta: { title: 'web终端', icon: 'form' }
  //     }
  //   ]
  // },
  // '/web-rtc':{
  //   path: '/web-rtc',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'WebRTC',
  //       component: () => import('@/views/webrtc/index'),
  //       meta: { title: 'web-rtc', icon: 'el-icon-phone' }
  //     }
  //   ]
  // },
  '/record':{
    path: '/record',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'record',
        component: () => import('@/views/record/index'),
        meta: { title: '电话记录', icon: 'el-icon-s-order' }
      }
    ]
  }
}

export let constantRoutesLet = []
constantRoutesLet.push(constantRoutesDict['/login'])

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

  // {
  //   path: '/express_tree',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'Form',
  //       component: () => import('@/views/express_tree/flowchart'),
  //       meta: { title: '流程图', icon: 'el-icon-s-operation' }
  //     }
  //   ]
  // },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: '/dashboard',
  //   children: [{
  //     path: 'dashboard',
  //     name: 'Dashboard',
  //     component: () => import('@/views/phone-page/index'),
  //     meta: { title: '电话', icon: 'dashboard' }
  //   }]
  // },

  {
    path: '/',
    component: Layout,
    // redirect: '/example/table',
    name: 'Example',
    meta: { title: '配置', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: '网关展示', icon: 'el-icon-s-operation' }
      }
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
    path: '/ivr',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'IVR',
        component: () => import('@/views/ivr/index'),
        meta: { title: 'IVR', icon: 'form' }
      }
    ]
  },
  {
    path: '/ivr-add',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'IVR-ADD',
        component: () => import('@/views/ivr-add/index'),
        meta: { title: 'IVR-增加', icon: 'form' }
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
  // {
  //   path: '/web-terminal',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'WebTerminal',
  //       component: () => import('@/views/terminal/index'),
  //       meta: { title: 'web终端', icon: 'form' }
  //     }
  //   ]
  // },
  // {
  //   path: '/web-rtc',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'WebRTC',
  //       component: () => import('@/views/webrtc/index'),
  //       meta: { title: 'web-rtc', icon: 'el-icon-phone' }
  //     }
  //   ]
  // },
  // {
  //   path: '/callcenter',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'callcenter',
  //       component: () => import('@/views/callcenter/index'),
  //       meta: { title: 'callcenter', icon: 'el-icon-phone' }
  //     }
  //   ]
  // },
  {
    path: '/record',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'record',
        component: () => import('@/views/record/index'),
        meta: { title: '电话记录', icon: 'el-icon-s-order' }
      }
    ]
  },

  // {
  //   path: '/robot',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'callcenter',
  //       component: () => import('@/views/robot-page/index'),
  //       meta: { title: '机器人', icon: 'el-icon-phone' }
  //     }
  //   ]
  // },

  // {
  //   path: '/mypage',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'record',
  //       component: () => import('@/views/call-page/index'),
  //       meta: { title: '我的', icon: 'el-icon-s-order' }
  //     }
  //   ]
  // },
  // {
  //   path: '/phonepage',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'phone',
  //       component: () => import('@/views/phone-page/index'),
  //       meta: { title: '电话', icon: 'el-icon-s-order' }
  //     }
  //   ]
  // },
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
  debugger
  const newRouter = createRouter()
  // constantRoutesLet = [constantRoutesDict['/login']]
  // router.addRoutes(constantRoutesLet)
  router.matcher = newRouter.matcher // reset router
}

// export async function updateRouter() {

//   if(getRole()==undefined|| getRole() == null){
  
//   }else{
//     const data = await getUserAuthRouter({name:getRole()})
//     // constantRoutesLet = [constantRoutesDict['/login']]
//     for(var i=0; i<data.data.length; i++){
//       if (constantRoutesDict[data.data[i].routerName] != undefined || constantRoutesDict[data.data[i].routerName] != null){
//         constantRoutesLet.push(constantRoutesDict[data.data[i].routerName])
//       }
//     }
//     console.log(constantRoutesLet)
//     router.addRoutes(constantRoutesLet)
//   }

// }

// updateRouter()

export default router
