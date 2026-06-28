## 查看版本
curl --version 

## オプション 
オプション | 説明
-- | --
-X | リクエストメソッドの指定
-H | リクエストヘッダーの追加
-d | POSTリクエストで送信するデータ
-I | ヘッダーのみを表示
-O | 文件下载
-o | 自定义文件名下载 -o 文件名
-T | 上传文件 -T パス/文件名
-u | -u 用户名:密码
-L | リダイレクトを追跡
-v | 连接信息
--proxy |  代理服务器  --proxy http://用户名:密码@127.0.0.1:端口

## 例
```
curl -X GET http://example.com
```

```
curl -X POST  http://example.com/post \
       -H "Content-Type: application/json" \
       -d '{"name": "John", "age": 25}'
```

```
curl -X PUT  http://example.com/post \
       -H "Content-Type: application/json" \
       -d '{"name": "John", "age": 25}'  
```

```
curl -X DELETE  http://example.com/post \
       -H "Content-Type: application/json" \
       -d '{"name": "John", "age": 25}'
```

```
curl -I http://example.com
```
```
curl -O https://cdn-ak.f.st-hatena.com/images/fotolife/p/pixiv_corp/20220804/20220804131307.png
```

```
curl -o aaa.png https://cdn-ak.f.st-hatena.com/images/fotolife/p/pixiv_corp/20220804/20220804131307.png
```

```
curl -L https://www.bilibili.com
```

```
curl -v -L https://www.bilibili.com
```

```
curl --proxy http://用户名:密码@127.0.0.1:433  https://www.bilibili.com
```



## curl vs wget
- curl:
デフォルトでは標準出力に出力される。
HTTPヘッダーの表示や、POSTリクエストの送信、プロトコルのサポートが豊富。
URLのリクエストだけでなく、APIテストや複雑なデータの送信も可能。

- wget:
デフォルトでファイルをダウンロードする。
再帰的なダウンロードが可能。
一般的にwgetは単純なファイルのダウンロードに向いている。

```
wget -r -l inf -k -p -E -np https://example.com
-r：　　 递归下载
-l inf：   递归深度无限（或指定数字）
-k：　　将绝对链接转换为相对链接
-p：　   下载所有页面所需的扑住文件（图片，CSS，JS等）
- E：　   调整HTML文件的扩张名（如果需要）
- np：    不向上级目录检索（防止下载不相关内容）
```

