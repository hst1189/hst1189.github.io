# NodeJS

![Image](https://github.com/user-attachments/assets/6fddb85e-63f0-4169-9515-68ccff3dccc5)

## cheatsheet
https://gist.github.com/wle8300/7fe24f89fcdb60269c86


## npm
```javascript
npm init    // 初始化一个新项目，在当前目录创建 package.json 文件

npm install    // 根据 package.json 文件安装项目的所有依赖
npm install <package-name>        // 当前项目安装指定package
npm install  -g <package-name>    // 全局安装指定package

npm uninstall <package-name>        // 当前项目删除指定package
npm uninstall  -g <package-name>    // 全局删除指定package

npm ls        // 查看当前项目package
npm ls -g    // 查看全局package
```

## 常用第三方库
```javascript

npm install express            //ExpressJSフレームワーク
npm install -g express-generator // 快速构建 ExpressJS项目

npm install -g json-server   // 快速构建 json REST API  server
json-server --watch abc.json
http://localhost:3000

npm install -g http-server   // 快速构建static HTTP server
http-server
http://localhost:8080/
```






## fs 库  
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

### 注意点
- __dirnameは末尾にスラッシュ（/）は含まれません。
- __dirnameはNode.jsのグローバル変数であり、ブラウザのJavaScriptでは使用できません。


