# 白嫖cloudflare无限企业邮箱

## 🎉收邮件
1. 进入cloudflare，选择一个已绑定的域名
2. 启用email routing，自动生成５条DNS记录（３个MX，２个TXT），添加结果可以在DNS面板里看到
3. 设置email routing规则，编辑Catch-All绑定一个転送邮箱，通过邮箱验证后，転送状态变为可用

> [!TIP]
> 邮箱「**任意字符**@ **上述绑定的域名**」， 所接受到的邮件 都会転送到Catch-All
> 例：发送至：**任意**@**grapehut.xyz**  的邮件，会転送到Catch-All 绑定邮箱

> [!TIP]
> cloudflare邮件设置的概要栏里可以查看，所有收到的邮件



## 🎉发邮件
resend.com的API服务  
https://resend.com/onboarding

1. Add Domain，自动生成3条DNS（1条MX，2条TXT）
`Gmeek-html<img src="../imgs/resend/resend1.PNG">`


2. 添加回 cloudflare
`Gmeek-html<img src="../imgs/resend/resend2.PNG">`


#### 测试
https://resend.com/docs/send-with-nodejs

```javascript
import { Resend } from 'resend';

const resend = new Resend('re_xxxxxxx');

(async function () {
  const { data, error } = await resend.emails.send({
    from: 'Acme <任意@grapehut.xyz>',
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