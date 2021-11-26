import { createRouter, createWebHashHistory } from 'vue-router'

export const children = [
  {
    path: '/reportManagement',
    name: 'ReportManagement',
    meta: {
      title: '报表管理',
      icon: 'Reading',
    },
    component: () => import('@/views/Report'),
  },
  {
    path: '/userManagement',
    name: 'userManagement',
    meta: {
      title: '用户管理',
      icon: 'UserFilled',
    },
    component: () => import('@/views/User'),
  },
  {
    path: '/roleManagement',
    name: 'RoleManagement',
    meta: {
      title: '角色管理',
      icon: 'Avatar',
    },
    component: () => import('@/views/Role'),
  },
  {
    path: '/tableuu',
    name: 'Tableuu',
    meta: {
      title: 'tableuu账号',
      icon: 'CreditCard',
    },
    component: () => import('@/views/Tableuu'),
  },
  {
    path: '/log',
    name: 'Log',
    meta: {
      title: '日志中心',
      icon: 'Discount',
    },
    component: () => import('@/views/Log'),
  },
]
export const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Nav'),
    children,
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
