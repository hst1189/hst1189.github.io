# 1. 安装Ubuntu系统🔖
Linux发行版Ubuntu24.04LTS　　※LTS的意思是"长期支持"
https://ubuntu.com/

#### ・查看硬件配置
```
OS版本：cat /etc/issue
CPU：lscpu
内存：free -h
磁盘容量：df -h
```

#### ・系统清理
```
sudo apt autoremove  ※自动删除无用软件包
sudo apt autoclean　　※自动清除软件包缓存
```

#### ・系统更新
```
sudo apt update
sudo apt upgrade
```

```javascript
#!/bin/bash
# Ubuntu系统维护脚本

# 1. 更新软件包列表并升级所有软件包
echo "更新软件包列表..."
sudo apt update && sudo apt upgrade -y

# 2. 清理无用软件包及缓存
echo "清理无用软件包..."
sudo apt autoremove -y
echo "清理软件包缓存..."
sudo apt autoclean

# 3. (可选) 进行ClamAV病毒扫描（需先安装ClamAV）
# echo "启动ClamAV扫描..."
# sudo clamscan -r --remove /home

# 4. (可选) 清理过大的日志文件（如大于50M的日志）
echo "检查并清理过大的日志文件..."
find /var/log -type f -name "*.log" -size +50M -exec sudo truncate -s 0 {} \;

echo "系统维护任务已完成。"
```


#### ・配置防火墙 ufw
```
sudo ufw status　　　※status: inactive
sudo ufw allow ssh   ※重要！有効化前にSSHを許可
sudo ufw enable
sudo ufw status　　　※status: active
```

操作 | コマンド |  説明
-- | -- | --
enable | sudo ufw enable |　开启防火墙
disable | sudo ufw disable |　关闭防火墙
allow | sudo ufw allow 80 |　TCP/UDPポート80を許可 (デフォルトTCP
deny | sudo ufw deny 23 |　ポート23(telnet)拒否
delete | sudo ufw delete allow 80 |　ALLOWしたルールを削除
status | sudo ufw status |　現在のルール一覧と詳細



#### ・サービス一覧
```
sudo systemctl list-unit-files -t service | grep enabled　※起動時に有効化されるサービスの一覧
sudo systemctl list-unit-files -t service | grep disabled　※起動時に無効化されるサービスの一覧
```

操作 | コマンド
-- | --
サービスステータス表示（全体） | systemctl status
サービスステータス表示（個別） | systemctl status docker
サービス自動起動有効 | systemctl enable
サービス自動起動無効 | systemctl disable
サービス起動 | systemctl start
サービス停止 | systemctl stop
サービス再起動 | systemctl restart 
サービスリロード | systemctl reload
サービス一覧 | systemctl list-unit-files -t service



#### ・查看端口
```
sudo netstat -tunlp   查看端口是否使用
```








# 2. 绑定静态IP🔖
打开路由器设置--->局域网设置-->DHCP静态IP设置，分配一个固定IP，比如192.168.0.100。配置完成后记得重启路由器。
这样即使重启服务器或者路由器，IP地址就不会变来变去了。 



# 3. 设置笔记本合盖不休眠 🔖
配置文件
```
/etc/systemd/logind.conf
```
#HandleLidSwitch=suspend
↓
HandleLidSwitch=ignore

重启服务
```
service systemd-logind restart
```

配置说明
```
HandlePowerKey: 按下电源键后的行为，默认power off
HandleSleepKey: 按下挂起键后的行为，默认suspend
HandleHibernateKey: 按下休眠键后的行为，默认hibernate
HandleLidSwitch: 合上笔记本盖后的行为，默认suspend

如果主机插入了一个扩展(docking station) 或者连接了多个显示器， 那么"合上盖子"将执行 HandleLidSwitchDocked= 动作；
如果主机使用外部电源， 那么"合上盖子"将优先执行 HandleLidSwitchExternalPower= 动作, 否则将执行 HandleLidSwitch= 动作。

参数说明:
ignore(无操作),
poweroff(关闭系统并切断电源),
reboot(重新启动),
halt(关闭系统但不切断电源),
kexec(调用内核"kexec"函数),
suspend(休眠到内存),
hibernate(休眠到硬盘),
hybrid-sleep(同时休眠到内存与硬盘),
suspend-then-hibernate(先休眠到内存超时后再休眠到硬盘),
lock(锁屏)
```



# 4. 安装RustDesk远程操作🔖
4-1. 通过github下载Ubuntu版本：https://github.com/rustdesk/rustdesk/releases
https://github.com/rustdesk/rustdesk/releases/download/1.3.5/rustdesk-1.3.5-x86_64.deb       ※目前最新版本1.3.5

4-2. 将安装包`.deb` 放在桌面，右键打开命令行、执行以下两个命令
```
sudo apt update
sudo apt install ./rustdesk-1.3.5-x86_64.deb
```

4-3. 安装好rustdesk，我们需要进行一些设置，Ubuntu默认的显示器程序是`wayland`
在息屏状态下远程软件无法唤醒屏幕、为了能唤醒屏幕需要改成`xorg`
```
sudo vi /etc/gdm3/custom.conf
```
修改下面这一行、将前面的注释去掉，然后点击`ESC`，然后输入 `:wq!` 保存文件
```
# WaylandEnable=false     
⬇
WaylandEnable=false
```

4-4. 然后重启桌面
```
sudo systemctl restart gdm3
```

4-5. 设置Rustdesk
打开Rustdesk 设置两个地方
设置->安全->允许IP直接访问 **默认端口 21118**，这样在家里就可以不使用中继服务器，而是IP直连，提高速度
设置->安全->密码 使用固定密码，这样主控方就可以使用固定密码控制




# 5. OpenSSH🔖
添加ssh的远程访问功能、这样就可以通过ssh的方式链接。
```
sudo apt install openssh-server
```

【链接方式】输入ssh命令、然后输入密码
```
ssh 用户名@192.168.0.100    #路由设置里所绑定的静态IP
```



# 6. SMB文件共享🔖
可以在Ubuntu服务器上开启SMB文件共享，构建文件共享服务，
这样可以很方便的在手机电脑上查看服务器上文件（包括电影，电视剧等）

6-1. 安装
```
sudo apt install samba
```

6-2 创建共享文件夹
```
mkdir /home/用户名/share
chmod 755 /home/用户名/share
```

6-3 samba添加用户
可以添加SMB专用户，也可以系统默用户，以下系统默用户为例
```
sudo pdbedit -a -u ubuntu   #用户名=ubuntu
sudo pdbedit -L             #确认用户
```

6-4 修改配置文件、最下面粘贴这些内容
```
sudo vi /etc/samba/smb.conf
```

```
[share]  #对外显示的共享名
path = /home/用户名/share  #指定共享文件夹
available = yes
browseable = yes
public = yes
writable = yes
create mask = 0755
security = share
force user = 用户名 #更改用户名
force group =用户名 #更改用户名
```
点击`ESC`，然后输入 `:wq!` 保存文件


6-5.  重启smb服务
```
sudo service smbd restart
```

6-6 Window链接方式：
地址栏输入IP，然后输入服务器的用户名和密码
```
\\192.168.0.100\share    #路由设置里所绑定的静态IP
```




# 7. 安装Docker🔖
安装docker本体，需要执行以下命令。
```
sudo curl -fsSL https://get.docker.com | sh    #安装Docker
sudo systemctl enable --now docker        #启动Docker服务
sudo docker -v                            #查看docker版本，检查是否安装成功
sudo docker ps -a                       #查看docker中所有容器
```
[Vol.32 Docker入門](https://grapehut.dpdns.org/post/32.html)


> 引用：https://www.bilibili.com/video/BV1Gb421a7BW/
> 引用：https://gitee.com/tech-shrimp/me/blob/master/doc/240502.md

