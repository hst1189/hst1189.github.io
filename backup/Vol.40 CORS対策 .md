# 🚀CORS 設定
https://expressjs.com/en/resources/middleware/cors.html

###  app.use(cors()); 　middlewareを利用
```javascript
npm install cors
```

#### Configuring CORS
```javascript
const corsOptions = {
  origin: ["http://example1.com", /\.example2\.com$/],
  methods: ['GET', 'PUT', 'POST'],
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true            // Enable cookies and credentials
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
