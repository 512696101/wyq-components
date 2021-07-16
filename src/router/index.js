import Vue from 'vue'
import VueRouter from 'vue-router'
import TagInput from '../views/form.vue'

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'TagInput',
    component: TagInput
  },
  {
    path: '/Import',
    name: 'Import',
  
    component: () => import('../views/FileList.vue')
  },
  {
    path: '/Export',
    name: 'Export',
    component: () => import( '../views/ExportList.vue')
  },
  {
    path: '/dome',
    name: 'dome',
    component: () => import( '../views/dome.vue')
  },
  {
    path: '/tree',
    name: 'tree',
    component: () => import( '../views/Tree.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
