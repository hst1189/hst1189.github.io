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
2. Awesome Flutter Snippets

# 组件
## 基础组件MaterialApp
　∟title　标签栏
　∟theme　主题
　∟home　主体
　　∟Socffold
　　　∟appBar　顶部 title
　　　∟body　主页面
　　　∟bottomNavigationBar　底部导航栏
　　　∟backgroundColor　背景色
　　　∟floatingActionButton　悬浮按钮

## 自定义组件
・statelessWidget 
・statefulWidget

### statefulWidget的生命周期

阶段| 函数名| 调用实际 &核心任务|
---|---|---
| createState() |  
| initState() | 
| didChangeDependencies() | 

