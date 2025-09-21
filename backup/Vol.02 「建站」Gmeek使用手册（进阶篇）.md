# 📑 自定义配置文件
> [!IMPORTANT]
> 按照安装步骤成功搭建好后，就可以阅读下面的内容修改配置文件啦
> 修改配置文件后，一定要手动全局生成一次，不然会报错
> 配置文件为`json`格式

> [!CAUTION]
> 最后一行配置末尾不需要逗号，其他行末尾都需要逗号（英文逗号）

`config.json` 就是配置文件，具体说明如下：
```javascript
{
    "title":"小饅頭の部落格",
    "subTitle":"Stay hungry. Stay foolish. --Steve Jobs",
    "avatarUrl":"../avatar.png",
    "GMEEK_VERSION":"last",
    
    "displayTitle":"小饅頭の部落格",
    "homeUrl":"https://www.grapehut.xyz",
    "faviconUrl":"../favicon.svg",
    
    "email":"<style>@font-face {font-family: 'CustomFont';src: '../fonts/975MaruSC-Bold.ttf') format('truetype');}#postBody {font-family: CustomFont;}</style>",
    "startSite":"08/31/2024",
    "filingNum":"<a href='https://icp.gov.moe/?keyword=20241189' target='_blank'>萌ICP备20241189号</a>",
    "onePageListNum":100,
    
    "#singlePage":["about","link"],       没有用上about 和link 2页面，注释掉了

    
    "iconList":{
        "RSS月刊":"M0 2.75A2.75 2.75 0 0 1 2.75 0h10.5A2.75 2.75 0 0 1 16 2.75v10.5A2.75 2.75 0 0 1 13.25 16H2.75A2.75 2.75 0 0 1 0 13.25ZM2.75 1.5c-.69 0-1.25.56-1.25 1.25v10.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25V2.75c0-.69-.56-1.25-1.25-1.25Z M8 4a.75.75 0 0 1 .75.75V6.7l1.69-.975a.75.75 0 0 1 .75 1.3L9.5 8l1.69.976a.75.75 0 0 1-.75 1.298L8.75 9.3v1.951a.75.75 0 0 1-1.5 0V9.299l-1.69.976a.75.75 0 0 1-.75-1.3L6.5 8l-1.69-.975a.75.75 0 0 1 .75-1.3l1.69.976V4.75A.75.75 0 0 1 8 4Z",
        "网站导航":"M14.184 1.143v-.001l1.422 2.464a1.75 1.75 0 0 1-.757 2.451L3.104 11.713a1.75 1.75 0 0 1-2.275-.702l-.447-.775a1.75 1.75 0 0 1 .53-2.32L11.682.573a1.748 1.748 0 0 1 2.502.57Zm-4.709 9.32h-.001l2.644 3.863a.75.75 0 1 1-1.238.848l-1.881-2.75v2.826a.75.75 0 0 1-1.5 0v-2.826l-1.881 2.75a.75.75 0 1 1-1.238-.848l2.049-2.992a.746.746 0 0 1 .293-.253l1.809-.87a.749.749 0 0 1 .944.252ZM9.436 3.92h-.001l-4.97 3.39.942 1.63 5.42-2.61Zm3.091-2.108h.001l-1.85 1.26 1.505 2.605 2.016-.97a.247.247 0 0 0 .13-.151.247.247 0 0 0-.022-.199l-1.422-2.464a.253.253 0 0 0-.161-.119.254.254 0 0 0-.197.038ZM1.756 9.157a.25.25 0 0 0-.075.33l.447.775a.25.25 0 0 0 .325.1l1.598-.769-.83-1.436-1.465 1Z",
        "字体甄选":"M11.134 1.535c.7-.509 1.416-.942 2.076-1.155.649-.21 1.463-.267 2.069.34.603.601.568 1.411.368 2.07-.202.668-.624 1.39-1.125 2.096-1.011 1.424-2.496 2.987-3.775 4.249-1.098 1.084-2.132 1.839-3.04 2.3a3.744 3.744 0 0 1-1.055 3.217c-.431.431-1.065.691-1.657.861-.614.177-1.294.287-1.914.357A21.151 21.151 0 0 1 .797 16H.743l.007-.75H.749L.742 16a.75.75 0 0 1-.743-.742l.743-.008-.742.007v-.054a21.25 21.25 0 0 1 .13-2.284c.067-.647.187-1.287.358-1.914.17-.591.43-1.226.86-1.657a3.746 3.746 0 0 1 3.227-1.054c.466-.893 1.225-1.907 2.314-2.982 1.271-1.255 2.833-2.75 4.245-3.777ZM1.62 13.089c-.051.464-.086.929-.104 1.395.466-.018.932-.053 1.396-.104a10.511 10.511 0 0 0 1.668-.309c.526-.151.856-.325 1.011-.48a2.25 2.25 0 1 0-3.182-3.182c-.155.155-.329.485-.48 1.01a10.515 10.515 0 0 0-.309 1.67Zm10.396-10.34c-1.224.89-2.605 2.189-3.822 3.384l1.718 1.718c1.21-1.205 2.51-2.597 3.387-3.833.47-.662.78-1.227.912-1.662.134-.444.032-.551.009-.575h-.001V1.78c-.014-.014-.113-.113-.548.027-.432.14-.995.462-1.655.942Zm-4.832 7.266-.001.001a9.859 9.859 0 0 0 1.63-1.142L7.155 7.216a9.7 9.7 0 0 0-1.161 1.607c.482.302.889.71 1.19 1.192Z",
        "Gift":"M2 2.75A2.75 2.75 0 0 1 4.75 0c.983 0 1.873.42 2.57 1.232.268.318.497.668.68 1.042.183-.375.411-.725.68-1.044C9.376.42 10.266 0 11.25 0a2.75 2.75 0 0 1 2.45 4h.55c.966 0 1.75.784 1.75 1.75v2c0 .698-.409 1.301-1 1.582v4.918A1.75 1.75 0 0 1 13.25 16H2.75A1.75 1.75 0 0 1 1 14.25V9.332C.409 9.05 0 8.448 0 7.75v-2C0 4.784.784 4 1.75 4h.55c-.192-.375-.3-.8-.3-1.25ZM7.25 9.5H2.5v4.75c0 .138.112.25.25.25h4.5Zm1.5 0v5h4.5a.25.25 0 0 0 .25-.25V9.5Zm0-4V8h5.5a.25.25 0 0 0 .25-.25v-2a.25.25 0 0 0-.25-.25Zm-7 0a.25.25 0 0 0-.25.25v2c0 .138.112.25.25.25h5.5V5.5h-5.5Zm3-4a1.25 1.25 0 0 0 0 2.5h2.309c-.233-.818-.542-1.401-.878-1.793-.43-.502-.915-.707-1.431-.707ZM8.941 4h2.309a1.25 1.25 0 0 0 0-2.5c-.516 0-1 .205-1.43.707-.337.392-.646.975-.879 1.793Z",
        "Book":"M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.245a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.507a2.25 2.25 0 0 0-1.591.659l-.622.621a.75.75 0 0 1-1.06 0l-.622-.621A2.25 2.25 0 0 0 5.258 13H.75a.75.75 0 0 1-.75-.75Zm7.251 10.324.004-5.073-.002-2.253A2.25 2.25 0 0 0 5.003 2.5H1.5v9h3.757a3.75 3.75 0 0 1 1.994.574ZM8.755 4.75l-.004 7.322a3.752 3.752 0 0 1 1.992-.572H14.5v-9h-3.495a2.25 2.25 0 0 0-2.25 2.25Z",
        "音楽♪":"M12.7 0.9L7.3 0.9C6 0.9 4.9 2 4.9 3.3L4.9 10.1C4.5 9.9 4.1 9.8 3.6 9.8C2.1 9.8 0.9 11 0.9 12.4C0.9 13.9 2.1 15.1 3.6 15.1C5 15.1 6.2 13.9 6.2 12.4L6.2 3.3C6.2 2.7 6.7 2.2 7.3 2.2L12.7 2.2C13.3 2.2 13.8 2.7 13.8 3.3L13.8 7.5C13.4 7.3 12.9 7.1 12.4 7.1C11 7.1 9.8 8.3 9.8 9.8C9.8 11.2 11 12.4 12.4 12.4C13.9 12.4 15.1 11.2 15.1 9.8L15.1 3.3C15.1 2 14 0.9 12.7 0.9ZM3.6 13.8C2.8 13.8 2.2 13.2 2.2 12.4C2.2 11.7 2.8 11.1 3.6 11.1C4.3 11.1 4.9 11.7 4.9 12.4C4.9 13.2 4.3 13.8 3.6 13.8ZM12.4 11.1C11.7 11.1 11.1 10.5 11.1 9.8C11.1 9 11.7 8.4 12.4 8.4C13.2 8.4 13.8 9 13.8 9.8C13.8 10.5 13.2 11.1 12.4 11.1ZM12.4 11.1",
        "Me":"M10.561 8.073a6.005 6.005 0 0 1 3.432 5.142.75.75 0 1 1-1.498.07 4.5 4.5 0 0 0-8.99 0 .75.75 0 0 1-1.498-.07 6.004 6.004 0 0 1 3.431-5.142 3.999 3.999 0 1 1 5.123 0ZM10.5 5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"
    },

如上 找了一些好玩的图标↑　实际用到的如下，在exlink里 添加 ↓

    "exlink":{
        "RSS月刊":"https://www.grapehut.xyz/gmerss",
        "音楽♪":"https://mc.alger.fun/#/list?type=%E6%97%A5%E8%AF%AD",
        "Me":"https://www.grapehut.xyz/me"
    },
    
    "commentLabelColor":"#006b75",
    "yearColorList":["#bc4c00", "#0969da", "#1f883d", "#A333D0"],
    
    "i18n":"CN",
    "UTC":8,
    
    "themeMode":"fix",
    "dayTheme":"light",
    "nightTheme":"dark-blue",
    
    "urlMode":"issue",
    
    "style":"",
    "script":"<script src='../assets/ArticleTOC.js'></script><script src='../assets/lightbox.js'></script><script>document.querySelectorAll('a').forEach(anchor => {const img = anchor.querySelector('img');if (img && img.hasAttribute('data-canonical-src')) {const canonicalSrc = img.getAttribute('data-canonical-src');anchor.setAttribute('href', canonicalSrc);img.setAttribute('src', canonicalSrc);img.removeAttribute('data-canonical-src');}});</script>",
    "allHead":"<script src='../assets/RonanTheme.js'></script><script src='../assets/GmeekVercount.js'></script><script async src='https://cdn.seline.so/seline.js' data-token='5b15b5092d4879e'></script><script async src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9661896697976587' crossorigin='anonymous'></script>",
    "head":"",
    "indexStyle":"",
    "indexScript":"",

    "spoiler":0,     #是否开启页面NSFW遮挡

    "lived2D":1,   #是否开启二次元娘
    "lived2D_script":"<script src='https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js'></script><script src='https://cdn.jsdelivr.net/npm/jquery-ui@1.14.1/dist/jquery-ui.min.js'></script><script src='https://cdn.jsdelivr.net/gh/hst1189/live2d-widget/autoload.js'></script>",

    "sakuraPlus":1,  #是否开启樱花飘落
    "sakuraPlus_script":"<script src='../assets/sakuraPlus.js'></script>",
    
    "rssSplit":"sentence",
    "bottomText":"❤️ 转载文章请注明出处，谢谢！❤️",
    "ogImage":"",
    "primerCSS":"<link href='https://cdn.jsdelivr.net/npm/@primer/css@21.5.1/dist/primer.min.css' rel='stylesheet' />",
    "showPostSource":0,
    "needComment":1
}}
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

