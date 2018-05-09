
# 框架介绍
基于vue-cli,vant框架的移动端开发脚手架

# 增加特性（都是小改）
1、增加flexible适配方案
2、vant 商城主题UI框架
3、增加vuex，划分模块
4、使用keep-alive结合vuex动态指定页面keep alive
5、封装axios模块，使用axios.interceptors 拦截处理request，response

# 安装使用

1、clone项目
```
git clone https://github.com/linweiwei123/atong-mobile-generator.git
```

2、安装npm包依赖
```
npm install
```

3、启动
服务端和客户端都是
```
npm run start
```
访问  http://localhost:8080

# client_src 开发目录介绍

所有业务代码都在src下

```
C:.
├─assets
├─common
├─components
├─modules
├─router
└─store
    └─modules

```
- assets 是资源文件目录，包含css，图片，字体等
- common 是公共目录，存放http请求模块
- router 是路由
- store 是vuex 全局数据在这里操作
- modules 页面基本组件
- components 通用组件

****基础http请求模块在common下的 mhttp.js****


