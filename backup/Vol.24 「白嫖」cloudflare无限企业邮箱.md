# 白嫖cloudflare无限企业邮箱

## 🎉收邮件（简易模式）
1. 进入cloudflare，选择一个域名
2. 启用 Email Routing，自动生成５条DNS记录（３个MX，２个TXT），添加结果可以在DNS面板里看到
`Gmeek-html<img src="../imgs/resend/resend1.png">`
3. 设置 Email Routing 规则，编辑Catch-All绑定一个転送邮箱，**通过邮箱验证后，転送状态变为可用**
`Gmeek-html<img src="../imgs/resend/resend2.png">`

> [!TIP]
> １．发送至：**任意字符**@**xxx.com**  的邮件，都会転送到Catch-All 绑定邮箱
> ２．Email Routing邮件设置的概要栏里，可以查看所有收到的邮件



## 🎉收邮件（高级模式，通过worker存储在D1 KV里）

部署手册：https://doc.skymail.ink/guide/dashboard.html


### 创建worker
1.  克隆GitHub仓库
`Gmeek-html<img src="https://doc.skymail.ink/assets/0.BgZTtVBn.png">`

2.  进入cloudflare, 创建worker
`Gmeek-html<img src="https://doc.skymail.ink/assets/1.C_OKFTJq.png">`

3.  选择从GitHub导入
`Gmeek-html<img src="https://doc.skymail.ink/assets/2.yrULln52.png">`

4.  部署
 设置目录 `mail-worker`，其余都默认设置
`Gmeek-html<img src="https://doc.skymail.ink/assets/3.BlAKorP8.png">`

5.  worker设置自定义域，添加环境变量

变量名 | 必需 | 用途
---|---|---
domain | ✅| 邮箱域名,多域名用（例如 `["example.com","example2.com"]`）
admin | ✅ | 管理员邮箱地址（例如 `admin@example.com`）
jwt\_secret | ✅| JWT密钥 随便输入一串字符串，不要输入特殊字符
project\_link | ❌ | 隐藏登录界面项目链接 (true显示 false隐藏)

`Gmeek-html<img src="https://doc.skymail.ink/assets/5.CX5wLrGh.png">`


###  Email Routing设置转发
`Gmeek-html<img src="https://doc.skymail.ink/assets/7.Bm0YMP0b.png">`
`Gmeek-html<img src="https://doc.skymail.ink/assets/8.jfYabKoj.png">`


### KV和D1
1.  创建KV和D1数据库
`Gmeek-html<img src="https://doc.skymail.ink/assets/4-4.Ddg5IGmI.png">`

3.  添加绑定，变量名必须为**kv**和**db**
`Gmeek-html<img src="https://doc.skymail.ink/assets/4.d1DzXNm-.png">`


### 初始化数据库
浏览器输入 `https://worker自定义域/api/init/你的jwt_secret`
`Gmeek-html<img src="https://doc.skymail.ink/assets/10.DVYtU_xR.png">`


### 登录网站
浏览器输入自定义域名，注册管理员账号，登录网站
`Gmeek-html<img src="https://doc.skymail.ink/assets/9.UpdVuA4A.png">`




## 🎉发邮件
> [!IMPORTANT]
> Cloudflare 目前不支持发件，封禁25端口，只能使用第三方服务

### 设置resend
注册resend.com，并添加域名，完成DNS验证 
https://resend.com/domains

1. Add Domain，自动生成3条DNS（1条MX，3条TXT）
`Gmeek-html<img src="https://doc.skymail.ink/assets/1.DwYi9syY.png">`
`Gmeek-html<img src="../imgs/resend/resend3.png">`

2. 添加回 cloudflare
`Gmeek-html<img src="../imgs/resend/resend4.png">`
`Gmeek-html<img src="../imgs/resend/resend5.png">`

3. 设置webhooks `https://worker自定义域/api/webhooks`
`Gmeek-html<img src="https://doc.skymail.ink/assets/2.FAyxtFE4.png">`
`Gmeek-html<img src="https://doc.skymail.ink/assets/4.B6iEcvcq.png">`


### 绑定resend.comAPI
1. 创建 API Key
`Gmeek-html<img src="https://doc.skymail.ink/assets/3.C6CYekPc.png">`

2. 绑定API
`Gmeek-html<img src="https://doc.skymail.ink/assets/5.DXbq-DgO.png">`



#### 测试
https://resend.com/docs/send-with-nodejs

```javascript
import { Resend } from 'resend';

const resend = new Resend('re_xxxxxxx');

(async function () {
  const { data, error } = await resend.emails.send({
    from: 'Acme <任意@xxx.com>',
    to: ['目标邮箱@outlook.com'],
    subject: 'Hello World',
    html: '<strong>It works!</strong>',
  });

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
})();
```