### 定型写法
```javascript
const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) => {
  res. send('Hello World!')
})

app.get('/:id', (req, res) => {
  let id =req.parms.id
  res. send('Hello World!')
})

app. listen(port, () => {
  console.log(`Listening port on ${port}`)
})
```
