# NodeJS


## fs.createReadStreamの基本的な使い方
fs.createReadStream(path)   ファイルの指定: 読み取るファイルをパスで指定します。
イベント処理:
```
on('data', ...): ファイルからデータが読み込まれるたびに発火します。
on('end', ...): ファイルの読み込みが完了したときに発火します。
on('error', ...): 読み取り中にエラーが発生した場合に発火します。 
```

```javascript
const fs = require('fs');
const rs= fs.createReadStream('./test.txt');

rs.on('data', (chunk) => {
  console.log(`読み込まれたデータ: ${chunk}`); // データチャンク（Bufferオブジェクト）の処理
});

rs.on('end', () => {
  console.log('ファイル読み込みが完了しました。');
});

rs.on('error', (err) => {
  console.error('エラーが発生しました:', err);
});
```

## fs.createWriteStreamの基本的な使い方
fs.createWriteStream(path, options)  のように使用します。 
path: 書き込み先のファイルパスを指定します。
options: 書き込み方法をカスタマイズするためのオプションを指定します（例: エンコーディング、モードなど）。

```javascript
const fs = require('fs');
const ws= fs.createWriteStream('./test.txt');

// データチャンクをストリームに書き込む
ws.write('これは最初の部分です。\n');
ws.write('これは2番目の部分です。\n');
ws.end(); // ストリームを閉じる（これがないとfinishイベントが発火しない場合があります）

// 書き込みが完了したときにイベントを発火
ws.on('finish', () => {
  console.log('ファイルへの書き込みが完了しました。');
});

// エラーが発生した場合にイベントを発火
ws.on('error', (err) => {
  console.error('書き込み中にエラーが発生しました:', err);
});
```

## 复制文件
```
const rs = fs.createReadStream('./test.txt');
const ws = fs.createWriteStream('./test2.txt');

rs.on('data', chunk => {
    ws.write(chunk);
});
```
