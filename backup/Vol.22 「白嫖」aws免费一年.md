# 配置服务器

🔖### 1. 注册aws账号（需要信用卡，验证时会扣除1美元或等值的货币）
https://aws.amazon.com/cn/campaigns/nc20241101/

🔖### 2. 选择免费额度的配置来创建一个EC2实例
    名称：任意
    系统：任意（选择平时常用系统  **Ubuntu**）
    硬件配置（选择默认的免费）
    实例类型（默认的**t2.micro**）
    存储（免费最大30GB）
    
　创建密钥（保存为`xxx.pem`，下载到本地， ssh联接用）
    创建安全组（允许`SSH ✓`，`HTTP ✓`，`HTTPS  ✓`） 

🔖### 3. 确认一下实体配置信息，启动实体

🔖### 4. 进入实体，查看公有IP，进行ssh链接，使用下载到本地的密钥（`xxx.pem`） ，选择Ubuntu的话，默认用户名：`ubuntu
　　例如：公有IPv4：18.181.184.67
　　ssh -i "aws_ubuntu.pem" ubuntu@ec2-18-181-184-67.ap-northeast-1.compute.amazonaws.com

🔖### 5. `sudo -i`  进入root权限
查看硬件配置
```
CPU：lscpu
内存：free -h
磁盘容量：df -h
OS版本：cat /etc/issue
```

🔖### 6. 安装Docker
```
curl -fsSL https://get.docker.com | sh    #安装Docker
systemctl enable --now docker             #启动Docker服务
docker -v                                 #查看docker版本，检查是否安装成功
docker ps -a                            #查看docker中所有容器
```


🔖### 7. 开放端口，设置安全组
`Gmeek-html<img src="../imgs/aws_security_rull.png">`

> [!TIP]
> http 的默认端口: 80
> https 的默认端口: 433
> ssh 的默认端口: 22
> telnet 的默认端口: 23
> ftp 的默认端口: 20 和 21 ，  20负责连接，21负责传输数据
> sftp 的默认端口: 22




🔖### 8. 常见问题

《无法ping的解决方案》
首先Ping只是向服务器发送ICMP的数据包，如果在服务器的防火墙没有允许ICMP协议的数据包的话，那么即使服务器正常运行，那也是ping不同的。
对于亚马逊云服务器，首先我们要确保实例绑定的安全组允许icmp协议的数据包通过。
进入无法ping通的实例，进入它的安全组，添加ICMP的记录
```
类型：ICMP 协议：ICMP  端口范围：全部  来源：0.0.0.0/0
```


《外网不能访问》
外网访问不了的原因不外乎有 2 个：
1. 防火墙
linux 上的防火墙就是 firewall 了，可以用下面的任意一种方式查看是否开启了防火墙：

```
firewall-cmd --state
systemctl status firewalld
status iptables.service
```

2. 安全组
像阿里云、亚马逊的 linux 实例里面都设置有安全组。
安全组起着虚拟防火墙的作用，可控制一个或多个实例的流量。安全组的设置在阿里云或亚马逊的后台里面设置。
比如说我的 AWS EC2 在外网不能访问，就是因为安全组没有对外开启 80 端口。所以只需要在 AWS EC2 后台的安全组里面设置如下规则即可：
```
类型：http 协议：TCP  端口范围：80   来源：0.0.0.0/0
类型：https 协议：TCP 端口范围：433  来源：0.0.0.0/0
```
