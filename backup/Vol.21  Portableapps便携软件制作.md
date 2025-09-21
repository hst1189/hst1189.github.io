# 前言
`PortableApps.com Launcher`（以下简称PAL）是`PortableApps.com`开发的便携软件制作工具。
本质而言，它是一个`NSIS代码生成器`，让使用者不需要直接写代码便可以制作`NSIS便携软件`。
`PortableApps.com Launcher`制作的便携软件每次运行时都会读取`App\Appinfo\Launcher`中的`ini`文件，因此开发者的工作主要是编写这个`ini`文件。
以下、制作`Evernote Portable`为例、阐述一般流程

# 📑 0. 准备
在制作便携软件前，我们需要准备如下工具：

1. 一个虚拟机软件，在虚拟机中安装好操作系统
[VMWare](https://www.vmware.com/products/desktop-hypervisor/workstation-and-fusion)
[Microsoft Hyper-V](https://learn.microsoft.com/zh-cn/virtualization)
[VirtualBox ](https://www.virtualbox.org)
关于VM虚拟机的选择，可参考：https://www.grapehut.us.kg/post/8.html

>  [!CAUTION]
> 装好系统后，切勿安装任何额外软件、运行库，在最纯净的环境下建立快照，此后每次测试软件，均从此快照启动。

2. 一个软件行为监控软件
例如：[RegShot ](http://portableapps.com/apps/utilities/regshot_portable)

3. [PortableApps.com Launcher](http://portableapps.com/apps/development/portableapps.com_launcher) 和 [NSIS Portable Unicode](http://portableapps.com/apps/development/nsis_portable)
将它们安装到同一目录，例如：
X:\PortableApps\PortableApps.comLauncher
X:\PortableApps\NSISPortable

4. [PAL模板](http://portableapps.com/development) （PortableApps.com Application Template）



# 📑 1. 分析
将 Evernote 安装程序拷贝到VM虚拟机内，
运行 `RegShot` （或 `Total Uninstall`）扫描系统⇒　安装Evernote程序⇒　再次扫描⇒　对比快照

通过对比，可发现Evernote在  `%APPDATA%`  `%LOCALAPPDATA%`  以及NT6.0以上的 `LocalLow` 中写入文件，
在注册表 `HKCU\Software\Evernote` 中写入键值， `HKCU\Software\Evernote\Evernote\EvernotePath` 的值为Evernote数据库的位置。

在虚拟机中提取纯净的程序文件，位于： `C:\Program Files\Evernote`
 
我们要制作这样一个便携软件启动器（Launcher）：
Launcher启动⇒　备份本地数据⇒　导入便携数据⇒　将数据库路径写入注册表⇒　启动主程序⇒　主程序退出⇒　导出便携软件数据⇒　清理便携软件垃圾⇒　恢复本地数据⇒　Launcher退出

 
# 📑 2. AppInfo.ini
下载[PAL模板](http://portableapps.com/development)，解压后，重命名`AppNamePortable`为`EvernotePortable`
在App下新建`Evernote目录`，将 `C:\Program Files\Evernote` 提取出的程序文件复制到此处。

创建 `App\AppInfo\appinfo.ini` ，此目录下的文件主要是为`PortableApps.com Platform`提供信息
在appinfo.ini中这样写：
```
[Format]
Type=PortableApps.comFormat
Version=2.0
 
[Details]
Name=Evernote Portable
AppID=EvernotePortable
Publisher=David Pi
Description=Evernote is a suite of software and services designed for notetaking and archiving.
Homepage=www.portableappc.com/portableapps/evernote-portable/
Category=Office
Language=SimpChinese
 
[Control]
Start=EvernotePortable.exe
 
[License]
Shareable=true
OpenSource=false
Freeware=true
CommercialUse=false
 
[Version]
DisplayVersion=4.5.0.5229
PackageVersion=4.5.0.5229
```

> [!TIP]
> 你也可以使用 [PortableApps.com Development Toolkit](http://portableapps.com/node/27502) 方便地定制appinfo.ini。

导出Evernote.exe的图标（推荐使用Icon Workshop），保存为 App\AppInfo\appicon.ico ，并导出为appicon_16.png（16px），appicon_32.png（32px），appicon_128.png（128px，非必须）。

 
# 📑 3. Launcher.ini
创建 `App\Appinfo\Launcher\EvernotePortable.ini` ，这个INI是制作便携软件的关键，它告诉PAL如何使我们的软件便携化

``` 
[Launch]
ProgramExecutable=Evernote\Evernote.exe    
;主程序位置

CloseEXE=EvernoteTray.exe    
;除了Evernote.exe，当EvernoteTray.exe正在运行时，便携软件也拒绝启动。

WaitForExe1=EvernoteTray.exe    
;当Evernote.exe关闭后，等待EvernoteTray.exe结束才真正结束便携软件。

DirectoryMoveOK=yes    
;    路径改变并不会影响便携软件运行，因此检测到路径改变时不提示警告。
 
[Activate]
Registry=true
;    表示本软件需要写注册表
 
[DirectoriesMove]
-=%LOCALAPPDATA%\Evernote   
;    当软件启动时，原%LOCALAPPDATA%\Evernote会被重命名（备份）为
;    %LOCALAPPDATA%\Evernote-Backup-by-EvernotePortable，当软
;    件结束时，%LOCALAPPDATA%\Evernote会被删除，
;    %LOCALAPPDATA%\Evernote-Backup-by-EvernotePortable 被重命名（恢复）
;    为%LOCALAPPDATA%\Evernote。（-=）的意思是程序结束时不将
;    %LOCALAPPDATA%\Evernote备份到便携软件Data目录，因为这几个目录主要是日志、
;    临时文件，没有备份到便携设备的必要。如果需要备份到Data目录，则将“-”指定为其
;    他名称。下同。
-=%APPDATA%\Evernote
-=%USERPROFILE%\AppData\LocalLow\Evernote
 
[DirectoriesCleanupIfEmpty]
1=%LOCALAPPDATA%\EvernoteEvernote   
;    如为空目录，则在结束时删除目录，避免留下垃圾文件。下同
2=%LOCALAPPDATA%\Evernote
3=%APPDATA%\Evernote
4=%USERPROFILE%\AppData\LocalLow\Evernote
 
[RegistryKeys]
EvernotePortable=HKCU\Software\Evernote   
;    在程序启动时，HKCU\Software\Evernote被重命名为
;    HKCU\Software\Evernote-Backup-by-EvernotePortable，
;    Data\settings\EvernotePortable.reg 被导入注册表，在程
;    序结束后，反过来导出便携软件键值，恢复本机注册表项。
 
[RegistryValueWrite]
HKCU\Software\Evernote\Evernote\EvernotePath=REG_SZ:%PAL:DataDir%  
;    在程序启动时，在HKCU\Software\Evernote\Evernote\EvernotePath 中写入便携
;    软件Data目录路径，以将数据库目录设定为便携软件的Data。更多PAL专有变量请参阅文档。
 
[RegistryCleanupIfEmpty]
1=HKCU\Software\Evernote   
;    如为空项，则在结束时删除，避免留下注册表垃圾。
```


# 📑 4. DefaultData
Evernote便携版是不能通过官方来自动升级的，因此，我们需要修改程序的默认设置，关闭自动升级选项。
通过观察注册表，可知自动升级主要由2个键值控制。在程序第一次运行时，需要将这两个键值设为0，以关闭默认升级。

新建 `App\DefaultData\settings\EvernotePortable.reg` ，写入如下内容：
```
Windows Registry Editor Version 5.00
 
[HKEY_CURRENT_USERSoftwareEvernoteEvernote]
“UpdateToPreReleaseVersion”=dword:00000000
“CheckForUpdatesAtLaunch”=dword:00000000
```
> [!TIP]
> DeafultData目录中的所有内容，会在首次运行时被复制到Data目录后导入。从而达到修改默认设置的目的

 
# 📑 5. Custom Code
Evernote的便携化基本完成了。但是，Evernote有一个残余进程EvernoteClipper.exe，并不会在程序结束后自动退出。PAL并没有结束进程的功能，因此需要用到一段Custom Code

在 `App\AppInfo\Launcher` 目录下新建`Custom.nsh`，写入如下内容： 
```
${SegmentFile}
 
${SegmentPrePrimary}
KillProcDLL::KillProc “EvernoteClipper.exe”
!macroend
 
${SegmentPostPrimary}
KillProcDLL::KillProc “EvernoteClipper.exe”
!macroend
```
> [!TIP]
> 在程序启动与退出时结束EvernoteClipper.exe进程（可能需要额外安装NSIS的[KillPorcDLL](http://nsis.sourceforge.net/KillProcDLL_plug-in)插件）



# 📑 6. 编译与封包
在 `PortableApps.com Launcher` 中载入 `EvernotePortable 目录`，按下一步编译。
如果成功，会在 `EvernotePortable 目录`下生成 `EvernotePortable.exe`，至此便携软件已经制作完毕

为便于使用与分发，可使用[PortableApps.com AppCompactor](http://portableapps.com/apps/utilities/portableapps.com_appcompactor)减小软件体积，
使用[PortableApps.com Installer](http://portableapps.com/apps/development/portableapps.com_installer)制作成安装（自解压）包。



# 📑 7. 相关链接
[PortableApps.com Launcher](http://portableapps.com/apps/development/portableapps.com_launcher)
[PortableApps.com AppCompactor](http://portableapps.com/apps/utilities/portableapps.com_appcompactor)
[PortableApps.com Installer](http://portableapps.com/apps/development/portableapps.com_installer)
[NSIS Portable](http://portableapps.com/apps/development/nsis_portable)


出典:
https://www.cnblogs.com/lkj371/p/16955675.html