# 1. 安装Ubuntu系统
Linux发行版Ubuntu24.04LTS　　※LTS的意思是"长期支持"
https://releases.ubuntu.com/24.04.1/ubuntu-24.04.1-desktop-amd64.iso


# 2. 绑定静态IP
打开路由器设置--->局域网设置-->DHCP静态IP设置，分配一个固定IP，比如192.168.0.100。配置完成后记得重启路由器。
这样即使重启服务器或者路由器，IP地址就不会变来变去了。 


# 3. 安装RustDesk远程操作
3-1. 通过github下载Ubuntu版本：https://github.com/rustdesk/rustdesk/releases
https://github.com/rustdesk/rustdesk/releases/download/1.3.5/rustdesk-1.3.5-x86_64.deb       ※目前最新版本1.3.5

3-2. 将安装包`.deb` 放在桌面，右键打开命令行、执行以下两个命令
```
sudo apt update
sudo apt install ./rustdesk-1.3.5-x86_64.deb
```

3-3. 安装好rustdesk，我们需要进行一些设置，Ubuntu默认的显示器程序是`wayland`
在息屏状态下远程软件无法唤醒屏幕、为了能唤醒屏幕需要改成`xorg`
```
sudo vi /etc/gdm3/custom.conf
```
修改下面这一行、将前面的注释去掉，然后点击`ESC`，然后输入 `:wq!` 保存文件
```
# WaylandEnable=false     ⇒　WaylandEnable=false
```

3-4. 然后重启桌面
```
sudo systemctl restart gdm3
```

3-5. 设置Rustdesk
打开Rustdesk 设置两个地方
设置->安全->允许IP直接访问 **默认端口 21118**，这样在家里就可以不使用中继服务器，而是IP直连，提高速度
设置->安全->密码 使用固定密码，这样主控方就可以使用固定密码控制




# 4. OpenSSH
添加ssh的远程访问功能、这样就可以通过ssh的方式链接。
```
sudo apt install openssh-server
```

【链接方式】输入ssh命令、然后输入密码
```
ssh 用户名@192.168.0.100    ※服务器IP
```



# 5. SMB文件共享
可以在Ubuntu服务器上开启SMB文件共享，构建文件共享服务，
这样可以很方便的在手机电脑上查看服务器上文件（包括电影，电视剧等）
```
sudo apt install samba
```

创建共享文件夹
```
mkdir /home/用户名/share
chmod 755 /home/用户名/share
```

修改配置文件、最下面粘贴这些内容
```
sudo vi /etc/samba/smb.conf
```

```
[ubuntu_smb]
path = /home/用户名/share   ★共享文件夹路径 
available = yes 
browseable = yes 
public = yes 
writable = yes 
create mask = 0755
security = share
force user = 用户名 ★
force group =用户名 ★
```
点击`ESC`，然后输入 `:wq!` 保存文件

重启smb服务
```
sudo service smbd restart
```

【链接方式】地址栏输入IP，然后输入服务器的用户名和密码
```
\\192.168.0.100    ※服务器IP
```




# 6. 安装Docker
安装docker本体，需要执行以下命令。
```
curl -fsSL https://get.docker.com | sh    #安装Docker
systemctl enable --now docker             #启动Docker服务
docker -v                                 #查看docker版本，检查是否安装成功
docker ps -a                            #查看docker中所有容器
```



# 7. 安装小雅Alist
小雅Alist是一个阿里云盘等的资源聚合库。安装好它以后，可以瞬间多出几百T的影音资源。
**默认端口 5678** 

首先获取两个token，再获取要关联的FoldID

获取短Token：https://alist.nn.ci/zh/guide/drivers/aliyundrive.html
获取长Token：https://alist.nn.ci/tool/aliyundrive/request.html

获取FoldID：, 所需资源转存到自己网盘，然后浏览器打开转存后的目录，https://www.aliyundrive.com/drive/file/resource/`xxxxxxxxxxxxxxxxxxxxxxxxxx`  ←所显示的一串字符即为FoldID

执行脚本
```
sudo bash -c "$(curl http://docker.xiaoya.pro/update_new.sh)" -s host
```
按要求依次输入【短Token】，【长Token】，【FoldID】


【链接方式】地址栏输入IP
```
https:// 192.168.0.100:5678   ※服务器IP
```





# 安装HomeAssistant（可选择性安装）
Home Assistant 是一个智能家居的终极解决方案，可以聚合各个厂商的设备，进行定制化管理。可以自己写代码扩展应用，也可以接入各类AI大语言模型等等  
**默认端口 8123**

创建配置文件文件夹
```
mkdir -p /home/用户名/homeassistant

sudo docker run -d \
  --name homeassistant \
  --privileged \
  --restart=unless-stopped \
  -e TZ=Asia/Shanghai \
  -v /home/用户名/homeassistant:/config \
  -v /run/dbus:/run/dbus:ro \
  --network=host \
  ghcr.io/home-assistant/home-assistant:stable
```
【链接方式】地址栏输入IP，然后输入服务器的用户名和密码
```
https://192.168.0.100:8123    ※服务器IP
```



# Linux微信（可选择性安装）
目前Linux微信只专供几个国产Linux操作系统，还没有Ubuntu版，这里我选择的是开发麒麟(openkylin)操作系统提供的安装包。
```
wget https://software.openkylin.top/openkylin/yangtze/pool/all/wechat-beta_1.0.0.238_amd64.deb
sudo apt install ./wechat-beta_1.0.0.238_amd64.deb
```


# vim（可选择性安装）
ubuntu自带的文本编辑器是vi，很难用，我需要安装一个他的升级版vim
打开命令行输入以下命令
```
sudo apt install vim
```

> 引用：https://www.bilibili.com/video/BV1Gb421a7BW/
> 引用：https://gitee.com/tech-shrimp/me/blob/master/doc/240502.md

