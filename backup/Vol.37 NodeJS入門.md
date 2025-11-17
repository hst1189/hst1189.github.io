# NodeJS

### 🚀Node.js vs Browser

https://www.w3schools.com/nodejs/nodejs_vs_browser.asp

Feature | Node.js | Browser
-- | -- | --
File System Access | Yes | No
Networking (TCP/UDP) | Yes | No
DOM Access | No | Yes
Global Object | global | window/self
Modules | CommonJS/ESM | ESM/Scripts
Environment Variables | Yes (process.env) | No
Security | Full OS access | Sandboxed
Package Management | npm/yarn | CDN/Bundler



### 🚀CommonJS vs ES Modules
https://www.w3schools.com/nodejs/nodejs_modules_esm.asp

Feature | CommonJS | ES Modules
-- | -- | --
File Extension | .js (default) | .mjs (or .js with proper config)
Import Syntax | require() | import
Export Syntax | module.exports / exports | export / export default
Import Timing | Dynamic (runtime) | Static (parsed before execution)
Top-level Await | Not supported | Supported
File URL in Imports | required for local files | import for local files

> [!TIP]
>CommonJS：   
> ①模块导出  module.exports / exports
> ②模块导入  require() 
> ③浏览器不支持
> 
>ESmodule： 
> ①模块导出   export / export default
> ②模块导入  import
> ③浏览器支持




### 🚀路径分析： 依据标识符确定模块位置

1. 优先加载内置模块，即使有同名文件，也会优先使用内置模块。
2. 不是内置模块，先去缓存找。
3. 缓存没有就去找对应路径的文件。
4. 不存在对应的文件，就将这个路径作为文件夹加载。
5. 对应的文件和文件夹都找不到就去node_modules下面找。
6. 还找不到就报错了。

文件夹加载，前提是找不到文件，但是不可能将整个文件夹都加载进来，加载文件夹的时候也是有一个加载顺序的：

7. 先看看这个文件夹下面有没有package.json，如果有就找里面的main字段，main字段有值就加载对应的文件
8. 如果没有package.json或者package.json里面没有main，就找index文件
9. 如果这两步都找不到就报错了。



> [!TIP]
>import、 require()  能加载什么文件
> 1、.js文件： 通过module.exports 或者 exports 导出模块文件
> 2、.json文件：通过JSON.parse解析、把 JSON 文件解析成一个 JavaScript 对象
> 3、any文件：其他任意文件都会当作js文件解析

### fetch
```javascript
    fetch(' url ')    // 可以跨域请求
        .then(response => response.json())   // 返回一个Promiss对象，使用它的.json() 获取json对象
        .then(data => {
            console.log(data);
        })
        .catch(error => console.log(error))
```

##### 実例１（Express内使用）
```javascript
app.get('/list', (req, res) => {
    fetch('https://dummyjson.com/recipes')
        .then(response => response.json())
        .then(data => {
            res.json(data.recipes);　　// res.json() 返回json对象
        })
        .catch(error => console.log(error))
});

app.get('/list/:id', (req, res) => {
    fetch('https://dummyjson.com/recipes')
        .then(response => response.json())
        .then(data => {
            const item = data.recipes.find(item => item.id == req.params.id);
            console.log(item);
            res.json(item);
        })
        .catch(error => console.log(error))
});
```

##### 実例２（HTML内使用）
```html
    <ul id="bbb"></ul>
    <script>
        const ul_user = document.getElementById("bbb");
        fetch('https://dummyjson.com/users')
            .then(response => response.json())
            .then(data => {
                data.users.forEach(element => {
                    ul_user.innerHTML += `<li><img src='${element.image}'/>${element.firstName} ${element.age}</li>`;
                });
            })
            .catch(error => console.error(error))
    </script>
```



> [!TIP]
> 除了res.json( )、下面方法可以转换
>
>JSON.stringify( )　　Obj⇒JSON文字列
>例: JSON.stringify({ name: "Taro", age: 30 }) は  {"name":"Taro","age":30} 
> 
>JSON.parse( )　　JSON文字列⇒Obj
>例: JSON.parse({"name":"Taro","age":30}) は { name: "Taro", age: 30 }
>
>※JSON文字列：key 必须双引号，只保存属性，不保存方法，如果 Obj里有方法，转换后会失去






## npm
```javascript
npm init    // 初始化一个新项目，在当前目录创建 package.json 文件

npm install    // 根据 package.json 文件安装项目的所有依赖
npm install <package-name>        // 当前项目安装指定package
npm install -g <package-name>    // 全局安装指定package

npm uninstall <package-name>        // 当前项目删除指定package
npm uninstall -g <package-name>    // 全局删除指定package

npm ls        // 查看当前项目package
npm ls -g    // 查看全局package

npm view        // 查看当前项目所有依赖项的最新版本
npm outdated    // 仅列出当前项目已过时的依赖项

npm update  <package-name>    // 当前项目更新指定package
npm update                    // 根据 package.json 文件更新项目的所有依赖
npm update -g <package-name>  // 更新package

```


## 常用第三方库
```javascript

npm install express            //ExpressJSフレームワーク
npm install -g express-generator // 快速构建 ExpressJS项目

npm install morgan    // HTTPリクエストのログを記録するミドルウェア

npm install http-proxy-middleware    // 代理

npm install @apollo/server graphql  //GraphQL Server

npm install -g json-server   // 快速构建 json REST API  server
json-server --watch abc.json
http://localhost:3000

npm install -g http-server   // 快速构建static HTTP server
http-server
http://localhost:8080/
```

## core 库

### os 库  
https://www.w3schools.com/nodejs/nodejs_os.asp

### path 库  
https://www.w3schools.com/nodejs/nodejs_path.asp

> [!TIP]
> 关于__dirname、__filename
> 末尾にスラッシュ（/）は含まれません。Node.jsのグローバル変数であり、ブラウザでは使用できません。
>
> 在ESmodule下，需 import定义
> const __dirname = import.meta.dirname;
> const __filename = import.meta.filename;

```javascript
const os = require('os');
const path = require('path');

// Basic system information
console.log(`OS Platform: ${os.platform()}`);
console.log(`OS Type: ${os.type()}`);
console.log(`OS Release: ${os.release()}`);
console.log(`Kernel Version: ${os.version()}`);
console.log(`CPU Architecture: ${os.arch()}`);
console.log(`Hostname: ${os.hostname()}`);

// Memory information
const totalMemGB = (os.totalmem() / (1024 * 1024 * 1024)).toFixed(2);
const freeMemGB = (os.freemem() / (1024 * 1024 * 1024)).toFixed(2);
console.log(`Memory: ${freeMemGB}GB free of ${totalMemGB}GB`);

// User information
const user = os.userInfo();
console.log('User Information:');
console.log(`- Username: ${user.username}`);
console.log(`- User ID: ${user.uid}`);
console.log(`- Group ID: ${user.gid}`);

// On Windows, you can also get the user's domain
if (os.platform() === 'win32') {
    console.log(`- Domain: ${user.domain || 'N/A'}`);
}
// Note: user.shell is only available on POSIX platforms
if (user.shell) {
    console.log(`- Default Shell: ${user.shell}`);
}


// Get the home directory
const homeDir = os.homedir();
console.log(`Home Directory: ${homeDir}`);

// Get the system default temp dir
console.log(`Temporary Directory: ${os.tmpdir()}`);
```



### fs 库  
https://www.w3schools.com/nodejs/nodejs_filesystem.asp


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

