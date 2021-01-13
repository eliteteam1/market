import Vue from 'vue'
import VueRouter from 'vue-router'
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch((err) => err);
};

Vue.use(VueRouter)
import centerRouter from './routes/center'
import cartRouter from './routes/cart'
import listRouter from './routes/list'
// 导入路由模块
import Home from '@/views/home/Home.vue'
import Missing from '@/views/home/Missing.vue'
import List from '@/views/Lists/List.vue'


const routes = [
  ...centerRouter,
  cartRouter,
  ...listRouter,
  {
    path: "/home", component: Home
  },
  {
    path: "/", redirect: "/home"
  },
  {
    path: '*',
    component: Missing,
  },
  {
    path: "/list", component: List
  },
  
]

const router = new VueRouter({
  routes
})

export default router
