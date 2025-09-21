# 微 PE 工具箱

## 以下是使用微 PE 安装 Windows 11 的详细教程：

#### 1. 准备工作：
   - 一个容量不小于 8GB 的 U 盘（建议使用 USB 3.0 及以上版本，速度更快）。
   - 一台制作启动盘的电脑
   - 下载微 PE 工具箱软件
   - 下载 Windows 11 的系统镜像文件（ISO 格式）

`Gmeek-html<img src="https://img.iplaysoft.com/wp-content/uploads/2020/wepe/wepe_setup.png">`

#### 2. 制作微 PE 启动盘：
   - 将 U 盘插入电脑的 USB 接口。
   - 打开微 PE 工具箱软件，选择 “安装到 U 盘” 选项。
   - 在弹出的窗口中，确认选择的 U 盘盘符是否正确，然后点击 “立即安装到 U 盘” 按钮。
   - 推荐选择方案二：UEFI/Legacy全能二分区
   - 等待制作过程完成，制作时长通常在几分钟左右，制作完成后，将 U 盘安全拔出。
 
`Gmeek-html<img src="https://img.iplaysoft.com/wp-content/uploads/2020/wepe/wepe_usb.png">`


#### 3. 设置安装电脑从 U 盘启动：
   - 将制作好的微 PE 启动盘插入 要安装 Windows 11 的电脑的 USB 接口。
   - 重启电脑，在开机过程中按下电脑主板对应的快捷键（不同品牌的电脑快捷键可能不同，常见的有 F12、F2、Esc 等），进入 BIOS设置界面。
   - 在 BIOS 设置中，找到 “启动顺序” 或 “Boot” 选项，将 U 盘设置为第一启动项。
   - 保存设置并退出 BIOS，电脑会自动重启并从 U 盘启动，进入微 PE 系统。

`Gmeek-html<img src="https://img.iplaysoft.com/wp-content/uploads/2020/wepe/wepe_screenshot.jpg">`

#### 4. 运行 “DiskGenius” 分区工具：
   - 进入微 PE 系统后，找到之前下载好的 Windows 11 系统镜像文件，如果是 ISO 格式，鼠标右击此文件并选择加载为 imdisk 虚拟磁盘（也可以使用其他虚拟光驱软件），此时电脑会出现 CD 驱动器磁盘。
   - 打开 “DiskGenius” 分区工具，需分区和格式化系统盘 
   - 首先删除要装系统的硬盘所有分区（注意备份数据，别选错硬盘），完成后右键硬盘名称，点击功能栏目上的 “新建分区”，完成 “保存更改” 即可自动格式化硬盘。


#### 5. 运行 “Windows 安装器”：
   - 选择 Windows 安装源：打开 CD 驱动器，在 “sources” 文件夹中，找到 “install.win” 文件双击选择。
   - 选择引导驱动器：UEFI 引导驱动器，选择 ESP 盘，磁盘大概 300M 左右，格式为 FAT32。
   - 选择安装驱动器：选择安装系统的磁盘分区（注意挂载多块硬盘时别选错磁盘了）。
   - 版本：推荐选择 Windows 11 专业版等你需要的版本。
   - 设置完成后，点击 “开始安装”，等待安装过程完成，这个过程中电脑可能会自动重启几次。


## 微PE工具箱下载
微PE工具箱V1.3　8PE老内核 ，适合老机器，最新于 2023-06-22
微PE工具箱V2.3　10PE新内核，全面支持当前新主机，最新于 2023-06-22

官网主页: https://www.wepe.com.cn/download.html
山东大学镜像: https://mirrors.sdu.edu.cn/wepe/
兰州大学镜像: https://mirrors.lzu.edu.cn/wepe/

例如：
https://mirrors.sdu.edu.cn/wepe/WePE_64_V2.3.exe
https://mirrors.sdu.edu.cn/wepe/WePE_32_V1.3.exe


## ISO镜像下载
1.  [微软官网](https://www.microsoft.com/zh-cn/software-download)
2.  [Tiny11（24H2）](https://archive.org/details/tiny11-2409)
3.  [Windows11（24H2）LTSC](https://archive.org/details/26100-ltsc-x64-enus)
4.  [msdn.itellyou](https://msdn.itellyou.cn/)



###  附录：Windows 11 与 Tiny11的区别

Windows 11 | Tiny11
-- | --
メモリ4GB以上 | メモリ2GB
ストレージ容量64GB以上 | ストレージ容量約8GB
スクリーンキーボード | 〇
音声アクセス | 〇
Windows音声認識 | 〇
電卓 | 〇
カレンダー | 〇
カメラ | 〇
エクスプローラー | 〇
Microsoft Store | 〇
メモ帳 | 〇
ペイント | 〇
フォト | 〇
付箋 | 〇
Windowsセキュリティ | 〇
アラーム＆クロック | ×
Cortana | ×
問い合わせ | ×
メール | ×
マップ | ×
メディアプレイヤー | ×
Microsoft Edge | ×
ニュース | ×
Microsoft Teams | ×
映画＆テレビ | ×
Office | ×
OneDrive | ×
Xbox | ×
スマートフォン連携 | ×

