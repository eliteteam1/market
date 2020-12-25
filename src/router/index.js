import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)
import centerRouter from './routes/center'
import mainRouter from './routes/main'
import cartRouter from './routes/cart'
import listRouter from './routes/list'


const routes = [
  centerRouter,
  mainRouter,
  cartRouter,
  listRouter
]

const router = new VueRouter({
    mode: "history",
    // 前缀暂时可以不用使用
    // base: process.env.BASE_URL,
    routes,
});

export default router;
