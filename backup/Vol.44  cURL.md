## 查看版本
curl --version 

## オプション 
オプション | 説明
-- | --
-X | リクエストメソッドの指定
-H | リクエストヘッダーの追加
-d | POSTリクエストで送信するデータ
-I | ヘッダーのみを表示
-O | ファイル名をそのままダウンロード
-o | 自定义出力ファイル名
-u | ユーザー名とパスワードの指定
-L | リダイレクトを追跡
-v | 连接信息

## 例
```
curl -X GET http://example.com
```
```
curl -X POST -H "Content-Type: application/json" -d '{"name": "John", "age": 25}'  http://example.com/post
```
```
curl -X PUT -H "Content-Type: application/json" -d '{"name": "John", "age": 25}'  http://example.com/post
```
```
curl -X DELETE -H "Content-Type: application/json" -d '{"name": "John", "age": 25}'  http://example.com/post
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




## curl vs wget
- curl:
デフォルトでは標準出力に出力される。
HTTPヘッダーの表示や、POSTリクエストの送信、プロトコルのサポートが豊富。
URLのリクエストだけでなく、APIテストや複雑なデータの送信も可能。

- wget:
デフォルトでファイルをダウンロードする。
再帰的なダウンロードが可能。
一般的にwgetは単純なファイルのダウンロードに向いている。


