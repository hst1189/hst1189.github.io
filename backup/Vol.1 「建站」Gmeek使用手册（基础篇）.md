# 前言
[Gmeek](https://github.com/Meekdai/Gmeek) 一个博客框架
超轻量级个人博客模板，完全基于`Github Pages `、 `Github Issues` 和 `Github Actions`，可以称作`All in Github`
> 引用：https://blog.meekdai.com/post/Gmeek-kuai-su-shang-shou.html


# 📑 一、安装
> [!TIP]
> 安装极其简单，根据以下步骤，一步一步操作。

### 1. 通过模板创建仓库
点击[通过模板创建仓库](https://github.com/new?template_name=Gmeek-template&template_owner=Meekdai)，建议仓库名称为`XXX.github.io`，其中`XXX`为github的用户名

### 2. 设置Github Pages
在`Settings`左侧栏中选择`Pages`  ->右侧栏中找到 `Build and deployment->Source` ->选择`Github Actions`

### 3. 生成文章
Gmeek通过issue生成文章，在issue写作并保存，
见证奇迹的一幕来啦！通过https://XXX.github.io 即可访问自动生成的文章
> [!IMPORTANT]
> 文章issue **必须添加** `标签Label`（至少一个）

### 4. 生成状况确认
可进入Actions页面查看构建进度

### 5. 手动全局生成
这个步骤只有在修改`config.json` 文件或者出现异常问题的时才需要执行
通过` Actions->build Gmeek->Run workflow` ->里面的按钮全局重新生成一次


# 📑 二、配置文件
> [!IMPORTANT]
> 按照安装步骤成功搭建好后，就可以阅读下面的内容修改配置文件啦
> 修改配置文件后，一定要手动全局生成一次，不然会报错
> 配置文件为`json`格式

> [!CAUTION]
> 最后一行配置末尾不需要逗号，其他行末尾都需要逗号（英文逗号）

`config.json` 就是配置文件，具体说明如下：
```javascript
{
    "title":"网站的大标题",
    "subTitle":"网站的小标题，可以引用一些名人名言",
    "avatarUrl":"https://github.githubassets.com/favicons/favicon.svg",
    "GMEEK_VERSION":"last"

    ↑ 以上是必须字段
    ↓ 以下是自定义字段，可以选择添加

    "displayTitle":"头像后面的标题",
    "homeUrl":"http://blog.xxx.com",
    "faviconUrl":"https://github.githubassets.com/favicons/favicon.svg",
    "email":"abc@abc.com",
    "startSite":"01/01/2000",
    "filingNum":"",
    "onePageListNum":30,
    "singlePage":["about"],
    "iconList":{"music":"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13Z"},
    "exlink":{"music":"https://music.xxx.com"},
    "commentLabelColor":"#006b75",
    "yearColorList":["#bc4c00", "#0969da", "#1f883d", "#A333D0"],
    "i18n":"CN",
    "UTC":8,
    "themeMode":"manual",
    "dayTheme":"light",
    "nightTheme":"dark_colorblind",
    "urlMode":"pinyin",
    "style":"",
    "script":"",
    "head":"",
    "allHead":"",
    "indexStyle":"",
    "indexScript":"",
    "showPostSource":0,
    "rssSplit":"sentence",
    "bottomText":"转载请注明出处",
    "ogImage":"https://cdn.jsdelivr.net/gh/Meekdai/meekdai.github.io/logo64.jpg",
    "primerCSS":"<link href='https://mirrors.sustech.edu.cn/cdnjs/ajax/libs/Primer/21.0.7/primer.css' rel='stylesheet' />",
    "needComment":1
}
```



| **配置参数** | **说明** | 
|---|---|
| title | 【必须】博客标题 |
| subTitle | 【必须】博客描述&自述 |
| avatarUrl | 【必须】博客头像 |
| GMEEK_VERSION | 【必须】Gmeek版本，一般写`last`也可以用具体tag版本 |
| displayTitle | 用于头像后面的标题展示，如果和`title`一致则不用添加 |
| homeUrl | 博客的主页地址，自定义域名时需要配置 |
| faviconUrl | 页面的favicon地址，如果和avatarUrl一致则不用添加 |
| email | 用于自动提交仓库时用，不添加也可以 |
| startSite | 用于页面底部显示网站运行天数 |
| filingNum | 用于页面底部显示备案信息 |
| onePageListNum | 用于首页每页展示的文章数量 |
| singlePage | 自定义独立页面，例如`about`或者`link`等 |
| iconList | 用于定义singlePage按钮展示的[SVG图标](https://primer.style/foundations/icons/#16px) (16px)，`about`和`link`内置无需定义 |
| exlink | 用于自定义首页右上角圆形按钮到外部链接功能，按钮图标定义在iconList中 |
| commentLabelColor | 用于自定义显示评论数量标签的颜色 |
| yearColorList | 用于自定义显示不同年份标签的颜色 |
| i18n | 用于定义博客语言，目前支持`EN`/`CN`/`RU` |
| UTC | 用于定义[时区](https://en.wikipedia.org/wiki/List_of_UTC_offsets) |
| themeMode| 用于定义主题模式，默认为`manual`，也可选择`fix`|
| dayTheme | 用于定义[亮主题](https://github.com/settings/appearance) |
| nightTheme | 用于定义[暗主题](https://github.com/settings/appearance) |
| urlMode | 用于定义文章链接生成模式，目前支持`pinyin`/`issue`/`ru_translit` |
| style | 用于自定义文章页CSS |
| script | 用于自定义文章页JavaScript |
| head | 用于自定义文章页head内容 |
| allHead | 用于自定义所有页面head内容 |
| indexStyle | 用于自定义首页CSS |
| indexScript | 用于自定义首页JavaScript |
| showPostSource | 在文章页显示issue链接按钮，1显示，0不显示 |
| rssSplit | 设置RSS输出的截断符号，默认`sentence`为第一句话，可配置其他特殊符号 |
| bottomText | 用于设置文章页面右下角显示的内容 |
| ogImage | 用于设置Open Graph协议展示的图片 |
| primerCSS | 用于设置primer.css的CDN地址，默认使用[南科大](https://mirrors.sustech.edu.cn/cdnjs/ajax/libs/Primer/21.0.7/primer.css) |
| needComment | 用于设置是否需要评论功能，1开启评论，0关闭 |


# 📑 三、常见问题
### 1. 搭建不成功
基本搭建就这2步，不成功的实例可以参考如下
- 案例一：https://github.com/Meekdai/Gmeek/issues/14 
- 案例二：https://github.com/Meekdai/Gmeek/issues/18
- 案例二：https://github.com/Meekdai/Gmeek/issues/20

### 2. Actions执行失败
修改了`config.json`配置文件后，需要全局生成。另外`label`标签没有打会出现这个问题。
建议通过Actions->build Gmeek->Run workflow->里面的按钮全局重新生成一次
- 案例一：https://github.com/Meekdai/Gmeek/issues/1
- 案例二：https://github.com/Meekdai/Gmeek/issues/10

### 3. utteranc报错
如果在评论里面登录后评论报错，可直接按照提示安装`utteranc app`即可
```
Error: utterances is not installed on xxx/xxx.github.io. If you own this repo, install the app. Read more about this change in the PR.
```

