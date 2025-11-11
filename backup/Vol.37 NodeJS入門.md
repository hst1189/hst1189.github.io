# NodeJS

## xxxx

## nodemon
## http-server
## json-server
## express-generator
## sass
## typescript
## vercel
## firebase-tools

## nodemon (https://www.npmjs.com/package/nodemon)
```javascript
npm install nodemon -g
nodemon xx.js
```

## express (https://www.npmjs.com/package/express)
```javascript
npm install express
```

```javascript
const data = require('./data.json');
const express = require("express");
const app = express();

app.get('/', (req, res) => {
    let html = "";
    data.map(item => {
        html += `<h1> ${item.name} </h1><img src='${item.message}' />`;
    });
    res.send(html);
});

app.get('/:id', (req, res) => {
    let html = "";
    let id = req.params.id;
    let result = data.find(item => item.id == id);
    if (result) {
        html += `<h1> ${result.name} </h1><img src='${result.message}' />`;
    } else {
        html = `<h1>404 Not Found  </h1>`;
    }
    res.send(html);
});

app.listen(80, () => {
    console.log('Starting on 80')
});
```

```json
[
    {
        "id": 1,
        "name": "weimaraner",
        "message": "https://images.dog.ceo/breeds/weimaraner/n02092339_4214.jpg",
        "status": "success"
    },
    {
        "id": 2,
        "name": "dane-great",
        "message": "https://images.dog.ceo/breeds/dane-great/n02109047_5936.jpg",
        "status": "success"
    },
    {
        "id": 3,
        "name": "pyrenees",
        "message": "https://images.dog.ceo/breeds/pyrenees/n02111500_4731.jpg",
        "status": "success"
    }
]
```




## express-generator ()
```
npm i express-generator -g
```


## fs.createReadStreamの基本的な使い方
```javascript
const fs = require('fs');
const path = require('path');
const rs = fs.createReadStream(path.resolve(__dirname, 'test.txt'));
rs.on('data', chunk => {             // データチャンク（Bufferオブジェクト）
    console.log(chunk.toString());
});
```

イベント処理:
```javascript
on('data', ...): ファイルからデータが読み込まれるたびに発火します。
on('end', ...): ファイルの読み込みが完了したときに発火します。
on('error', ...): 読み取り中にエラーが発生した場合に発火します。 

rs.on('data', (chunk) => { console.log(`読み込まれたデータ: ${chunk}`); });
rs.on('end', ()           => { console.log('ファイル読み込みが完了しました。'); });
rs.on('error', (err)     => { console.error('エラーが発生しました:', err);});
```

## fs.createWriteStreamの基本的な使い方
fs.createWriteStream(path, options)  のように使用します。 
path: 書き込み先のファイルパスを指定します。
options: 書き込み方法をカスタマイズするためのオプションを指定します（例: エンコーディング、モードなど）。

```javascript
const fs = require('fs');
const path = require('path');
const ws= fs.createWriteStream(path.resolve(__dirname, 'test.txt'));

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
```javascript
const rs = fs.createReadStream('./test.txt');
const ws = fs.createWriteStream('./test2.txt');

rs.on('data', chunk => {
    ws.write(chunk);
});
```
```javascript
fs.copyFile("test.txt", "test3.txt", err => {
    if (err) { console.log(err); }
});
```
