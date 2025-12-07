# 🎉关于 WSL（Windows Subsystem for Linux）
Windows 的一项功能，可用于在 Windows 计算机上运行 Linux 环境，而无需单独的虚拟机或双引导。 
WSL 旨在为希望同时使用 Windows 和 Linux 的开发人员提供无缝高效的体验。


# 🎉前提条件
开启以下2个功能 （系统 > 附加功能 > 其他功能 ） 
- WSL（Windows Subsystem for Linux）
- 虚拟机平台

或者执行 PowerShell 开启 （管理者身份）
```
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```
`Gmeek-html<img src="https://zmkk.fun/upload/6b94eebcc31ff147de71f46108847851.png">`


# 🎉微软官网
> https://learn.microsoft.com/ja-jp/windows/wsl/install-manual
> https://learn.microsoft.com/ja-jp/windows/wsl/basic-commands


# 🎉WSL命令

### 🌸查看版本
```
$ wsl --version

WSL バージョン: 2.3.26.0
カーネル バージョン: 5.15.167.4-1
WSLg バージョン: 1.0.65
MSRDC バージョン: 1.2.5620
Direct3D バージョン: 1.611.1-81528511
DXCore バージョン: 10.0.26100.1-240331-1435.ge-release
Windows バージョン: 10.0.26100.863
```

### 🌸查看状態
```
$ wsl --status

既定のディストリビューション: Ubuntu
既定のバージョン: 2
```

### 🌸查看帮助
```
$ wsl --help
```

### 🌸安装 WSL
```
$ wsl --install　                       ※默认安装Ubuntu  
$ wsl --install -d <DistributionName>   ※指定系统
```

### 🌸查看已安装系统
```
$ wsl --list --verbose    或者  $ wsl -l -v　
```


### 🌸查看可安装系统
https://raw.githubusercontent.com/microsoft/WSL/master/distributions/DistributionInfo.json
```
$ wsl --list --online   或者   $ wsl -l -o　
```

|NAME|FRIENDLY NAME|Default|
|---|---|---|
|Ubuntu                        |Ubuntu ||
|Debian                         |Debian GNU/Linux||
|kali-linux                      |Kali Linux Rolling||
|Ubuntu-18.04              |Ubuntu 18.04 LTS||
|Ubuntu-20.04              |Ubuntu 20.04 LTS||
|Ubuntu-22.04              |Ubuntu 22.04 LTS||
|Ubuntu-24.04              |Ubuntu 24.04 LTS|★|
|OracleLinux_7_9           |Oracle Linux 7.9||
|OracleLinux_8_7           |Oracle Linux 8.7||
|OracleLinux_9_1           |Oracle Linux 9.1||
|openSUSE-Leap-15.6   |openSUSE Leap 15.6||
|SUSE-Linux-Enterprise-15-SP5   |SUSE Linux Enterprise 15 SP5||
|SUSE-Linux-Enterprise-15-SP6   |SUSE Linux Enterprise 15 SP6||
|openSUSE-Tumbleweed             |openSUSE Tumbleweed||


### 🌸设置默认系统
```
$ wsl --set-default <Distribution Name>    或者      $ wsl -s <DistributionName>
```

### 🌸切换系统
```
$ wsl --set-version <distribution name> <versionNumber>　
```

### 🌸启动wsl
```
$ wsl 　                     ※启动默认版本
$ wsl ~　                    ※ユーザーのホーム ディレクトリから開始
$ wsl -d <DistributionName>　※指定版本
```

### 🌸关闭wsl
```
$ wsl --shutdown 　                    ※关闭所有wsl      
$ wsl --terminate <DistributionName> 　※关闭指定Linux版本
```

### 🌸导入Linux
```
$ wsl --import <DistributionName> <Install-Location> xxx.tar
```

### 🌸卸载Linux
```
$ wsl --unregister <DistributionName>
```

### 🌸备份Linux
```
$ wsl --export <DistributionName> xxx.tar
```

### 🌸マウント
>https://learn.microsoft.com/ja-jp/windows/wsl/wsl2-mount-disk

```
$ wsl --mount <DiskPath>　※マウント　　　
$ wsl --unmount <DiskPath>　※マウント解除
```

### 🌸查看IP
- Linux ディストリビューションの IP アドレスを返します (WSL 2 VM アドレス)
```
$ wsl hostname -I
```
- WSL 2 から見た Windows マシンの IP アドレスを返します
```
$ ip route show | grep -i default | awk '{ print $3}'
```




# 🎉WSL 詳細設定の構成
https://learn.microsoft.com/ja-jp/windows/wsl/wsl-config

### 🌸wsl.conf 
[wsl.conf](https://learn.microsoft.com/ja-jp/windows/wsl/wsl-config#wslconf) 

ファイル`/etc/wsl.conf`は、ディストリビューションごとに詳細設定オプションを構成する。

### 🌸.wslconfig
 [.wslconfig](https://learn.microsoft.com/ja-jp/windows/wsl/wsl-config#wslconfig) 

ファイル`%UserProfile% ディレクトリに格納`は、すべての WSL 2 ディストリビューション全体で詳細設定オプションを構成する。


### 🌸wsl.conf ファイルの例
```javascript
# Automatically mount Windows drive when the distribution is launched
[automount]

# Set to true will automount fixed drives (C:/ or D:/) with DrvFs under the root directory set above. Set to false means drives won't be mounted automatically, but need to be mounted manually or with fstab.
enabled = true

# Sets the directory where fixed drives will be automatically mounted. This example changes the mount location, so your C-drive would be /c, rather than the default /mnt/c. 
root = /

# DrvFs-specific options can be specified.  
options = "metadata,uid=1003,gid=1003,umask=077,fmask=11,case=off"

# Sets the `/etc/fstab` file to be processed when a WSL distribution is launched.
mountFsTab = true


# Network host settings that enable the DNS server used by WSL 2. This example changes the hostname, sets generateHosts to false, preventing WSL from the default behavior of auto-generating /etc/hosts, and sets generateResolvConf to false, preventing WSL from auto-generating /etc/resolv.conf, so that you can create your own (ie. nameserver 1.1.1.1).
[network]
hostname = DemoHost
generateHosts = false
generateResolvConf = false


# Set whether WSL supports interop processes like launching Windows apps and adding path variables. Setting these to false will block the launch of Windows processes and block adding $PATH environment variables.
[interop]
enabled = false
appendWindowsPath = false


# Set the user when launching a distribution with WSL.
[user]
default = DemoUser


# Set a command to run when a new WSL instance launches. This example starts the Docker container service.
[boot]
command = service docker start
```



#### 🌸.wslconfig ファイルの例
```javascript
# Settings apply across all Linux distros running on WSL 2
[wsl2]

# Limits VM memory to use no more than 4 GB, this can be set as whole numbers using GB or MB
memory=4GB 

# Sets the VM to use two virtual processors
processors=2

# Specify a custom Linux kernel to use with your installed distros. The default kernel used can be found at https://github.com/microsoft/WSL2-Linux-Kernel
kernel=C:\\temp\\myCustomKernel

# Sets additional kernel parameters, in this case enabling older Linux base images such as Centos 6
kernelCommandLine = vsyscall=emulate

# Sets amount of swap storage space to 8GB, default is 25% of available RAM
swap=8GB

# Sets swapfile path location, default is %USERPROFILE%\AppData\Local\Temp\swap.vhdx
swapfile=C:\\temp\\wsl-swap.vhdx

# Disable page reporting so WSL retains all allocated memory claimed from Windows and releases none back when free
pageReporting=false

# Turn on default connection to bind WSL 2 localhost to Windows localhost. Setting is ignored when networkingMode=mirrored
localhostforwarding=true

# Disables nested virtualization
nestedVirtualization=false

# Turns on output console showing contents of dmesg when opening a WSL 2 distro for debugging
debugConsole=true

# Enable experimental features
[experimental]
sparseVhd=true
```


### 🌸systemd サポート
テキスト エディターで `wsl.conf` ファイルを開き、`/etc/wsl.conf` にこれらの行を追加します
```
[boot]
systemd=true
```

### 🌸IP同步（window 与wsl 同一IP）
テキスト エディターで `.wslconfig` ファイルを開き、`%UserProfile%/.wslconfig` にこれらの行を追加します
```
[wsl2]
networkingMode=mirrored
```


# 🎉window 与 wsl 相互调用命令
・在wsl 可以调用 `notepad.exe`  、`explorer.exe` 等
・在cmd 可以调用  `dir  | wsl grep` 等



