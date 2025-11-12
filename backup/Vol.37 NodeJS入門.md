# NodeJS

## cheatsheet
https://gist.github.com/wle8300/7fe24f89fcdb60269c86

## fs  
### 文件操作

```javascript

### 读文件
fs.readFile(filename, [options], callback);
fs.readFileSync(filename, [options]); 
fs.createReadStream(path, [options]);


### 写文件
fs.writeFile(filename, data, [options], callback);
fs.writeFileSync(filename, data, [options]);
fs.appendFile(filename, data, [options], callback);
fs.appendFileSync(filename, data, [options]);
fs.createWriteStream(path, [options]); 


### 重命名&移动
fs.rename(oldPath, newPath, callback);  
fs.renameSync(oldPath, newPath);


### 文件删除
fs.unlink(path, callback);   
fs.unlinkSync(path); 
fs.rm(path, callback);   
fs.rmSync(path); 
```

### 文件夹操作
```javascript
### 创建文件夹
fs.mkdir(path, [mode], callback); 
fs.mkdirSync(path, [mode]);  
fs.mkdir('./a/b/c', {recursive:true}, err=>{console.log(err)});    // 创建子文件 


### 读取文件夹
fs.readdir(path, callback); 
fs.readdirSync(path);     // 不递归，只读取当前文件夹


### 删除文件夹
fs.rmdir(path, callback); 
fs.rmdirSync(path);
fs.rmdir('./a', {recursive:true}, err=>{console.log(err)});    // 递归删除子文件 

fs.rm(path, callback); 
fs.rmSync(path);
fs.rm('./a', {recursive:true}, err=>{console.log(err)});    // 递归删除子文件 

```


### 文件状态
```javascript
fs.stat('./abc', (err, data) => {
    if (!err) {
        if (data.isFile()) { console.log('iFile') }
        if (data.isDirectory()) { console.log('isDirectory') }
    }
});
```

## fs.createReadStream使い方
```javascript
const fs = require('fs');
const path = require('path');
const rs = fs.createReadStream(path.resolve(__dirname, './test.txt'));
rs.on('data', (chunk) => { 
    console.log(`読み込まれたデータ: ${chunk}`); 
});
rs.on('end', ()=> { 
    console.log('ファイル読み込みが完了しました。'); 
});
rs.on('error', (err)=> { 
    console.error('エラーが発生しました:', err);
});

イベント処理:
on('data', ...): ファイルからデータが読み込まれる場合
on('end', ...): ファイルの読み込みが完了した場合
on('error', ...): 読み取り中にエラーが発生した場合 
```

## fs.createWriteStream使い方
```javascript
const fs = require('fs');
const path = require('path');
const ws= fs.createWriteStream(path.resolve(__dirname, './test.txt'));
ws.write('これは最初の部分です。\n');
ws.write('これは2番目の部分です。\n');
ws.end();  // ストリームを閉じる（これがないとfinishイベントが発火しない場合があります）

ws.on('finish', () => {
  console.log('ファイルへの書き込みが完了しました。');
});
ws.on('error', (err) => {
  console.error('書き込み中にエラーが発生しました:', err);
});
```




path 
url 
http 
console 
util 
定时器setTimeOut


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

![Image](https://github.com/user-attachments/assets/6fddb85e-63f0-4169-9515-68ccff3dccc5)
