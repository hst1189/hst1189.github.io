# 下载PowerToys
https://github.com/microsoft/PowerToys

# 下载插件
1. [ChatGPTPowerToys](https://github.com/ferraridavide/ChatGPTPowerToys)
将下载的插件解压后，放置到这个目录下：`C:\Program Files\PowerToys\RunPlugins`
重启PowerToys。
在PowerToys Run的设置界面，保持“包括在全局结果中”打开，并将全局排序顺序分数修饰符设置为10，这样就可以默认排在第一位。
按Alt+空格，在输入框中输入问题，然后回车，即可直接打开ChatGPT网页进行回答。


2. [WebSearchShortcut](https://github.com/Daydreamer-riri/PowerToys-Run-WebSearchShortcut)
将下载的插件解压后，放置到这个目录下：`%LOCALAPPDATA%\Microsoft\PowerToys\PowerToys Run\Plugins`
重启PowerToys。
在PowerToys Run的设置界面，将“包括在全局结果中”打开。
用记事本打开下面这个配置文件：

`%LOCALAPPDATA%\Microsoft\PowerToys\PowerToys Run\Settings\Plugins\Community.PowerToys.Run.Plugin.WebSearchShortcut\WebSearchShortcutStorage.json`
然后修改里面的参数。

把`https://chat.openai.com/?q=%s` 修改为 `https://chatgpt.com/?q=%s&temporary-chat=true&hints=search`
> temporary-chat=true 代表使用临时聊天模式
> hints=search 代表开启联网搜索功能

