
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

# 新增一个页面需要注意的步骤🤸
1. modules中创建页面，如果页面中有小组件则在components中开发，所有的css、js、html 都在这个vue文件中写
2. 在router中注册页面路由，注意是否需要懒加载，demo中有范例
3. 引入你需要的vant组件，具体查找vant官网来使用
4. 如果你的页面中是全局的数据，请用vuex来操作，在store目录下创建模块，具体如果创建请参考范例
5. 👏 好了，开始业务开发！开发少不了用到http请求，在common下有个mhttp.js模块，，是基于axios封装的，请愉快的使用，不懂就问

# 编译输出
开发完成了，要输出文件执行下面的命令
```
npm run build
```
看到dist文件夹下有内容输出了，请交付里面的内容即可

