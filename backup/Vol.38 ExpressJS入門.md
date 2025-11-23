## 🚀 Framework Comparison
Framework | Type | Performance | Learning Curve | TypeScript Support | Best Used For
-- | -- | -- | -- | -- | --
Express.js | Minimalist | Good | Low | Partial | General-purpose web apps, APIs
Nest.js | Full-featured | Good | High | Excellent | Enterprise apps, complex APIs
Fastify | Minimalist | Excellent | Medium | Good | High-performance APIs
Koa.js | Minimalist | Very Good | Medium | Good | Modern, async-focused apps
Hapi.js | Full-featured | Good | Medium | Good | Enterprise apps, configuration-driven
Adonis.js | Full-stack MVC | Good | High | Excellent | Full-stack applications
Restify | API-focused | Good | Low | Partial | RESTful APIs
Meteor | Full-stack | Moderate | Medium | Good | Reactive full-stack apps
Loopback | API-focused | Good | Medium | Excellent | API generation with minimal coding
Strapi | Headless CMS | Good | Low (UI) | Good | Content management, API creation


## 🚀 API文档
https://expressjs.com/5x/api.html
https://expressjs.com/5x/api.html#req.app
https://expressjs.com/5x/api.html#res.app
https://expressjs.com/guide/writing-middleware.html


## 🚀 基本写法
https://www.w3schools.com/nodejs/nodejs_express.asp

事前准备：install
```javascript
npm init -y　// NodeJSプロジェクト初期化

npm install express
npm install typescript
npm install @types/node
npm install @types/express
或者：npm install express typescript @types/node @types/express

npx tsc --init　// TypeScript初期化
tsconfig.json     // 入力出力設定
    "compilerOptions": {
    // File Layout
    "rootDir": "./src",
    "outDir": "./dist",
npx tsc --watch    // 编译 .ts → .js
// 自動编译：VS Code のメニューから [ターミナル] -> [タスクの実行...] を選択、「tsc: watch - tsconfig.json」を入力

```

基本例

>[!TIP]
> import express from 'express';
> const app=express();
>app.get('/', (req,res)=>{  } )
>app.post('/', (req,res)=>{  } )
>app.put('/:id', (req,res)=>{  } )
>app.delete('/:id', (req,res)=>{  } )
>app.use( (req,res,next)=>{ next(); })  // 中间件
>app.listen( 3000,  ()=>{ console.log('Server is running on 3000') }) 

```javascript

import path from 'path';
const __dirname = import.meta.dirname;

import express from 'express';
const app = express();

// Middleware for parsing JSON
app.use(express.json());

const mid = function (req, res, next) {    // ミドルウェア定義
    console.log({ msg: `${new Date()} ${req.method} ${req.originalUrl}` })
    next();
}
app.use(mid);  // ミドルウェア

app.use(express.static(__dirname, 'public', { maxAge: 86400000 }));  // 静的ファイルのキャッシュ機能(1日間キャッシュ有効)

app.get('/image', (req, res) => {    // 静的ファイル
  res.sendFile(path.join(__dirname, 'public','images','test.png'));
});


let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];

// GET - Retrieve all users
app.get('/api/users', (req, res) => { 
  if (!users) return res.status(404).json({ message: 'User not found' });
  res.json(users);
});

// GET - Retrieve a specific user
app.get('/api/users/:id', (req, res) => {  // 使用${req.query}获取值    /api/users/123
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
});

app.get('/api/users/:id/book/:bookID', (req, res) => {    // 使用${req.params}获取值    /api/users/123/book/aaaa
    res.status(200).send({ ID: `${req.params.id}`, bookID: `${req.params.bookID}` });
})

app.get('/api/search', (req, res) => {  // 使用${req.query}获取值    /api/search?id=express&mail=2
    res.status(200).send({ id:`${req.query.id}`, mail: `${req.query.mail}` });
})

// POST - Create a new user
app.post('/api/users', (req, res) => {  // POST 和 GET 可以匹配同一路由
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT - Update a user completely
app.put('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: 'User not found' });
  user.name = req.body.name;
  user.email = req.body.email;
  res.json(user);
});

// DELETE - Remove a user
app.delete('/api/users/:id', (req, res) => {
  const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
  if (userIndex === -1) return res.status(404).json({ message: 'User not found' });
  const deletedUser = users.splice(userIndex, 1);
  res.json(deletedUser[0]);
});


app.use((req, res) => {
    console.log(path.join(__dirname, '../public', '404.html'));
    res.status(404).sendFile(path.join(__dirname, '../public', '404.html'));
})

app.listen(3000, (err) => {
    if (err) console.log(err);
    console.log("Server is run on 3000");
})
```

```javascript
curl -X GET http://localhost:3000/api/users
> {"msg":"GET OK"}

curl -X POST http://localhost:3000/api/users
> {"msg":"POST OK"}   

curl -X PUT http://localhost:3000/api/users/123
> {"id":"123","msg":"PUT OK"}

curl -X DELETE http://localhost:3000/api/users/123
> {"id":"123","msg":"DELETE OK"}

curl -X POST http://localhost:3000/api/users  -H 'Content-Type: application/json' -d '{"name":"太郎", "age":"30"}'  
```


## 🚀ExpressRequest
```javascript
app.get('/', (req, res) => {

    req.host              // 主机名 'example.com:3000'
    req.hostname           //主机名 'example.com'
    req.ip                 // 客户端ip ::ffff:127.0.0.1
    req.method             // HTTP method of the request: GET, POST, PUT, and so on
    req.originalUrl    // /根路径后面的部分
    req.params        // 路由参数（例：/:id）
    req.query              // url 参数  ?后面的部分（例：?a=dadda&b=dasda）
    req.body               // 配合app.use(express.json())、获取·json

    req.headers            //获取全部头
    req.get('content-type')  // 获取content-type
    req.get('user-agent')   // 获取user-agent
})
```


## 🚀ExpressResponse
```javascript
app.get('/', (req, res) => {

    res.status(403).end()
    res.status(400).send('Bad Request')
    res.status(404).sendFile('/absolute/path/to/404.png')
    res.status(200).json( {id:1,name:"Peter"}) 
    
    - res.status()   // 返回状态
    - res.send()    // 返回多种形式数据
    - res.end()    // 结束响应
    - res.json()    // 返回json
    
    res.set('Content-Type', 'text/plain')
    res.set('Content-Type', 'text/html')
    res.set('Content-Type', 'application/json')
    res.set('Content-Type', 'application/pdf')
    res.set('xxx-code', '520')  // 可以任意设置
    res.append(key , value)
    
    res.render( )    // 渲染模板
    res.redirect( 'https://google.com')  // 重定向请求
    res.download(path.join(_dirname, 'data.json' )) // 弹出文件下载
    res.sendFile(path.join(__dirname, 'public', 'index.html'))  // 返回文件
    
    res.type('application/json') // set Content-Type
    
    res.jsonp( )    // 返回 jsonp
    
    res.cookie(name [, options])  // cookie
    res.clearCookie(name [, options])

})
```

## 🚀cookie
```javascript
npm install cookie-parser

const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());

app.get('/', (req, res) => {
    const allCookies = req.cookies;
    const token = req.cookies.token;
});

// set cookies
res.status(201).cookie('token', `${token}`, {
    expires: new Date(Date.now() + 8 * 3600000)  // cookie will be removed after 8 hours
})
.redirect(301, '/admin')

```
> [!TIP]
> LocalStorage、Cookieの差異
> 
> LocalStorage
> 容量: 約5MB
> 保存期間: ユーザーが手動で削除するまで永続的に保存される
> サーバー送信: 自動では送信されない（クライアントサイドのみで利用）
> 用途: アプリケーションの設定やユーザーカスタマイズデータなど、長期間保存したいデータに適している 
> ★サーバ側で取得できないので、格納＆取得はブラウザ側で実装する必要ある★
> 
> Cookie
> 容量: 約4KB
> 保存期間: 設定した有効期限まで保存される
> サーバー送信: HTTPリクエストごとに自動的にサーバーに送信される
> 用途: ユーザー認証、セッション管理など、サーバーとのやり取りが必要なデータに適している 



## 🚀Middleware in Express

>[!TIP]
> app.use(express.json());     //  解析request里的 json， 放入res.body
> app.use(express.urlencoded({ extended: true }));  //  解析表单数据， 放入res.body
> app.use(express.static('public')); // 静态文件
> const router=express.Router();   // 生成路由

Common Third-party Middleware:
- helmet (security)
- cors (cross-origin resource sharing)
- cookie-parser (cookie handling)
- compression (response compression)


```javascript
const mid = function (req, res, next) {    // ミドルウェア定義
    console.log({ msg: `${new Date()} ${req.method} ${req.originalUrl}` })
    next();
}
app.use(mid);  // ミドルウェア //  全局利用
app.get('/home', recordLogMiddleware, (req, res) => { }) // 局部利用
app.get('/setting', checkCodeMiddleware, (req, res) => { }) // 局部利用
```

```javascript
// Authentication middleware
function authenticate(req, res, next) {
  const authHeader = req.headers.authorization;
  
  if (!authHeader) {
    return res.status(401).send('Authentication required');
  }
  
  const token = authHeader.split(' ')[1];
  
  // Verify the token (simplified)
  if (token === 'secret-token') {
    // Authentication successful
    req.user = { id: 123, username: 'john' };
    next();
  } else {
    res.status(403).send('Invalid token');
  }
}

// Apply to specific routes
app.get('/api/protected', authenticate, (req, res) => {
  res.json({ message: 'Protected data', user: req.user });
});
```
## 🚀Serving Static Files
```javascript

app.use('/assets', express.static(path.join(__dirname, 'public')))，来访问 public 目录下的文件时需要加上 /static 前缀，如 http://localhost:5000/assets/style.css

app.use('/assets/css', express.static(path.join(__dirname, 'public')))，来访问 public 目录下的文件时需要加上 /static 前缀，如 http://localhost:5000/assets/css/style.css


app.use(express.static(path.join(__dirname, 'public'), options))
const options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html'],
  index: false,
  maxAge: '1d',
  redirect: false,
  setHeaders (res, path, stat) {
    res.set('x-timestamp', Date.now())
  }
}

```








## 🚀Error Handling in Express
```javascript
app.use((err, req, res, next) => {     // 捕捉err
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
```

```javascript

app.get('/error', (req, res) => {      // Route that may throw an error
  // Simulating an error
  throw new Error('Something went wrong!');    // 抛出err
});


app.get('/async-error', (req, res, next) => {    // Route that uses next(error) for asynchronous code
  // Simulating an asynchronous operation that fails
  setTimeout(() => {
    try {
      // Something that might fail
      const result = nonExistentFunction(); // This will throw an error
      res.send(result);
    }
    catch (error) {
      next(error);                          // 抛出err
    }
    }, 100);
});


app.use(errorHandle);
 
function errorHandle(err, req, res, next){ // 捕捉err
  console.error(err.stack);
  res.status(500).send('Something broke!');
}

```

### 🚀Example: Recommended Order
```javascript

// 1. Application-wide middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet());
app.use(cors());


// 2. Route-specific middleware
app.use('/api', authenticate);

// 3. Routes
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

// 4. 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

// 5. Error handler (always last)
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Server error' });
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




## 🚀 进阶写法（Security）
https://www.w3schools.com/nodejs/nodejs_https.asp

.env file:
```
NODE_ENV=development PORT=3000
HOST=0.0.0.0
SSL_KEY_PATH=./key.pem
SSL_CERT_PATH=./cert.pem
```

```javascript
const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');
const helmet = require('helmet');   // ★Security middleware
const cors = require('cors');

const app = express();

// Security middleware
app.use(helmet());　　// 「app.use(helmet())」と指定すれば、デフォルトの設定がされます。

// CORS configuration
app.use(cors({
  origin: 'https://example.com',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));


// Parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public'), {
  dotfiles: 'ignore',
  etag: true,
  extensions: ['html', 'htm'],
  index: 'index.html',
  maxAge: '1d',
  redirect: true
}));


// Routes
app.get('/', (req, res) => {
  res.send('<h1>Welcome to Secure Express Server</h1>');
});

app.get('/api/status', (req, res) => {
  res.json({
    status: 'operational',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    nodeVersion: process.version
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

// SSL/TLS options
const sslOptions = {
  key: fs.readFileSync(path.join(__dirname, 'key.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'cert.pem')),
  // Enable HTTP/2 if available
  allowHTTP1: true,
  // Recommended security options
  minVersion: 'TLSv1.2',
  ciphers: [
    'TLS_AES_256_GCM_SHA384',
    'TLS_CHACHA20_POLY1305_SHA256',
    'TLS_AES_128_GCM_SHA256',
    'ECDHE-RSA-AES128-GCM-SHA256',
    '!DSS',
    '!aNULL',
    '!eNULL',
    '!EXPORT',
    '!DES',
    '!RC4',
    '!3DES',
    '!MD5',
    '!PSK'
  ].join(':'),
  honorCipherOrder: true
};

// Create HTTPS server
const PORT = process.env.PORT || 3000;
const server = https.createServer(sslOptions, app);

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  // Perform cleanup and exit if needed
  process.exit(1);
});

// Graceful shutdown
const gracefulShutdown = (signal) => {
  console.log(`\nReceived ${signal}. Shutting down gracefully...`);

  server.close(() => {
    console.log('HTTP server closed.');
    // Close database connections, etc.
    process.exit(0);
  });

  // Force close server after 10 seconds
  setTimeout(() => {
    console.error('Forcing shutdown...');
    process.exit(1);
  }, 10000);
};

// Listen for shutdown signals
process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);

// Start the server
const HOST = process.env.HOST || '0.0.0.0';
server.listen(PORT, HOST, () => {
  console.log(`Express server running at https://${HOST}:${PORT}`);
  console.log('Environment:', process.env.NODE_ENV || 'development');
  console.log('Press Ctrl+C to stop the server');
});
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


- app.js # Main application file
- routes/ # Route definitions
  - users.js
  - products.js
- controllers/ # Request handlers
  - userController.js
  - productController.js
- models/ # Data models
  - User.js
  - Product.js
- middleware/ # Custom middleware
  - auth.js
  - validation.js
- config/ # Configuration files
  - db.js
  - env.js
- utils/ # Utility functions
  - errorHandler.js

```javascript
// routes/users.js
const express = require('express');
const router = express.Router();
const { getUsers, getUserById, createUser, updateUser, deleteUser } = require('../controllers/userController');

router.get('/', getUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
```

```javascript
// app.js
const express = require('express');
const app = express();
const userRoutes = require('./routes/users');

app.use(express.json());
app.use('/api/users', userRoutes);

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
```

```javascript
// controllers/userController.js
const User = require('../models/User');

const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving users', error: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving user', error: error.message });
  }
};

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: 'Error creating user', error: error.message });
  }
};

module.exports = { getUsers, getUserById, createUser };
```

```javascript
// utils/errorHandler.js
class AppError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = { AppError };
```

```javascript
// middleware/errorMiddleware.js
const errorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  // Different error responses for development and production
  if (process.env.NODE_ENV === 'development') {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
      stack: err.stack,
      error: err
    });
  } else {
    // Production: don't leak error details
    if (err.isOperational) {
      res.status(err.statusCode).json({
        status: err.status,
        message: err.message
      });
    } else {
      // Programming or unknown errors
      console.error('ERROR 💥', err);
      res.status(500).json({
        status: 'error',
        message: 'Something went wrong'
      });
    }
  }
};

module.exports = { errorHandler };
```

```javascript
// Usage in app.js
const { errorHandler } = require('./middleware/errorMiddleware');
const { AppError } = require('./utils/errorHandler');

// This route throws a custom error
app.get('/api/error-demo', (req, res, next) => {
  next(new AppError(404, 'Resource not found'));
});

// Error handling middleware (must be last)
app.use(errorHandler);
```



## 🚀API Documentation
```javascript
const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();

// Swagger configuration
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'User API',
      version: '1.0.0',
      description: 'A simple Express User API'
    },
    servers: [
      {
        url: 'http://localhost:8080',
        description: 'Development server'
      }
    ]
  },
  apis: ['./routes/*.js'] // Path to the API routes folders
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
* @swagger
* /api/users:
* get:
* summary: Returns a list of users
* description: Retrieve a list of all users
* responses:
* 200:
* description: A list of users
* content:
* application/json:
* schema:
* type: array
* items:
* type: object
* properties:
* id:
* type: integer
* name:
* type: string
* email:
* type: string
*/
app.get('/api/users', (req, res) => {
  // Handler implementation
});

app.listen(8080);
```


## 🚀Testing APIs
- Jest
- Mocha
- Supertest

```javascript
// tests/users.test.js
const request = require('supertest');
const app = require('../app');

describe('User API', () => {
  describe('GET /api/users', () => {
    it('should return all users', async () => {
      const res = await request(app).get('/api/users');
      expect(res.statusCode).toBe(200);
      expect(Array.isArray(res.body)).toBeTruthy();
    });
  });
  describe('POST /api/users', () => {
    it('should create a new user', async () => {
      const userData = {
        name: 'Test User',
        email: 'test@example.com'
      };
      const res = await request(app)
        .post('/api/users')
        .send(userData);

      expect(res.statusCode).toBe(201);
      expect(res.body).toHaveProperty('id');
      expect(res.body.name).toBe(userData.name);
    });
    it('should validate request data', async () => {
      const invalidData = {
        email: 'not-an-email'
      };
      const res = await request(app)
        .post('/api/users')
        .send(invalidData);

      expect(res.statusCode).toBe(400);
    });
  });
});

```



## 🚀API Versioning
- URI Path Versioning: /api/v1/users
- Query Parameter: /api/users?version=1
- Custom Header: X-API-Version: 1
- Accept Header: Accept: application/vnd.myapi.v1+json
```
const express = require('express');
const app = express();

// Version 1 routes
const v1UserRoutes = require('./routes/v1/users');
app.use('/api/v1/users', v1UserRoutes);

// Version 2 routes with new features
const v2UserRoutes = require('./routes/v2/users');
app.use('/api/v2/users', v2UserRoutes);

app.listen(8080);
```







