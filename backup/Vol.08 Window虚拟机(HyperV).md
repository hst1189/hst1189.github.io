# 常用VM虚拟机软件一览

目前市面上适合个人用户使用的9款虚拟化软件。

|软件|操作系统|费用|稳定性|性能|推荐指数|
|---|---|---|---|---|---|
|1 VMware|Windows、Linux、MacOS|||||
|1.1 VMware Workstation Pro|Windows、Linux|免费|中|中||
|1.2 VMware Workstation Player|Windows、Linux|免费|中|中||
|1.3 VMware Fusion|MacOS|有料|不详||
|2. VirtualBox|Windows、Linux、MacOS|开源免费|低|低||
|3. Microsoft Hyper-V🔥|Windows|免费|高|高|★★★★★|
|4. Parallels Desktop|MacOS|有料|不详||
|5. KVM|Linux|不详|不详||
|6. Xen|Linux|不详|不详||
|7. Citrix Hypervisor|Windows|不详|不详||
|8. QEMU|Linux|不详|不详||
|9. Multipass|Linux|不详|不详||

##  📖 Microsoft Hyper-V
> 官网：https://learn.microsoft.com/zh-cn/virtualization

Microsoft Hyper-V是一款虚拟化软件，内置于Windows Server 2008及其以后的服务器操作系统中。它可以在同一台物理服务器上运行多个虚拟机，支持Windows和Linux等多种操作系统，并提供多种虚拟化技术，如动态内存、动态磁盘等。Microsoft Hyper-V还具有卓越的可靠性、性能和安全性，并且具有高度的适应性，可以在各种企业环境中广泛应用。

### 在 Windows 上使用 Hyper-V
> 引用：https://www.depthbomb.net/?p=3786

> [!TIP]
> ①开启CPU虚拟功能（可以在「BIOS」里开启）
> ②开启「hyper-v功能」、「虚拟机平台」（可以在「windows其他功能」里开启）

`Gmeek-html<img src="https://learn.microsoft.com/zh-cn/virtualization/hyper-v-on-windows/quick-start/media/enable-hyper-v.png">`


### Windows家庭版，强制开启hyper-v

```
pushd "%~dp0"
dir /b %SystemRoot%servicingPackages*Hyper-V*.mum >hv.txt
for /f %%i in ('findstr /i . hv.txt 2^>nul') do dism /online /norestart /add-package:"%SystemRoot%servicingPackages%%i"
del hv.txt
Dism /online /enable-feature /featurename:Microsoft-Hyper-V -All /LimitAccess /ALL
pause

将文本文档改名为"xxx.bat"，需注意.bat是扩展名
运行完成后，重启电脑
```


### Hyper-V 独立显卡虚拟化 vGPU显卡直通
1. Powershell 输入下列命令
```
$vm = "虚拟机的名字"
Add-VMGpuPartitionAdapter -VMName $vm
Set-VMGpuPartitionAdapter -VMName $vm -MinPartitionVRAM 80000000 -MaxPartitionVRAM 100000000 -OptimalPartitionVRAM 100000000 -MinPartitionEncode 80000000 -MaxPartitionEncode 100000000 -OptimalPartitionEncode 100000000 -MinPartitionDecode 80000000 -MaxPartitionDecode 100000000 -OptimalPartitionDecode 100000000 -MinPartitionCompute 80000000 -MaxPartitionCompute 100000000 -OptimalPartitionCompute 100000000
Set-VM -GuestControlledCacheTypes $true -VMName $vm
Set-VM -LowMemoryMappedIoSpace 1Gb -VMName $vm
Set-VM -HighMemoryMappedIoSpace 32GB -VMName $vm
```

2. 驱动拷贝目录
 宿主机驱动路径：C:\Windows\System32\DriverStore\FileRepository\
 虚拟机拷贝路径：C:\Windows\System32\HostDriverStore\FileRepository\

3. NVIDA卡操作
宿主机文件路径：C:\Windows\System32\nvapi64.dll
虚拟机拷贝路径：C:\Windows\System32\nvapi64.dll

4. AMD卡操作
所有宿主机，驱动管理器，显卡驱动信息里的文件都必须全部拷贝到虚拟机里（路径和宿主机相同）



### Hyper-Vマネージャーの起動
`Gmeek-html<img src="https://www.depthbomb.net/wp-content/uploads/2021/01/hyperv03.jpg">`

### 「仮想スイッチマネージャー」の起動
`Gmeek-html<img src="https://www.depthbomb.net/wp-content/uploads/2021/01/hyperv30.jpg">`

### 「新規仮想スイッチ」の作成
`Gmeek-html<img src="https://www.depthbomb.net/wp-content/uploads/2021/01/hyperv14.jpg">`

> [!NOTE]
> 仮想スイッチの種類の違い
> 外部：
>　仮想マシンを対ホストやホスト以外の周辺物理機器と相互に通信させる場合はこちらです。
>　例えば、Hyper-V上で作成した仮想マシンを、ホストOSであるWindows10が居るネットワークの他のパソコンやネットワーク機器とも相互に通信できるようにするには「外部」を選択する必要があります。
> 
> 内部：
>　仮想マシンを対ホストや同じ内部スイッチで繋がる仮想マシン間でしか相互通信させない場合はこちらです。
>　仮想マシンがインターネット接続できる必要がなく、また、ホストが所属するネットワーク上の他の機器から見える必要が無い場合は、「内部」を選択します。
> 
>プライベート：
>　仮想マシンを同じプライベートスイッチで繋がる仮想マシン間でしか相互通信させない場合はこちらです。
>　仮想マシンがインターネットに繋がる必要もなく、ホストとの通信も不要で、仮想マシン間だけの閉じたネットワークを使用したい場合は「プライベート」を選択します。


### 「仮想スイッチマネージャー」設定と仮想スイッチ解説
`Gmeek-html<img src="https://www.depthbomb.net/wp-content/uploads/2021/01/hyperv15.jpg">`

尚、上記仮想スイッチが作成されると、Hyper-Vのホストである、Windows10のNICには以下の仮想NICが作成されます。
「vEthernet」はHyper-Vによって作成された仮想NICであり、括弧で対象の仮想スイッチ名が表示されています。
`Gmeek-html<img src="https://www.depthbomb.net/wp-content/uploads/2021/01/hyperv16.jpg">`
`Gmeek-html<img src="https://www.depthbomb.net/wp-content/uploads/2021/01/hyperv24.jpg">`


### 「仮想マシンの新規作成ウィザード」の起動
`Gmeek-html<img src="https://www.depthbomb.net/wp-content/uploads/2021/01/hyperv04.jpg">`
`Gmeek-html<img src="https://www.depthbomb.net/wp-content/uploads/2021/01/hyperv05.jpg">`
`Gmeek-html<img src="https://www.depthbomb.net/wp-content/uploads/2021/01/hyperv06.jpg">`
`Gmeek-html<img src="https://www.depthbomb.net/wp-content/uploads/2021/01/hyperv07.jpg">`
`Gmeek-html<img src="https://www.depthbomb.net/wp-content/uploads/2021/01/hyperv08.jpg">`
`Gmeek-html<img src="https://www.depthbomb.net/wp-content/uploads/2021/01/hyperv09.jpg">`
`Gmeek-html<img src="https://www.depthbomb.net/wp-content/uploads/2021/01/hyperv10.jpg">`
`Gmeek-html<img src="https://www.depthbomb.net/wp-content/uploads/2021/01/hyperv12.jpg">`
`Gmeek-html<img src="https://www.depthbomb.net/wp-content/uploads/2021/01/hyperv13.jpg">`
`Gmeek-html<img src="https://www.depthbomb.net/wp-content/uploads/2021/01/hyperv23.jpg">`

> [!NOTE]
> チェックポイントの設定
>　Hyper-Vでは、特定の時点の仮想マシンの状態を保存する「チェックポイント」という機能があり、後からそのチェックポイントを取得した状態まで仮想マシンを戻すことができます。
>　特に必要が無ければ、自動的にチェックポイントを作成する機能は無効化しておいた方が良いです。

`Gmeek-html<img src="https://www.depthbomb.net/wp-content/uploads/2021/01/hyperv22.jpg">`






## 📖 VMware
> 官网：https://www.vmware.com/products/desktop-hypervisor/workstation-and-fusion

### VMware Worstation Pro
VMware Workstation Pro 是行业标准桌面 Hypervisor，使用它可在 Windows 或 Linux 桌面上运行 Windows、Linux 和 BSD 虚拟机。

### VMware Workstation Player
对于大多数个人用户来说，免费版的 VMware Workstation Player 其实已经足够了。此外它体积小巧，性能好，支持3D加速，运行流畅稳定。可以说是值得推荐的首选虚拟机软件。

### VMware Fusion
VMWare Fusion 13 Pro 是 macOS 优秀的虚拟机软件「同类软件 Parallels Desktop」，兼容 macOS Ventura 和苹果 M 系列芯片，可以直接在 Mac 下运行 Windows 11、Linux 等系统。




##  📖 VirtualBox
> 官网：https://www.virtualbox.org

VirtualBox是一款免费开源的虚拟化软件，由Oracle公司开发。VirtualBox 是一个用于 x86 硬件的通用全虚拟器，面向服务器、桌面和嵌入式应用，相对 VMware 来说 ，VirtualBox 是轻量级的虚拟软件。它可以在同一台电脑上运行多个操作系统，使用户可以在不同的操作系统之间切换，并且创建不同的虚拟机。它支持Windows、Linux、MacOS和Solaris等多种操作系统，并提供多种虚拟化技术，如桥接、NAT和Host-Only等。VirtualBox是一款功能强大的虚拟化软件，被广泛应用于开发、测试、学习等领域。 




##  📖 Parallels Desktop
> 官网：https://www.parallels.com/products/desktop

Parallels Desktop是由Parallels推出的一款为苹果电脑提供硬件虚拟化的软件，产品于2006年6月发布，它是第一款能在苹果-英特尔架构的苹果电脑上使用的虚拟化软件。如果你想在Mac上运行Windows系统，那么Parallels Desktop 会是你的最佳选择。它可以在Intel 或 Apple M 系列 Mac 计算机上无缝运行 Windows 应用，最大限度地解决了 MacOS 与 Windows 软件生态差距方面的问题。



##  📖 KVM
> 官网：https://www.linux-kvm.org/page/Main_Page

KVM是Kernel-based Virtual Machine的简称，是一个开源的系统虚拟化模块，自Linux 2.6.20之后集成在Linux的各个主要发行版本中，它使用Linux自身的调度器进行管理，所以相对于Xen，其核心源码很少，相对VMWare的管理方式来说是比较麻烦，但从性能上并不比VMWare差。KVM（Kernel-based Virtual Machine）是一种基于Linux内核的虚拟化软件，可以在同一台物理服务器上运行多个虚拟机。KVM使用硬件辅助虚拟化技术，将不同的操作系统和应用程序隔离开来，提高了安全性和可靠性，并可以提高系统资源的利用率和效率。KVM具有高性能、高可靠性等优点，是一款广泛应用于企业级应用和云计算领域的虚拟化软件。



##  📖 Xen
> 官网：https://xenproject.org

XEN最初是剑桥大学Xensource的一个开源虚拟化项目，2003年9月发布了首个版本Xen 1.0，2007年Xensource被Citrix公司收购，2014年03月11日，Xen发布4.4版本，更好地支持ARM架构。Xen是运行在裸机上的虚拟化管理程序（HyperVisor），是半虚拟化（Para-Virtualization）技术的典型代表。主要运行在Linux等多种操作系统上，它可以在同一台物理服务器上运行多个虚拟机，并使用虚拟化技术将不同的操作系统隔离开来。Xen具有高性能、高可靠性、高安全性等特点，并支持多种虚拟化技术，如硬件辅助虚拟化、半虚拟化等。Xen还支持动态配置和迁移，可以在不停机的情况下调整虚拟机的资源和配置，提高了用户的便利性和灵活性。


##  📖 QEMU
> 官网：https://www.qemu.org/

QEMU是一款由法布里斯·贝拉等人编写，可执行硬件虚拟化的（hardware virtualization）开源仿真器（Emulator）。QEMU与其他VM 解决方案不同的地方在于，它既是虚拟机，也是机器模拟器。QEMU可以通过动态的二进制转换，模拟CPU，并且提供一组设备模型，使它能够运行多种未修改的客户机OS。QEMU还可以通过与KVM一起使用，从而以接近真实电脑的速度来运行虚拟机。



##  📖 Multipass
> 官网：https://multipass.run/

Multipass 是一个轻量虚拟机管理器，是由 Ubuntu 运营公司 Canonical 所推出的开源项目。运行环境支持 Linux、Windows、macOS。在不同的操作系统上，使用的是不同的虚拟化技术。在 Linux 上使用的是 KVM、Window 上使用 Hyper-V、macOS 中使用 HyperKit 以最小开销运行VM，支持在笔记本模拟小型云。同时，Multipass 提供了一个命令行界面来启动和管理 Linux 实例。下载一个全新的镜像需要几秒钟的时间，并且在几分钟内就可以启动并运行 VM。



##  📖 Citrix Hypervisor
> 官网：https://www.citrix.com/downloads/citrix-hypervisor

Citrix Hypervisor 支持任意规模或类型的组织整合计算资源，以及将计算资源转换为虚拟工作负载，从而满足现今数据中心的要求。同时可以确保将工作负载无缝移动到云中。

