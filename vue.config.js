module.exports = {
    // 开发服务器设置
    devServer: {
        // 配置是否自动打开浏览器
        open: true,
        // 设置 npm run serve 启动后的端口号
        port: 3000,
        // 如果你开始了eslint,不要让eslint在页面中遮罩，它错误会在console.log控制台打印
        overlay: false,
    },
};