import axios from "axios";

// 可以对axios进行封装
// 以前在学习使用axios的时候每次获取数据的结果都是从ret.data中获取
// 这种写法很是不方便，我们可以在此处对axios进行改造，让返回的ret就等同于以前的ret.data
// 拦截器：此处是对返回结果其实就是响应进行处理，所以得使用响应拦截器
axios.interceptors.response.use(ret => {
    // 将ret.data换成ret
    return ret.data || ret;
})

export default axios;