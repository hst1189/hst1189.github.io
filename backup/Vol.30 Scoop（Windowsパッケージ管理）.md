# 🔖 Windows でのパッケージ管理は Scoop

什么是 Scoop？它是一个在 Windows 上运行的软件包管理器。 它可以在 cmd 或 Powershell 中使用

Windows 上的软件包管理器包括
- [winget](https://learn.microsoft.com/ja-jp/windows/package-manager/winget/)   
- [chocolatey](https://chocolatey.org/) 
- [Scoop](https://scoop.sh/)

区别：使用 winget，除使用命令安装的软件包外，其他软件包也会被置于管理之下，
但使用 scoop，只有使用 scoop 安装的软件包才能被管理（这与 chocolaty 类似）。

使用管理工具的好处，例如：
安装 Windows 版 Git 时，需要下载并运行安装程序，然后点击 “下一步 ”按钮
使用 Scoop 时，只需使用 scoop install git 命令即可。 卸载时，也同样可以用命令完成。


# 🔖 安装scoop
https://scoop.sh/
按下 Win + X 快捷键，在菜单中选择 “Windows PowerShell (管理员)” 或 “终端 (管理员)”
```
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

　Set-ExecutionPolicy: 这是设置 PowerShell 执行策略的命令。
　RemoteSigned: 这是一种安全策略，允许运行本地创建的脚本，对于从网络下载的脚本，则要求它们具有可信发布者的数字签名。这比 Unrestricted（允许所有脚本）更安全。
　-Scope CurrentUser: 表示这个设置仅对当前登录的用户生效，通常不需要管理员权限（但首次设置可能需要确认），也更安全。
```
```
Invoke-RestMethod -Uri https://get.scoop.sh | Invoke-Expression
iwr -useb get.scoop.sh | iex　# 或者使用别名更简洁的版本

　iwr = Invoke-RestMethod, iex = Invoke-Expression
　Invoke-RestMethod (或 iwr): 从指定的 URL (https://get.scoop.sh) 下载内容（这里是安装脚本）。
　| (管道符): 将前一个命令的输出（下载的脚本内容）传递给后一个命令。
　Invoke-Expression (或 iex): 执行接收到的字符串内容（也就是运行安装脚本）。

```
默认情况下，Scoop 会安装在你的用户目录下：C:\Users\你的用户名\scoop。



# 🔖 添加软件仓库 (Bucket)
Scoop 使用 “Bucket”（桶）来管理软件包列表，每个 Bucket 就是一个 Git 仓库，里面包含了软件的安装信息（称为 Manifest，清单文件）。默认只有 main Bucket，主要包含常用的命令行工具。我们需要添加更多 Buckets 来发现和安装更多软件。

添加常用 Bucket:
extras Bucket 包含了大量流行的 GUI 软件和非 main Bucket 的常用工具。强烈建议添加：

scoop bucket add extras
重要: Scoop 依赖 git 来管理 Buckets。如果你的系统没有安装 git，Scoop 在添加第一个 Bucket 时通常会提示并自动尝试安装。你也可以手动安装：scoop install git。

添加其他常用 Buckets (可选):

根据你的需要，可以添加更多社区维护的 Buckets。例如：
安装各种 Java 版本：scoop bucket add java
安装 Nerd Fonts (美化终端字体)：scoop bucket add nerd-fonts
安装特定旧版本的软件：scoop bucket add versions
安装非便携应用 (需要特殊处理)：scoop bucket add nonportable (安装里面的软件可能需要管理员权限)
去哪里找更多 Buckets？
官方维护的 Bucket 列表：https://github.com/ScoopInstaller

注意事项:
添加 Bucket 时需要良好的网络连接。
如果命令出错，请检查 Bucket 名称是否拼写正确。
有时网络波动会导致添加失败，重试一次可能就好了。


# 🔖 安装常用软件

不确定软件是否在已添加的 Buckets 里？用 search 命令！
scoop search <你想搜索的软件名或关键词>
例如: 搜索 python 相关
scoop search python
Scoop 会列出匹配的软件包及其所在的 Bucket。

更方便的搜索: 你也可以直接访问 Scoop 的官方网站 https://scoop.sh/，它提供了一个图形化的搜索界面。注意取消勾选页面上的 “main” 筛选器可以搜索到 extras 等其他 Bucket 中的包。


安装单个软件:
安装：
```
scoop install {package_name}
```
卸载：
```
scoop uninstall {package_name}
```


安装 OpenJDK (来自 java bucket)
scoop install openjdk

安装 Git (来自 main bucket)
scoop install git

安装 7zip (来自 main bucket)
scoop install 7zip

安装 VS Code (来自 extras bucket)
scoop install vscode

一次安装多个软件:提高效率，一次性安装多个！用空格隔开软件名即可。
scoop install nodejs python mysql nginx putty everything powertoys

默认情况下，Scoop 安装的软件只对当前用户可用，并且安装在用户目录下的 scoop 文件夹中（如 C:\Users\你的用户名\scoop\apps）。这通常不需要管理员权限，也更干净、便携。

(可选) 全局安装:
如果你希望软件对系统上的所有用户都可用，可以使用 -g 或 --global 参数。这需要管理员权限运行 PowerShell，并且软件会被安装到全局路径（默认为 C:\ProgramData\scoop，或你通过 $env:SCOOP_GLOBAL 指定的路径）。

全局安装 OpenJDK (需要管理员权限运行 PowerShell)
scoop install openjdk --global


Scoop 会自动下载软件包、解压、处理依赖，并将可执行文件通过 “shim” 机制添加到你的 PATH 中。安装完成后，你通常可以直接在新的 PowerShell 或 CMD 窗口中使用该软件的命令。
例如，安装 openjdk 后，打开一个新的 PowerShell 窗口，输入 java -version，应该能看到 Java 的版本信息。

:light_bulb: Scoop 的魔法：Shim 是什么？
Scoop 的一个核心优势是不污染系统的 PATH 环境变量。它怎么做到的？答案是 “Shim” (垫片)。
当你安装一个软件（比如 git）后，Scoop 不会把 git.exe 所在的整个目录加到系统 PATH。它只做一件事：在 ~/scoop/shims 目录下（这个目录在安装 Scoop 时会被自动添加到用户 PATH 中）创建一个名为 git.exe 的极小的可执行文件 (shim)。
当你运行 git 命令时，系统在 PATH 里找到了 ~/scoop/shims/git.exe。这个 shim 文件知道真正 git.exe 的位置（比如在 ~/scoop/apps/git/current/bin/git.exe），然后它会启动真正的 git.exe。
这样做的好处是：你的 PATH 变量非常干净，只增加了一个 shims 目录。卸载软件时，只需删除对应的 shim 和软件目录，对系统几乎没有影响。对于 GUI 程序，Scoop 会在开始菜单创建一个 “Scoop Apps” 文件夹存放快捷方式。


# 🔖 软件的更新与管理

想知道哪些软件有新版本了？

# 检查 Scoop 自身和所有 Buckets 的更新，并列出可更新的软件
scoop status

# 或者直接更新 Scoop 自身和 Buckets 的信息
scoop update
scoop update 首先会更新 Scoop 自身和所有已添加的 Bucket（相当于对每个 Bucket 的 Git 仓库执行 git pull），获取最新的软件包清单。

更新所有软件:
scoop update *

更新指定软件:
scoop update <软件名>
scoop update nodejs


查看已安装列表:
scoop list

卸载软件:
scoop uninstall <软件名>
scoop uninstall mysql
Scoop 会删除软件文件和对应的 shim/快捷方式，非常彻底。


查看软件信息:
scoop info <软件名>
scoop info git

回退到旧版本:
scoop reset <软件名>@<版本号>
scoop reset git@2.30.0.windows.1


其他常用命令:
scoop cleanup * : 清理所有软件的旧版本，释放磁盘空间。
scoop cache rm * : 清除下载缓存。
scoop home <软件名> : 在浏览器中打开软件的官方主页。
scoop which <命令名> : 显示某个命令对应的可执行文件的实际路径 (类似 Linux 的 which)。


配置代理: 如果你有可用的 HTTP 代理，可以为 Scoop 单独设置：
scoop config proxy http://代理服务器地址:端口

查看当前代理设置
scoop config proxy

取消代理
scoop config proxy none
注意：这只为 Scoop 设置代理，不影响系统其他应用。


安装软件后，在命令行中输入命令提示“不是内部或外部命令”？
检查 PATH 环境变量:
在 PowerShell 中输入 $env:Path 查看当前 PATH。确认其中是否包含类似 C:\Users\你的用户名\scoop\shims 的路径。
如果没有，尝试运行 scoop fix path 看是否能自动修复。
如果还不行，可能需要手动添加：右键“此电脑” → 属性 → 高级系统设置 → 环境变量 → 在“用户变量”或“系统变量”中找到 Path → 编辑 → 新建 → 添加 C:\Users\你的用户名\scoop\shims (请替换为你的实际路径) → 一路确定。然后重启终端。


:light_bulb: 进阶技巧：让 Scoop 更得心应手
创建自己的 Bucket:

如果你有一些内部工具或者 Scoop 官方/社区没有收录的软件，可以创建自己的 Git 仓库作为 Bucket，编写 JSON 格式的 Manifest 文件来描述如何安装它们。这对于团队共享工具配置非常有用。学习如何编写 Manifest: [Scoop Wiki](https://github.com/ScoopInstaller/Scoop/wiki/App-Manifests)。


一键重装脚本:
将你所有需要安装的常用软件整理到一个 PowerShell 脚本文件中（例如 setup-my-env.ps1）：添加需要的 Buckets
scoop bucket add extras
scoop bucket add java
scoop bucket add nerd-fonts

安装常用工具
scoop install git python nodejs openjdk maven gradle vscode 7zip everything powertoys curl wget grep sed bandizip # ... 添加你需要的其他软件


Write-Host "环境配置完成！"
每次重装系统后，只需运行 Scoop 安装命令，然后执行这个脚本 .\setup-my-env.ps1，即可快速恢复你的开发环境！
Scoop 的一大魅力在于其便携性。默认情况下，所有软件都安装在 ~/scoop 目录下。这意味着，理论上你可以将整个 scoop 文件夹复制到另一台电脑的相同用户目录下（或者通过环境变量指定路径），然后简单运行一些 Scoop 命令（如 scoop reset * 或 scoop fix path）来修复路径和 shim，就能在新电脑上获得几乎一致的环境！
与其他包管理器的比较 (简单):



他のオプションは以下の通り。

```
>scoop -h
Usage: scoop <command> [<args>]

Available commands are listed below.

Type 'scoop help <command>' to get more help for a specific command.

Command    Summary
-------    -------
alias      Manage scoop aliases
bucket     Manage Scoop buckets
cache      Show or clear the download cache
cat        Show content of specified manifest.
checkup    Check for potential problems
cleanup    Cleanup apps by removing old versions
config     Get or set configuration values
create     Create a custom app manifest
depends    List dependencies for an app, in the order they'll be installed
download   Download apps in the cache folder and verify hashes
export     Exports installed apps, buckets (and optionally configs) in JSON format
help       Show help for a command
hold       Hold an app to disable updates
home       Opens the app homepage
import     Imports apps, buckets and configs from a Scoopfile in JSON format
info       Display information about an app
install    Install apps
list       List installed apps
prefix     Returns the path to the specified app
reset      Reset an app to resolve conflicts
search     Search available apps
shim       Manipulate Scoop shims
status     Show status and check for new app versions
unhold     Unhold an app to enable updates
uninstall  Uninstall an app
update     Update apps, or Scoop itself
virustotal Look for app's hash or url on virustotal.com
which      Locate a shim/executable (similar to 'which' on Linux)
```