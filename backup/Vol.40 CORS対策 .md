# CORS 設定
https://expressjs.com/en/resources/middleware/cors.html

## 🚀JSONP（不推荐）
例：<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
サーバーサイドとの事前の取り決めがない場合は異なるドメインの壁を超えることができないが、<script>タグのsrc属性での異なるドメインの指定で、異なるドメインのjsファイルを読み込むことができます。JSONPはこの仕組を利用します。


#### client →domainA:8080　→ domainB:3000
```javascript
<!DOCTYPE html>  domainA:8080
<html>
<script>
function getData(data) {
    console.log(data.name);
    console.log(data.age);
}
</script>

</script src='http://domainB:3000/api/data' />     // 服务器端的返回值会直接执行
</script src='http://domainB:3000/api/data?callback=getData' />  // 
</html>
```

#### サーバ側 domainB:3000 
```javascript
app.get('/api/data' ,(req,res)=>{ 
    return `hello world`   //这里的return，会被当作js处理
}) 

app.get('/api/data' ,(req,res)=>{ 
    return getData({"name": "Yamada", "age": 26})   //这里的return，会被当作js处理
}) 
```




## 🚀cors.js（middlewareを利用）

```javascript
npm install cors
app.use(cors());
```

#### Configuring CORS
```javascript
const corsOptions = {
  origin: ["http://example1.com", /\.example2\.com$/],  // 許可するオリジン
  methods: ['GET', 'PUT', 'POST'],    // 許可するHTTPメソッド
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true            // 認証情報を含むリクエストを許可
};

app.use(cors(corsOptions ))
```


#### Simple Usage (Enable All CORS Requests)
```javascript
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})
```

#### Enable CORS for a Single Route
```javascript
const express = require('express')
const cors = require('cors')
const app = express()

app.get('/products/:id', cors(), function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for a Single Route'})
})

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})
```

#### Enabling CORS Pre-Flight
```javascript
const express = require('express')
const cors = require('cors') 
const app = express()

app.options('/products/:id', cors()) // enable pre-flight request for DELETE request

app.del('/products/:id', cors(), function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})
```




## 🚀http-proxy-middleware
```javascript
import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();

const proxyMiddleware = createProxyMiddleware<Request, Response>({
  target: 'http://www.example.org/api',
  changeOrigin: true,
});

app.use('/api', proxyMiddleware);
app.listen(3000);

// proxy and keep the same base path "/api"
// http://127.0.0.1:3000/api/foo/bar -> http://www.example.org/api/foo/bar
```
