# Shadowsocks(SS)、ShadowsocksR(SSR)、V2Ray、Clash、Trojan等科学上网协议

### Shadowsocks是什么？
Shadowsocks（简称SS）是一种基于Socks5代理方式的加密传输协议，也可以指实现这个协议的各种开发包，大家常说的SS科学上网这里说的就是Shadowsocks协议。Shadowsocks分为服务器端和客户端，在使用之前，需要先将服务器端程序部署到服务器上面，然后通过客户端连接并创建本地代理。


### ShadowsocksR是什么？
ShadowsocksR（简称SSR）是网名为breakwa11的用户发起的Shadowsocks分支，在Shadowsocks的基础上增加了一些资料混淆方式，称修复了部分安全问题并可以提高QoS优先级。后来贡献者Librehat也为Shadowsocks补上了一些此类特性，甚至增加了类似Tor的可插拔传输层功能，大家常说的SSR翻墙这里说的就是ShadowsocksR协议，跟Shadowsocks一样，ShadowsocksR分为服务器端和客户端，在使用之前，需要先将服务器端程序部署到服务器上面，然后通过客户端连接并创建本地代理。


### V2Ray是什么？
V2ray使用VMess协议，VMess是一个加密传输协议，是基于V2Ray内核的自研协议，它分为入站和出站两部分，通常作为V2Ray客户端和服务器之间的桥梁，大家常说的V2Ray翻墙就是使用VMess协议，VMess协议在使用之前，需要先将服务器端程序部署到服务器上面，然后通过客户端连接并创建本地代理。

和Shadowsocks不同的一个地方就是，V2Ray是一个内核程序，它不是单独运行的，V2Ray是一个框架，对开发者来说更加自由和方便，就像积木一样，可以按照自己的使用场景把翻墙梯子搭出来，如：
vmess
vmess + tls
vmess + websocket + tls
vmess + websocket + tls + Nginx
vmess + websocket + tls + Nginx + cloudfare（CDN）
从上至下，随着嵌套的协议越多，自然而然翻墙的速度也就越慢，当然安全性也就越来越高


### Trojan是什么？
Trojan是一种利用TLS加密方式的协议，Trojan通过将通信流量伪装成常见的HTTPS流量，来防止流量被检测和干扰，以此来达到翻墙的目的，但是无法配合CDN使用。






# 客户端

### v2rayN、v2rayNG
v2rayN是Windows系统下的代理软件客户端，功能强大且支持多种代理协议，如VMess、VLESS、Trojan、Socks、Shadowsocks、Hysteria2、Tuic等代理协议。

Windows下载地址：[2dust/v2rayN](https://github.com/2dust/v2rayN/releases/) 
Android下载地址： [2dust/v2rayNG](https://github.com/2dust/v2rayNG/releases/) 

##### 通用说明
发布包中含部分 Core 文件（Xray，sing-box, mihomo），方便使用；其他 Core 需要自己去下载，[支持的核心列表](https://github.com/2dust/v2rayN/wiki/List-of-supported-cores)
zip格式包为便携版，解压缩到文件夹后直接可以运行，存储文件位置为本文件夹；可以复制多份互相独立

##### Windows x64
v2rayN-windows-64.zip WPF实现的界面，需要安装 [Microsoft .NET 8.0 Desktop Runtime]
v2rayN-windows-64-SelfContained.zip WPF实现的界面
v2rayN-windows-64-desktop.zip Avalonia UI 实现的界面
其他 Core 你可以从 [这里](https://github.com/2dust/v2rayN-core-bin/blob/master/v2rayN-windows-64-other-bins.zip) 下载后放入 bin 文件夹


##### 主界面
`Gmeek-html<img src="https://v2rayn.org/wp-content/uploads/2024/01/1706544977-v2rayN-interface-cn.jpg">`


##### 订阅分组
`Gmeek-html<img src="https://v2rayn.org/wp-content/uploads/2024/01/1706686626-v2rayN-Subscription-Group.jpg">`
`Gmeek-html<img src="https://v2rayn.org/wp-content/uploads/2024/01/1706686836-v2rayN-Subscription-Group-Settings-add-Subcription.jpg">`
`Gmeek-html<img src="https://v2rayn.org/wp-content/uploads/2024/01/1706687443-v2rayN-Subscription-Group-Update-Subscription-without-Proxy.jpg">`

##### 剪贴板导入
首先复制节点服务器的连接地址，不同协议的地址如下所示。
`Gmeek-html<img src="https://v2rayn.org/wp-content/uploads/2024/01/1706694515-v2rayN-add-Server-from-Clipboard.jpg">`

```
配置V2Ray节点，选择 添加[VMess]服务器
VMESS服务器即v2Ray节点地址：vmess://

配置Xray节点，选择 添加[VLESS]服务器
VLESS服务器即Xray节点地址：vless://

配置Shadowsocks节点，选择 添加[Shadowsocks]服务器
Shadowsock服务器节点地址：ss://

配置Socks节点，选择 添加[Socks]服务器
Socks服务器节点地址：socks5://

配置Trojan节点，选择 添加[Trojan]服务器
Trojan服务器节点地址：trojan://

配置Hysteria2节点，选择 添加[Hysteria2]服务器
Hysteria2服务器节点地址：hysteria2://

配置Tuic节点，选择 添加[Tuic]服务器
Hysteria2服务器节点地址：tuic://
```

##### 启动代理
首先复制节点服务器的连接地址，不同协议的地址如下所示。
`Gmeek-html<img src="https://v2rayn.org/wp-content/uploads/2024/02/1707289273-v2rayN-Choose-Node.jpg">`


> [!TIP]
> 路由模式
> 路由的功能是将入站数据按需求由不同的出站连接发出，以达到按需代理的目的。
> 这一功能的常见用法是分流国内外流量，可以通过内部机制判断不同地区的流量，然后将它们发送到不同的出站代理，
> 有以下三种路由模式可以选择。
> - 绕过大陆(Whitelist)模式：即原先版本里的白名单，只是白名单内的网站通过节点服务器代理上网
> - 黑名单(Blacklist)模式：除了黑名单内的网站，其余网站都通过节点服务器代理上网
> - 全局(Global)模式：所有网站通过节点服务器代理上网

> [!TIP]
> 系统代理：自动修改操作系统的代理设置、能处理大部分通过浏览器的科学上网需求。
> Tun 模式：在系统中安装虚拟网卡，以接管不支持“系统代理”的程序（例如游戏和命令行）


##### 开机启动
`Gmeek-html<img src="https://v2rayn.org/wp-content/uploads/2024/01/1706695342-v2rayN-Settings-OptionSetting-v2rayN-Settings.jpg">`

> [!TIP]
> 图标状态
> 图标 | 软件状态 | 说明
> -- | -- | --
> 蓝色  | 清除系统代理 | 每次启动/重启服务的时候，强制把windows系统(ie)的代理清除掉。
> 红色  | 自动配置系统代理 | 每次启动/重启服务的时候，强制设定windows系统(ie)的代理。
> 紫色  | 不改变系统代理 | 每次启动/重启服务的时候，什么都不做。作用就是保留其他软件设定的代理。

---

##### 手机端设置
`Gmeek-html<img src="https://v2rayng.org/wp-content/uploads/2024/02/1707373922-v2rayNG-add-Config-File.jpg">`

`Gmeek-html<img src="https://v2rayng.org/wp-content/uploads/2024/02/1707374197-v2rayNG-System-Subscription.jpg">`
`Gmeek-html<img src="https://v2rayng.org/wp-content/uploads/2024/02/1707374229-v2rayNG-System-Subscription-Setting.jpg">`
`Gmeek-html<img src="https://v2rayng.org/wp-content/uploads/2024/02/1707374269-v2rayNG-System-Subscription-Update-Success.jpg">`

##### 手机端选择代理服务器
绿色代表选中，灰色代表未选中
`Gmeek-html<img src="https://v2rayng.org/wp-content/uploads/2024/02/1707374297-v2rayNG-Node-Status.jpg">`

##### 手机端启动代理
`Gmeek-html<img src="https://v2rayng.org/wp-content/uploads/2024/02/1707374344-v2rayNG-Node-Start.jpg">`
`Gmeek-html<img src="https://v2rayng.org/wp-content/uploads/2024/02/1707374365-v2rayNG-Node-Start-Success-686x1536.jpg">`

---




### Clash Verge Rev

Clash Verge Rev官网：https://www.clashverge.dev/guide/quickstart.html
下载地址：https://github.com/clash-verge-rev/clash-verge-rev/releases

##### 主界面
`Gmeek-html<img src="https://www.clashverge.dev/assets/preview_dark.png">`

##### 通过机场或者自建订阅导入节点和配置文件
`Gmeek-html<img src="https://www.clashverge.dev/assets/guide/quickstart/verge_import.png">`

##### 选择节点和模式
`Gmeek-html<img src="https://www.clashverge.dev/assets/guide/quickstart/verge_proxy.png">`

> [!TIP]
> 规则模式：根据配置文件中的规则(集)进行条件匹配，决定流量是从哪个代理节点/本地网络出去。
> 全局模式：所有流量均从手工选定的代理节点/本地网络出去。
> 直连模式：所有流量均从本地网络出去。

##### 打开代理(或开启 Tun 模式)
`Gmeek-html<img src="https://www.clashverge.dev/assets/guide/quickstart/verge_enable_sysproxy.png">`

> [!TIP]
> 系统代理：自动修改操作系统的代理设置、能处理大部分通过浏览器的科学上网需求。
> Tun 模式：在系统中安装虚拟网卡，以接管不支持“系统代理”的程序（例如游戏和命令行）





### mihomo-party
官网：https://mihomo.party/
下载地址：https://github.com/mihomo-party-org/mihomo-party/releases/

##### 导入订阅
`Gmeek-html<img src="https://mihomo.party/_next/static/media/import_sub.19140a53.png">`
`Gmeek-html<img src="https://mihomo.party/_next/static/media/party_nodes.00697277.png">`

##### 模式选择
`Gmeek-html<img src="https://mihomo.party/_next/static/media/party_mode.55cdb845.png">`





### MetaCubeX/ClashMetaForAndroid
下载地址：https://github.com/MetaCubeX/ClashMetaForAndroid/releases/




# 全平台客户端推荐

客户端 | Windows | macOS | Linux | iOS | Android | 路由器 | 備考
-- | -- | -- | -- | -- | -- | --| --
Clash for Android |   |   |   |   | ✔ |  |❌删库  
Clash for Windows | ✔ | ✔ | ✔ |   |   |  |❌删库  
Clash Mi | ✔ | ✔ |   | ✔ | ✔ |  
Clash Nyanpasu | ✔ | ✔ | ✔ |   |   |  
Clash Verge | ✔ | ✔ | ✔ |   |   |  | ❌删库
Clash Verge Rev | ✔ | ✔ | ✔ |   |   |  |🥇  
ClashN | ✔ |   |   |   |   |  
ClashX |   | ✔ |   |   |   |  
ClashX Meta |   | ✔ |   |   | ✔  |  | 🥇
ClashX Pro |   | ✔ |   |   |   |  
FlClash | ✔ | ✔ | ✔ |   | ✔ |  
Hiddify Next | ✔ | ✔ | ✔ | ✔ | ✔ |  
Mihomo Party | ✔ | ✔ | ✔ |   |   |  | 🥇  
NekoBox for Android |   |   |   |   | ✔ | | 
NekoRay | ✔ |   | ✔ |   |   |  |
OpenClash |   |   |   |   |   | ✔
PassWall2 |   |   |   |   |   | ✔
Potatso Lite |   |   |   | ✔ |   |  
Quantumult |   |   |   | ✔ |   |  
Quantumult X |   | ✔ |   | ✔ |   |  
Shadowrocket |   |   |   | ✔ |   |  
ShadowsocksR Plus+ |   |   |   |   |   | ✔
sing-box | ✔ | ✔ | ✔ | ✔ | ✔ |  
Stash |   | ✔ |   | ✔ |   |  
Surfboard |   |   |   |   | ✔ |  
Surge iOS |   |   |   | ✔ |   |  
Surge Mac |   | ✔ |   |   |   |  
v2rayN | ✔ |   |   |   |   |   | 🥇
v2rayNG |   |   |   |   | ✔ |   | 🥇
V2rayU |   | ✔ |   |   |   |  
WinXray | ✔
