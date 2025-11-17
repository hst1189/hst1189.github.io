## 🚀 快速构建express项目
```
npm install -g express-generator
express myapp
cd myapp
npm install
npm start
http://localhost:3000/


├── bin
│   └── www（実行ファイル）
├── node_modules
│   ├── express
│   ├── ... etc
├── public
│   ├── images（空）
│   ├── javascripts（空）
│   └── stylesheets
│       └── style.css
├── routes
│   ├── index.js
│   └── users.js
└── views
    ├── error.pug
    ├── index.pug
    └── layout.pug
├── app.js
├── package.json

7 directories, 9 files


```

## 🚀 基本写法
https://www.w3schools.com/nodejs/nodejs_express.asp

>[!TIP]
>app.get( ) - Handle GET requests
>app.post( ) - Handle POST requests
>app.put( ) - Handle PUT requests
>app.delete( ) - Handle DELETE requests
>app.all( ) - Handle all HTTP methods


```javascript

const express = require('express');
const app = express();
const PORT = 80;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {    // GET POST 可以相同路由
  res.send('Hello World!')
})

app.get('/:id', (req, res) => {    // 获取路由参数 
  let id =req.params.id;     // 通过req.params获取，req.params 的「.id」定义必须一致
  res.send(id);
})

app.get('/users/:userId/books/:bookId', (req, res) => {    // 获取路由参数 
  res.send(`User ID: ${req.params.userId}, Book ID: ${req.params.bookId}`);
});

app.get('/search', (req, res) => {     // 获取请求参数  http://example.com/search?q=express&page=2
  const { q, page} = req.query;
  res.send(`Search query: ${q}, Category: ${page || 'none'}`);
});

app.all('*', (req, res) => {    // Catch all other routes
  res.status(404).send("404 - Page not found");
});

app.listen(PORT, () => {
    console.log(`server is starting on ${PORT} `);
})
```


### 実例１
```javascript
const data = require('./data.json');   // 导入json对象
const express = require('express');
const app = express();
const PORT = 80;

app.get('/', (req, res) => {
    let html = ""
    data.map(item => {                   // 同过map()遍历
        html += `<li>${item.name}</li><img src=${item.message}/>`
    })
    res.send(html);
})

app.get('/:id', (req, res) => {
    let html = ""
    let item = data.find( (item) =>  item.id == req.params.id );     // 同过find() 匹配
    if (item) {
        html += `<li>${item.name}</li><img src=${item.message} />`
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

### 実例２
```javascript
const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const port = 80;

function accessLog(req, res, next) {     // access.log 全局中间件
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

    fs.appendFileSync(path.resolve(__dirname, './access.log'), `${formattedTime} ${ip} ${url}\r\n`);
    next();
}

app.use(accessLog);

app.get('/', (req, res) => {
    res.send(`${req.ip} ${req.get("user-agent")}`);
});


app.get('/list', (req, res) => {
    fetch('https://dummyjson.com/recipes')
        .then(response => response.json())
        .then(data => {
            console.log(data.recipes);
            res.json(data.recipes);
        })
        .catch(error => console.log(error))
});

app.get('/list/:id', (req, res) => {
    let id = req.params.id;
    fetch('https://dummyjson.com/recipes')
        .then(response => response.json())
        .then(data => {
            const item = data.recipes.find(item => item.id == id);
            console.log(item);
            res.json(item);
        })
        .catch(error => console.log(error))
});


app.listen(port, () => {
    console.log('serve in on port 80');
})
```



## 🚀获取Request Header
```javascript
app.get('/', (req, res) => {

    res.send(`${req.ip} ${req.get("user-agent")}`);   // 返回clientIP 和 user-agent 

    console.log(req.method);             // GET POST PUT etc.
    console.log(req.headers);            //获取全部头
    console.log(req.get('host'));  //获取主机名
    console.log(req.get('user-agent'));  //获取user-agent

    console.log(req.hostname);           //获取主机名
    console.log(req.ip);                 //客户端ip ::ffff:127.0.0.1
    console.log(req.url);                // /根路径后面的部分
    console.log(req.path);               // /根路径后面的部分
    console.log(req.query);              // ?后面的部分（例：?a=dadda&b=dasda）
})
```


## 🚀设置Response Header
```javascript
app.get('/', (req, res) => {
     
    // 原生
    res.statusCode = 200;
    res.statusMessage = "love u ";
    res.setHeader('xxx-code', '520');

    //express方法
– res.send ( )，返回多种形式数据。
–  res.status(500);
–  res.set('xxx-code', '520');
– res.end ( )，结束响应。
– res.redirect ( 'https://google.com')，重定向请求。
– res.render ( )，渲染模板。
– res. download(_dirname+'./xxx.json' )，弹出文件下载。
– res.json( id:1,name:"xxyyzz"} )，返回json。
– res.jsonp( )，返回 jsonp。
– res.sendFile  (_dirname+'./xxx.html' )，返回文件。
– res.sendStatus( )，返回状态。
})
```



## 🚀Middleware in Express

>[!TIP]
>express.json( ) - Parse JSON request bodies
>express.urlencoded( ) - Parse URL-encoded request bodies
>express.static( ) - Serve static files
>express.Router( ) - Create modular route handlers


```javascript
const express = require('express');
const app = express();
const port = 8080;

// Middleware to parse JSON request bodies
app.use(express.json());

// Middleware to parse URL-encoded request bodies
app.use(express.urlencoded({ extended: true }));

// Middleware to serve static files from a directory
app.use(express.static('public'));


// POST route that uses JSON middleware
app.post('/api/users', (req, res) => {
  // req.body contains the parsed JSON data
  console.log(req.body);
  res.status(201).json({ message: 'User created', user: req.body });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
```


## 🚀Error Handling in Express
```javascript
const express = require('express');
const app = express();
const port = 8080;

// Route that may throw an error
app.get('/error', (req, res) => {
  // Simulating an error
  throw new Error('Something went wrong!');
});

// Route that uses next(error) for asynchronous code
app.get('/async-error', (req, res, next) => {
  // Simulating an asynchronous operation that fails
  setTimeout(() => {
    try {
      // Something that might fail
      const result = nonExistentFunction(); // This will throw an error
      res.send(result);
    }
    catch (error) {
      next(error); // Pass errors to Express
    }
    }, 100);
});

// Custom error handling middleware
// Must have four parameters to be recognized as an error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

```



## 🚀Serving Static Files
```javascript
const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// You can also specify a virtual path prefix
app.use('/static', express.static('public'));

// Using absolute path (recommended)
app.use('/assets', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send(`
    <h1>Static Files Example</h1>
    <img src="/images/logo.png" alt="Logo">
    <link rel="stylesheet" href="/css/style.css">
    <script src="/js/script.js"></script>
  `);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

```


## 🚀Routing in Separate Files
```javascript

routes/users.js

const express = require('express');
const router = express.Router();

// Middleware specific to this router
router.use((req, res, next) => {
  console.log('Users Router Time:', Date.now());
  next();
});

// Define routes
router.get('/', (req, res) => {
  res.send('Users home page');
});

router.get('/:id', (req, res) => {
  res.send(`User profile for ID: ${req.params.id}`);
});

module.exports = router;
```

```javascript

routes/products.js

const express = require('express');
const router = express.Router();

// Define routes
router.get('/', (req, res) => {
  res.send('Products list');
});

router.get('/:id', (req, res) => {
  res.send(`Product details for ID: ${req.params.id}`);
});

module.exports = router;
```

```javascript

app.js (main file)

const express = require('express');
const usersRouter = require('./routes/users');    //★
const productsRouter = require('./routes/products');    //★

const app = express();
const port = 8080;

// Use the routers
app.use('/users', usersRouter);    //★
app.use('/products', productsRouter);    //★

app.get('/', (req, res) => {
  res.send('Main application home page');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
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

