## 查看版本
curl --version 

## 获取内容
curl http://example.com

## 例
curl -X GET http://example.com
curl -X POST     -H "Content-Type: application/json" -d '{"name": "John", "age": 25}'  http://example.com/post
curl -X PUT       -H "Content-Type: application/json" -d '{"name": "John", "age": 25}'  http://example.com/post
curl -X DELETE  -H "Content-Type: application/json" -d '{"name": "John", "age": 25}'  http://example.com/post

## オプション 
オプション | 説明
-- | --
-X | リクエストメソッドの指定
-H | リクエストヘッダーの追加
-d | POSTリクエストで送信するデータ
-I | ヘッダーのみを表示
-o | 出力をファイルに保存
-O | リモートファイル名を使用して保存
-u | ユーザー名とパスワードの指定
-L | リダイレクトを追跡

## curl vs wget
- curl:
デフォルトでは標準出力に出力される。
HTTPヘッダーの表示や、POSTリクエストの送信、プロトコルのサポートが豊富。
URLのリクエストだけでなく、APIテストや複雑なデータの送信も可能。

- wget:
デフォルトでファイルをダウンロードする。
再帰的なダウンロードが可能。
一般的にwgetは単純なファイルのダウンロードに向いている。


