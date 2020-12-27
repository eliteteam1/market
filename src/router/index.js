import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import centerRouter from './routes/center'
import mainRouter from './routes/main'
import cartRouter from './routes/cart'
import listRouter from './routes/list'


const routes = [
  ...centerRouter,
  mainRouter,
  cartRouter,
  listRouter,
  {path: '/' , redirect:'/main' }
]

const router = new VueRouter({
  routes
})

export default router
