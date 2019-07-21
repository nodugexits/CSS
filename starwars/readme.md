## emmet 快捷输入
vscode 来自微软，内置了emmet 插件
- 使用css选择器来快速的语法
1. 类名选择器 .classname
2. > 父子选择器
3. + 兄弟选择器
4. [] 属性选择器
.starwars-demo>img*2[src="./images/"]

- 定位
css 布局的一种
position: absolute; <!-- 绝对定位-->
position: relative; body 是最顶层的定位
父级或一直往外查找，如果有定位元素，相对最近的长辈元素定位，否则就是body

- transfrom
变形属性 translate 移动 | scale 缩放 | rotate 旋转
三维世界 perspective 视点与屏幕的距离
transform-style: perserve3d;

- npm node 的工具管理包
live-server 静态页面提供了web-server 热更新
npm install -g live-server
js 的命令行工具运行在服务器端 