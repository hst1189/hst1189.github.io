# 方法一：claw.cloud 部署

### Claw Cloud爪云）部署 Vless       
```
Docker image：7techlife/seven
Cpu：0.2
Memory：256m
Port：80
Public Address：不公开 

部署后在logs里 查找 聚合链接 粘贴到V2ray
```


### Claw Cloud爪云）部署 Hysteria2       
```
Docker image：7techlife/sevenhy2
Cpu：0.1
Memory：64m
Port：7777
Public Address：选择udp:// 
部署后在logs里 查找下面链接 粘贴到V2ray
hy2:// 一次性强密码 @ public address（去掉udp://）?insecure=1&alpn=h3#sevenhy2

```


---

# 方法二：cf worker 部署



## 🔖 新建Worker
cf里创建一个worker（worker名字任意，如 cf996），初始脚本（work.js） 为默认Helloworld 即可
cf会自动生成worker网址   如：https://cf996.hst1189.workers.dev


## 🔖 脚本地址
替换默认脚本 work.js 后部署
为了防止ERROR1101 , 建议使用以下混淆代码
https://github.com/yonggekkk/Cloudflare-vless-trojan
　∟[Vless_workers_pages](https://github.com/yonggekkk/Cloudflare_vless_trojan/tree/main/Vless_workers_pages)
　∟[Trojan_workers_pages](https://github.com/yonggekkk/Cloudflare_vless_trojan/tree/main/Trojan_workers_pages)


## 🔖 Worker添加变量
### 1. Vless节点的变量设置

`Gmeek-html<img src="../imgs/vlessnode/clouDNS0.PNG">`

```
建议修改） uuid ⇒ 8cda8d90-9c66-4f59-8f98-d433d6238a8c
默认即可）proxyip ⇒ 默认443端口：ipv4地址、ipv6地址、域名（非443端口：ipv4地址/ipv6地址/域名：端口）
默认即可）ip1 ~ ip13 ⇒ 订阅节点：优选IP
默认即可）pt1 ~ pt13 ⇒ 订阅节点：优选IP对应端口
```

> [!TIP]
> uuid 获取方式
```
cmd ⇒ Powershell -NoExit -Command "[guid]::NewGuid()
```



## 2. Trojan节点的变量设置
```
建议修改）pswd ⇒ 万人骑密码：trojan
默认即可）proxyip ⇒ 默认443端口：ipv4地址、ipv6地址、域名（非443端口：ipv4地址/ipv6地址/域名：端口）
默认即可）ip1 ~ ip13 ⇒ 订阅节点：优选IP
默认即可）pt1 ~ pt13 ⇒ 订阅节点：优选IP对应端口
```


## 🔖 获取链接地址
上述变量设置以后，部署，更新网址 ↓
https://cf996.hst1189.workers.dev/8cda8d90-9c66-4f59-8f98-d433d6238a8c
打开此网址，找到里面的链接，黏贴到软件里即可



## 🔖 绑定域名（可选，被墙对策）
CF的worker 域名（https://*. workers.dev）被墙的话，可以通过绑定域名回避
1. CF里添加网站 cf996.ip-ddns.com（通过clouDNS免费获得）
2. clouDNS 添加DNS解释 A2个，NS2个（双向解析，如下图，必须和CF设置同步一致）
3. CF里的worker 绑定自定义域名（test.cf996.ip-ddns.com、※必须添加前缀，clouDNS的根域名无法绑定）
4. CF里自动添加 worker解析  ，相应的在clouDNS添加  worker的DNS解释 CNAME1个
5. 添加TSL的DNS解析  TXT2个（等待几分钟~数小时）


下图绑定 clouDNS的免费域名为例：
`Gmeek-html<img src="../imgs/vlessnode/clouDNS1.PNG">`
`Gmeek-html<img src="../imgs/vlessnode/clouDNS2.PNG">`
`Gmeek-html<img src="../imgs/vlessnode/clouDNS3.PNG">`

 
```
原始网址：
https://cf996.hst1189.workers.dev/8cda8d90-9c66-4f59-8f98-d433d6238a8c

绑定域名后：
https://test.cf996.ip-ddns.com/8cda8d90-9c66-4f59-8f98-d433d6238a8c
```





# 🔖 常用软件
1、安卓Android：[v2rayNG](https://github.com/2dust/v2rayNG/tags)、[Nekobox](https://github.com/starifly/NekoBoxForAndroid/releases)、[Karing](https://github.com/KaringX/karing/tags)、v2box

2、电脑Windows：[v2rayN](https://github.com/2dust/v2rayN/tags)、[Hiddify](https://github.com/hiddify/hiddify-next/tags)、[Karing](https://github.com/KaringX/karing/tags)

3、苹果Ios：Karing、Hiddify Proxy & VPN、Shadowrocket(小火箭)、Streisand、v2box

4、软路由Openwrt：[homeproxy](https://github.com/kiddin9/openwrt-packages)，建议使用系统自带的软件库查找更新

注意：其他平台客户端未开启分片功能情况下，workers域的6个443系TLS节点是不可用的

注意：Shadowrocket(小火箭)、v2box、v2rayn、v2rayng客户端对trojan+ws有强制开启TLS问题，造成trojan+ws不通。且clash订阅没有trojan+ws节点。特此说明


