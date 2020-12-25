import Vue from "vue";
import VueRouter from "vue-router";

// 导入路由模块
import listRouter from './routes/list'

Vue.use(VueRouter);

const routes = [
    // 注册路由模块
    listRouter,
    {
      path: "/",
      redirect: "/list",
  }
];

const router = new VueRouter({
    mode: "history",
    // 前缀暂时可以不用使用
    // base: process.env.BASE_URL,
    routes,
});

export default router;
