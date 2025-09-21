# 前言
Omakub 是一个专为开发者设计的 Ubuntu 环境配置项目，由 Ruby on Rails 的创造者 David Heinemeier Hansson（DHH）发起。
其目标是通过一条命令将全新的 Ubuntu 系统转化为一个配置完备、美观且现代化的 Web 开发系统，简化开发环境的搭建过程。

官网：https://omakub.org


# 主要功能
- 一键式配置：通过一条命令即可完成所有配置。
- 预装工具：包括浏览器、终端、编辑器、通讯工具（如 WhatsApp、Signal、Spotify、Zoom、1Password）等。
- 版本控制：内置 GitHub CLI，方便进行版本控制和代码管理。
- 容器管理：预配置 MySQL 和 Redis 容器，提供 lazydocker 工具简化管理。
- 语言管理：使用 mise 工具管理 Ruby、Node.js、Python、Go、Java 等多种编程语言。
- 系统优化：调整 Ubuntu UI，提供快捷键操作和窗口平铺功能。

# 安装指南
安装 Omakub 只需以下步骤：

1. 在计算机上安装 Ubuntu 24.04+。
2. 打开终端（Ctrl+Alt+T），运行以下命令：
```
wget -qO- https://omakub.org/install | bash
```
整个安装过程大约需要 30 分钟，具体时间取决于网络状况。
安装完成后，系统会自动配置所有工具和设置。