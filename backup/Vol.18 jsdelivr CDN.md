# 关于jsdelivr 
> https://www.jsdelivr.com/

## jsdelivr CDN 和 GitHub 的关系
jsdelivr 是一个免费且可靠的内容分发网络（CDN）服务，允许开发者将静态资源存储在 GitHub 仓库中，并通过 jsdelivr 进行全球加速访问。
jsdelivr 能够通过提供一个 CDN 地址，将存储在 GitHub 仓库中的资源进行加速，从而使这些资源在全球范围内快速加载。

## 如何将 GitHub 项目与 jsdelivr 对应起来
将静态资源（如图片、JavaScript 文件、CSS 文件等）上传到 公开的 GitHub 仓库中。
例如，你可能有一个名为 my-project 的 GitHub 仓库，里面有一个 images 文件夹，存储了一些图片。

## 使用 jsdelivr CDN 进行访问
一旦资源上传到 GitHub 仓库中，你可以通过 jsdelivr 提供的 URL 访问这些资源。jsdelivr 提供了一个与 GitHub 项目相关联的 CDN 地址，该地址遵循以下格式：

```
e.g. https://cdn.jsdelivr.net/gh/hst1189/live2d-widget/autoload.js

https://cdn.jsdelivr.net/gh/[GitHub用户名]/[仓库名]@[标签或分支]/[文件路径]
- [GitHub用户名]：GitHub用户名
- [仓库名]           ：GitHub仓库名称
- [标签或分支]   ：GitHub标签或分支（例如 main 或 v1.0）
- [文件路径]       ：文件路径
```

# 关于Github RAW 加速服务
## github的加速服务（raw.githubusercontent.com）
```
e.g. https://raw.githubusercontent.com/hst1189/live2d-widget/master/autoload.js

https://raw.githubusercontent.com/[GitHub用户名]/[仓库名]/[标签或分支]/[文件路径]
- [GitHub用户名]：GitHub用户名
- [仓库名]           ：GitHub仓库名称
- [标签或分支]   ：GitHub标签或分支（例如 main 或 v1.0）
- [文件路径]       ：文件路径
```
