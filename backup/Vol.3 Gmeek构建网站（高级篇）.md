# 一、主题配置 👀 

### 1. 手动模式（默认）
这种模式就是当访问者第一次打开博客页面时，呈现的是亮主题。
访问者可以通过页面右上角的按钮随意切换（亮/暗/跟随系统），当切换过后，会自动在浏览器存储目前的选择，之后访问者用同一浏览器再打开博客任何页面，则自动为上次选择的模式。
```
"themeMode":"manual",
"dayTheme":"light",
"nightTheme":"dark",
```

### 2. 固定模式
```
"themeMode":"fix",    定义固定
"dayTheme":"light",   定义固定的主题，`light`则永远为亮主题，`dark`则永远为暗主题，用户无法切换
"nightTheme":"github-light",    定义`utterances`评论框的永久固定主题。
```

#### 2.1. 固定亮主题
```
"themeMode":"fix",
"dayTheme":"light",
"nightTheme":"github-light",
```
#### 2.2. 固定暗主题
```
"themeMode":"fix",
"dayTheme":"dark",
"nightTheme":"dark-blue",
```
> [!TIP]
> 主题设置可以查看[github官方](https://github.com/settings/appearance)支持的主题
> 亮主题：`light` `light_high_contrast` `light_colorblind ` `light_tritanopia `
> 暗主题：`dark` `dark_high_contrast` `dark_colorblind` `dark_tritanopia` `dark_dimmed`

> [!TIP]
> [utterances](https://utteranc.es/)评论框的主题选择有：
> 亮主题：`github-light` `boxy-light` `preferred-color-scheme`
> 暗主题：`github-dark` `github-dark-orange` `icy-dark` `dark-blue` `photon-dark` `gruvbox-dark`




# 二、右上角的按钮配置 👀 
在首页上部的右侧有一些按钮，配置方式如下：

### 1. 站内链接
例如[关于页面](https://grapehut.us.kg/about.html)和[友情链接](https://grapehut.us.kg/link.html)

#### 1.1. 添加config.json配置
```
"singlePage":["about"],
```
#### 1.2. 添加一个Labels标签为`about`，在你的issue里面写一个文章，然后配置Labels为`about`即可。
#### 1.3. 手动全局生成一次。

> [!IMPORTANT]
> `about`标签只可以添加给唯一一篇issue
> 如果有多个`singlePage`，可以这样定义`"singlePage":["link","about"],`
> `about`和`link`这两个图标的SVG是内置的无需定义`iconList`，其他则需要自己定义


### 2. 站外链接
如果你的`about`页面是站外的，或者想定义其他的站外链接，例如[music](https://music.meekdai.com/)。下面以添加music页面按钮为示例。

#### 2.1. 添加config.json配置
此处`iconList`自定义了图标的SVG，`exlink`定义了外部链接的地址
```
"iconList":{"music":"M12.7 0.9L7.3 0.9C6 0.9 4.9 2 4.9 3.3L4.9 10.1C4.5 9.9 4.1 9.8 3.6 9.8C2.1 9.8 0.9 11 0.9 12.4C0.9 13.9 2.1 15.1 3.6 15.1C5 15.1 6.2 13.9 6.2 12.4L6.2 3.3C6.2 2.7 6.7 2.2 7.3 2.2L12.7 2.2C13.3 2.2 13.8 2.7 13.8 3.3L13.8 7.5C13.4 7.3 12.9 7.1 12.4 7.1C11 7.1 9.8 8.3 9.8 9.8C9.8 11.2 11 12.4 12.4 12.4C13.9 12.4 15.1 11.2 15.1 9.8L15.1 3.3C15.1 2 14 0.9 12.7 0.9ZM3.6 13.8C2.8 13.8 2.2 13.2 2.2 12.4C2.2 11.7 2.8 11.1 3.6 11.1C4.3 11.1 4.9 11.7 4.9 12.4C4.9 13.2 4.3 13.8 3.6 13.8ZM12.4 11.1C11.7 11.1 11.1 10.5 11.1 9.8C11.1 9 11.7 8.4 12.4 8.4C13.2 8.4 13.8 9 13.8 9.8C13.8 10.5 13.2 11.1 12.4 11.1ZM12.4 11.1"},
"exlink":{"music":"https://music.meekdai.com"},
```
#### 2.2. 手动全局生成一次。


### 3. SVG图标格式
使用`iconList`自定义SVG图标必须是`16px`大小的，建议使用github的[Octicons 图标](https://primer.style/foundations/icons/#16px)

Octicons图标链接：https://primer.style/foundations/icons/#16px
大佬自己转换的Octicons图标path列表：https://gist.github.com/Meekdai/f6375fe2740428af39d90f1afa678fdc





# 三、提示标签 👀 
Github的语法里面有5种警报强调信息，分别是`NOTE` `TIP` `IMPORTANT` `WARNING` `CAUTION` 
在写文章的时候，适当使用可以提高文章的可读性

### 使用方式：
```
> [!NOTE]
> Useful information that users should know, even when skimming content.

> [!TIP]
> Helpful advice for doing things better or more easily.

> [!IMPORTANT]
> Key information users need to know to achieve their goal.

> [!WARNING]
> Urgent info that needs immediate user attention to avoid problems.

> [!CAUTION]
> Advises about risks or negative outcomes of certain actions.
```

### 效果：
> [!NOTE]
> Useful information that users should know, even when skimming content.

> [!TIP]
> Helpful advice for doing things better or more easily.

> [!IMPORTANT]
> Key information users need to know to achieve their goal.

> [!WARNING]
> Urgent info that needs immediate user attention to avoid problems.

> [!CAUTION]
> Advises about risks or negative outcomes of certain actions.


# 四、折叠显示 👀 
### 使用方式：
```
<details>
    <summary>展开</summary>
    <pre><code>
    # 这里空一行，下面开始写代码
    # 在这里写折叠的代码
    # 最后这两行结束标签一定要顶格写且不能接在代码后面！！！
    </code></pre>
</details>
```
### 效果：
<details>
    <summary>展开</summary>
    <pre><code>
    # 这里空一行，下面开始写代码
    # 在这里写折叠的代码
    # 最后这两行结束标签一定要顶格写且不能接在代码后面！！！
    </code></pre>
</details>




# 五、文章插入html标签 👀 
Github由于安全考虑，是不允许使用`iframe`等标签的，而且在issues插入的图片也会自动转换为github的地址。
为了文章的多样性，在Gmeek的`v2.19`版本中添加了支持html标签的功能。

### 使用方式：
在需要添加html标签的位置使用`code`方式，并且后面紧跟着Gmeek-html，然后才是html标签。

#### 1. 图片
`Gmeek-html<img src="https://picsum.photos/400">`
```
`Gmeek-html<img src="https://picsum.photos/400">`
```

#### 2. 内嵌框架iframe-网站
`Gmeek-html<iframe style='border-radius:12px' src="https://music.meekdai.com/#35" width="100%" height="150px" frameborder="0" allowfullscreen="true"></iframe>`
```
`Gmeek-html<iframe style='border-radius:12px' src="https://music.meekdai.com/#35" width="100%" height="150px" frameborder="0" allowfullscreen="true"></iframe>`
```

#### 3. 内嵌框架iframe-音乐
`Gmeek-html<iframe style='border-radius:12px' src='https://open.spotify.com/embed/track/0U3fV7K4WFfVRgLGEAKh3g?utm_source=generator' width='100%' height='100' frameBorder='0' allowfullscreen='' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' loading='lazy'></iframe>`
```
`Gmeek-html<iframe style='border-radius:12px' src='https://open.spotify.com/embed/track/0U3fV7K4WFfVRgLGEAKh3g?utm_source=generator' width='100%' height='100' frameBorder='0' allowfullscreen='' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' loading='lazy'></iframe>`
```

#### 4. 内嵌框架iframe-视频
`Gmeek-html<iframe style='border-radius:12px' src="//player.bilibili.com/player.html?isOutside=true&aid=1604800941&bvid=BV1qm421M7Xs&cid=1557311907&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%" height="200px"></iframe>`
```
`Gmeek-html<iframe style='border-radius:12px' src="//player.bilibili.com/player.html?isOutside=true&aid=1604800941&bvid=BV1qm421M7Xs&cid=1557311907&p=1&autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" width="100%" height="200px"></iframe>`
```


`Gmeek-html<iframe style='border-radius:12px' width="100%" height="200px" src="https://www.youtube.com/embed/RzYO_cGqrAY?si=qO64_ABMM0jyvNUi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
```
`Gmeek-html<iframe style='border-radius:12px' width="100%" height="200px"  src="https://www.youtube.com/embed/RzYO_cGqrAY?si=qO64_ABMM0jyvNUi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
```


#### 5. 其他
上面仅仅是示例了一些常用的html标签，其他html标签同样也支持，可以尝试添加到自己的文章中。 






# 六、static文件夹使用 👀 
如果需要在docs文件内上传一些自己的文件，比如图片、js、css等，所以在`v2.20`版本添加了这个功能。

### 使用方式：
1. 在自己的仓库根目录下新建一个文件夹，名称必须是`static`。
2. 然后在`static`文件内上传一些自己的文件，比如`avatar.svg`文件。
3. 通过手动全局生成一次成功后，你就可以通过 xxx.github.io/avatar.svg 访问了。

> [!TIP]
>在全局生成的时候，Actions会自动把`static`文件夹的所有内容拷贝到`docs`文件夹内。方便用户把docs当成一个目录部署到CF等其他服务器中。




# 七、插件 👀 
为了使得Gmeek的功能更加的丰富，添加了插件功能，目前已经有几个插件可以使用。

### 1. Vercount浏览计数`GmeekVercount.js`
全站添加，只需要在config.json文件内添加配置
```
"allHead":"<script src='https://blog.meekdai.com/Gmeek/plugins/GmeekVercount.js'></script>",
```
单个文章页添加，只需要在文章最后一行添加如下
```
<!-- ##{"script":"<script src='https://blog.meekdai.com/Gmeek/plugins/GmeekVercount.js'></script>"}## -->
```

### 2, TOC目录`GmeekTOC.js`
全站添加，只需要在config.json文件内添加配置
```
"script":"<script src='https://blog.meekdai.com/Gmeek/plugins/GmeekTOC.js'></script>",
```
单个文章页添加，只需要在文章最后一行添加如下
```
<!-- ##{"script":"<script src='https://blog.meekdai.com/Gmeek/plugins/GmeekTOC.js'></script>"}## -->
```

### 3. ArticleTOC目录`articletoc.js`
本插件由[Tiengming](https://code.buxiantang.top/)编写，也是一个非常不错的TOC目录插件。配置方式和上面一样，只需要替换地址为如下地址即可。
```
https://blog.meekdai.com/Gmeek/plugins/articletoc.js
```

### 4. 灯箱插件`lightbox.js`
本插件由[Tiengming](https://code.buxiantang.top/)编写，可以放大浏览文章中的图片，适合一些图片较多的文章。

全站添加，只需要在config.json文件内添加配置
```
"script":"<script src='https://blog.meekdai.com/Gmeek/plugins/lightbox.js'></script>",
```
单个文章页添加，只需要在文章最后一行添加如下
```
<!-- ##{"script":"<script src='https://blog.meekdai.com/Gmeek/plugins/lightbox.js'></script>"}## -->
```

### 5. 多插件使用

全站添加，所有文章页使用`TOC目录`和`灯箱插件`，需要这样添加配置文件：
```
"script":"<script src='https://blog.meekdai.com/Gmeek/plugins/GmeekTOC.js'></script><script src='https://blog.meekdai.com/Gmeek/plugins/lightbox.js'></script>",
```
单个文章页添加，单个文章使用`TOC目录`和`灯箱插件`，需要这样添加配置文件：
```
<!-- ##{"script":"<script src='https://blog.meekdai.com/Gmeek/plugins/GmeekTOC.js'></script><script src='https://blog.meekdai.com/Gmeek/plugins/lightbox.js'></script>"}## -->
```

> [!CAUTION]
> 需要特别注意区分`script` `head` `allHead` 等这些键的用途

I. 单篇文章自定义参数，自定义单篇文章页面的`style`和`script`
```html
<!-- ##{"style":"<style>#postBody{font-size:20px}</style>"}## -->
```
```html
<!-- ##{"script":"<script async src='//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js'></script>"}## -->
```

II. 单篇文章多种自定义参数，可同时一起添加多种自定义参数：  
```html
<!-- ##{"script":"<script async src='//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js'></script>","style":"<style>#postBody{font-size:20px}</style>","timestamp":1490764800}## -->
```

III. 全局文章自定义参数，添加全局文章页面的`style`和`script`，在`config.json`文件中添加
```javascript
"style":"<style>#postBody{font-size:20px}</style>",
"script":"<script async src='//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js'></script>",
```



# 八、其他设置 👀 

### 1. 导入以前的文章 
如需修改发布时间，可以在文章最后一行添加如下代码。里面的时间是采用时间戳的形式，可以用如下[时间形式转换网站](https://tool.lu/timestamp)转换。  
```html
<!-- ##{"timestamp":1490764800}## -->
<!-- ##{"script":"<script async src='//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js'></script>","style":"<style>#postBody{font-size:20px}</style>","timestamp":1490764800}## -->
```

### 2. 置顶博客文章
只需要`Pin issue`后，手动全局生成一次即可。

### 3. 删除文章
只需要`Close issue`或者`Delete issue`后，再手动全局生成一次即可。


