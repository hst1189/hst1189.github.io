# 安装flutter
1. Download the Flutter SDK bundle（flutter_windows_3.47.0-stable.zip）https://docs.flutter.dev/install/manual
2. 解压缩 Flutter SDK
3. 添加环境变量  add the Flutter SDK's `bin` directory to your `PATH` environment variable.
```
flutter --version
dart --version
flutter doctor -v
``` 

# VS Code   插件
1. Flutter
2. Flutter Widget Snippets　快捷键
3. Awesome Flutter Snippets　快捷键

# 组件
## 基础组件MaterialApp
```
MaterialApp
　∟title　标签栏
　∟theme　主题
　∟home　主体
　　∟Scaffold      骨架
　　　∟appBar　顶部标题栏
　　　∟body　主页面
　　　∟bottomNavigationBar　底部导航栏
　　　∟backgroundColor　背景色
　　　∟floatingActionButton　悬浮按钮
　　　∟etc.
```

## 自定义组件
・statelessWidget 
・statefulWidget

### statefulWidget的生命周期
创建阶段：createState -> initState -> didChangeDependencies -> build
更新阶段：didUpdateWidget -> build
销毁阶段：deactivate -> dispose

阶段| 函数名| 调用时机 & 核心任务|
---|---|---
创建阶段 | createState( ) |  Widget初始化调用，创建State对象，`仅执行一次`
创建阶段 | initState( ) | State对象插入Widget立刻执行，`仅执行一次`
创建阶段 | didChangeDependencies( ) | initState()后立刻执行，当所依赖的`inheritedWidget *` 更新时调用，可能多次
构建和更新阶段 | build( ) | 构建UI方法，初始化或更新后，多次调用
构建和更新阶段 | didUpdateWidget( ) | 父组件传入新配置时调用，用于比较新旧配置
销毁阶段 | deactivate( ) | State对象，暂时移除时调用
销毁阶段 | dispose( ) | State对象，永久移除时调用，释放资源，`仅执行一次`

> [!TIP] 
> inheritedWidget：专门用于Widget树中，自顶向下高效的共享数据，顶层组件提供数据，子孙节点直接获取



