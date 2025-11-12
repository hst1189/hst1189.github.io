### 注意点
- __dirnameは末尾にスラッシュ（/）は含まれません。
- __dirnameはNode.jsのグローバル変数であり、ブラウザのJavaScriptでは使用できません。

### 定型写法
```javascript

const express = require('express');
const app = express();
const PORT = 80;

app.get('/', (req, res) => {
  res. send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`server is starting on ${PORT} `);
})
```


### 全局中间件（例：写日志）
```javascript

const fs = require('fs');
const path = require('path');

function recordLogMiddleware(req, res, next) {
    let { url, ip } = req;
    let now = new Date();
    let year = now.getFullYear(); // 获取四位年份
    let month = now.getMonth() + 1; // 月份从0开始，所以+1
    let day = now.getDate(); // 日期
    let hours = now.getHours(); // 小时
    let minutes = now.getMinutes(); // 分钟
    let seconds = now.getSeconds(); // 秒

    // 格式化为 YYYY-MM-DD HH:mm:ss
    let formattedTime = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    fs.appendFileSync(path.resolve(__dirname, './access.log'), `${formattedTime} ${url} ${ip}\r\n`);
    next();                                          // 处理结束后，进入所匹配的路由
}

app.use(recordLogMiddleware);      //  声明利用中间件

```


### 路由中间件（例：跳转认证）
```javascript
function checkCodeMiddleware(req, res, next) {  
    if (req.query.code === '521') {
        next();                                   // 处理结束后，跳回所匹配的路由
    } else {
        res.send('<h1>没有权限</h1>')
    }
}

app.get('/home', checkCodeMiddleware, (req, res) => {  // 声明利用中间件
})

app.get('/admin', checkCodeMiddleware, (req, res) => {  // 声明利用中间件
})

app.get('/setting', checkCodeMiddleware, (req, res) => {  // 声明利用中间件
})

```

### 静态资源中间件
```javascript
app.use(express.static(__dirname+'./public'));
```


### 设置Response Header
```javascript
app.get('/', (req, res) => {
     
    // 原生
    res.statusCode = 200;
    res.statusMessage = "love u ";
    res.setHeader('xxx-code', '520');

    //express方法
    res.status(500);
    res.set('xxx-code', '520');

     //其他方法
    res.redirect('https://google.com');       // 重定向
    res.download(_dirname+'./xxx.json');  // 下载
    res.json({id:1,name:"xxyyzz"});             // 返回json
    res.sendFile(_dirname+'./xxx.html');    // 返回文件
})
```


### 获取Request Header
```javascript
app.get('/', (req, res) => {

    console.log(req.method);             // GET POST PUT etc.
    console.log(req.url);                // /根路径后面的部分
    console.log(req.headers);            //获取全部头
    console.log(req.get('host'));  //获取某个头
    console.log(req.get('user-agent'));  //获取某个头

    console.log(req.hostname);           //服务端主机名
    console.log(req.ip);                 //客户端ip ::ffff:127.0.0.1
    console.log(req.path);               // /根路径后面的部分
    console.log(req.query);              // ?后面的部分（例：?a=dadda&b=dasda）
})
```

### 获取路由参数
```javascript
app.get('/:id', (req, res) => {
  let id =req.params.id;          // ★通过req.params获取，id的定义必须一致
  res. send(id);
})
```

### 路由参数練習
```javascript
const data = require('./data.json');  // 假设有一个json
const express = require('express');
const app = express();
const PORT = 80;

app.get('/', (req, res) => {
    let html = ""
    data.map(item => {                   // 同过map()遍历
        html += `<li>${item.name}</>`
        html += `<img src=${item.message}></img>`
    })
    res.send(html);
})

app.get('/:id', (req, res) => {
    let id = req.params.id;
    let html = ""
    let item = data.find( (item) => { item.id == id });     // 同过find() 匹配
    if (item) {
        html += `<li>${item.name}</>`
        html += `<img src=${item.message}></img>`
    } else {
        html += `<h1>404 Not Found</h1>`
    }
    res.send(html);
})

app.listen(PORT, () => {
    console.log(`server is starting on ${PORT} `);
})
```

```javascript
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

