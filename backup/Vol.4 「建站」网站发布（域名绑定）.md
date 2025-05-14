```
域名　→　cloudflare　→　github
```

# 一、注册域名（任意域名）
付费的，免费的都可以，根据自身钱包的富裕程度，👀  省略若干字。。。

# 二、注册cloudflare
注册赛博大神cloudflare，利用它的DNS服务（已有账号也可以）

# 三、域名关联cloudflare的DNS服务
在cloudflare里选择DNS服务栏，add domain，填入域名，获取Name Serve，
复制，粘贴到域名服务商的网站，进行关联，稍等片刻cloudflare会自动check完成
`Gmeek-html<img src="../imgs/cloudflare_dns.png">`

# 四、cloudflare关联github

> [!NOTE]
> IP地址  （出典：github官网）
> https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-a-subdomain


### 配置 apex 域

- 要创建 A 记录，请将顶点域指向 GitHub Pages 的 IP 地址。
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

- 要创建 AAAA 记录，请将顶点域指向 GitHub Pages 的 IP 地址。
```
2606:50c0:8000::153
2606:50c0:8001::153
2606:50c0:8002::153
2606:50c0:8003::153
```

`Gmeek-html<img src="../imgs/cloudflare_dns2.png">`
`Gmeek-html<img src="../imgs/cloudflare_dns3.png">`

如图所示，填入IP，然后一路yes & 保存，另外SSL开启，证明书用的是默认的，

确认 DNS 记录配置正确，请使用 dig 命令，确认结果与上面 GitHub Pages 的 IP 地址相匹配。

适用于 A 记录：
```
$ dig grapehut.us.kg +noall +answer -t A
> grapehut.us.kg    3600    IN A     185.199.108.153
> grapehut.us.kg    3600    IN A     185.199.109.153
> grapehut.us.kg    3600    IN A     185.199.110.153
> grapehut.us.kg    3600    IN A     185.199.111.153
```
适用于 AAAA 记录：
```
$ dig grapehut.us.kg +noall +answer -t AAAA
> grapehut.us.kg     3600    IN AAAA     2606:50c0:8000::153
> grapehut.us.kg     3600    IN AAAA     2606:50c0:8001::153
> grapehut.us.kg     3600    IN AAAA     2606:50c0:8002::153
> grapehut.us.kg     3600    IN AAAA     2606:50c0:8003::153
```

### 配置 www 子域

导航到 DNS 提供程序并为指向 GitHub Pages 默认域的 www 子域创建一条 CNAME 记录。
例如，github page网站位于 xxx.github.io，则应创建一条将 www.grapehut.us.kg 指向 xxx.github.io 的 CNAME 记录。


要确认 DNS 记录配置正确，请使用 dig 命令

适用于 CNAME 记录：
```
$ dig www.grapehut.us.kg +nostats +nocomments +nocmd
> ;www.grapehut.us.kg.                    IN      A
> www.grapehut.us.kg.             3592    IN      CNAME   YOUR-USERNAME.github.io.
> YOUR-USERNAME.github.io.      43192   IN      CNAME   GITHUB-PAGES-SERVER .
> GITHUB-PAGES-SERVER .         22      IN      A       192.0.2.1
```




# 五、github关联域名
`Gmeek-html<img src="../imgs/cloudflare_dns4.png">`

> 单击 “设置”  -> 单击 侧边栏的“ Pages”  ->  在“自定义域”下，键入自定义域，然后单击“保存”。

如图所示，github的custom domain里填入域名，稍等片刻后，就是见证奇迹的时刻！[小饅頭の部屋](https://grapehut.us.kg/)
至此，通过「Gmeek」构筑的超轻量级网站就诞生了。

