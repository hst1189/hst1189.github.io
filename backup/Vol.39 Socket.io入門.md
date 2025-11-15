```javascript
sever.js
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { DatabaseSync } from 'node:sqlite';

const __dirname = import.meta.dirname;
const __filename = import.meta.filename;

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

const db = new DatabaseSync(__dirname + '/chat.db');
db.exec(`
  CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      client_ip TEXT,
      msg TEXT
  );
`);



let client_ip = "";

app.get('/', (req, res) => {
  client_ip = req.ip || req.headers['x-forwarded-for'];
  console.log(client_ip)
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {

  socket.on('chat message', async (msg) => {
    try {
      const insert = db.prepare('INSERT INTO messages (client_ip,msg) VALUES (?, ?)');
      insert.run(client_ip, msg);
      io.emit('chat message', client_ip, msg);
    } catch (e) {
      console.error(e);
    }
  });

  socket.on('history', async () => {
    let result;
    try {
      result = db.prepare('select * from messages ORDER BY id');
      console.log(result.all());
      io.emit('history', result.all());
    } catch (e) {
      console.error(e);
    }
  });
});

// 在这里 app.listen(3000)将不起作用，因为它创建一个新的 HTTP 服务器。
httpServer.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});

```

```
client.html

<!DOCTYPE html>
<html>

<head>
  <title>chatapp tutorial</title>
  <style>
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    }

    .display {
      top: 0;
      left: 0;
      width: 100%;
      height: calc(100vh - 60px);
      display: flex;
      flex-direction: row;
      /*border: 1px solid white;*/
    }

    #msg-list {
      flex: 5;
      list-style-type: none;
      overflow: auto;
    }

    #msg-list>li {
      padding: 0.5rem 1rem;
    }

    #msg-list>li:nth-child(odd) {
      background: rgb(207, 216, 248);
    }

    #history-list {
      margin: 0 20px 10px 10px;
      flex: 2;
      list-style-type: none;
      background-color: #4e8357;
      border: 1px solid white;
      box-shadow: 5px 5px 5px black;
      overflow: auto;
    }

    #history-list>li {
      padding: 0.5rem 1rem;
      white-space: nowrap;
    }


    #form {
      position: fixed;
      display: flex;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 60px;
      backdrop-filter: blur(10px);
      background: #181818dc;
      padding: 0.25rem;
    }

    #input {
      border: none;
      padding: 0 1rem;
      flex-grow: 1;
      margin: 0.25rem;
    }

    #input:focus {
      outline: none;
    }

    #form>button {
      background: #4e8357;
      border: none;
      padding: 0 1rem;
      margin: 0.25rem;
      border-radius: 5px;
      outline: none;
      color: #fff;
      width: 100px;
    }

    #form>button:hover {
      background-color: #07e62c;
      cursor: pointer;
    }
  </style>
</head>

<body>
  <div class="display">
    <ul id="msg-list"></ul>
    <ul id="history-list"></ul>
  </div>

  <form id="form" action="">
    <input id="input" autocomplete="off" />
    <button>Send</button>
    <button id="toggle-btn">Disconnect</button>
    <button id="history-btn">History</button>
  </form>

  <script src="/socket.io/socket.io.js"></script>
  <script>
    let socket = io();

    const form = document.getElementById("form");
    const input = document.getElementById("input");
    const msgList = document.getElementById("msg-list");
    const toggleButton = document.getElementById('toggle-btn');
    const historyList = document.getElementById("history-list");
    const historyButton = document.getElementById('history-btn');

    toggleButton.addEventListener('click', (e) => {
      e.preventDefault();
      if (socket.connected) {
        toggleButton.innerText = 'Connect';
        socket.disconnect();
      } else {
        toggleButton.innerText = 'Disconnect';
        socket.connect();
      }
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (input.value) {
        socket.emit("chat message", input.value);
        input.value = "";
      }
    });

    historyButton.addEventListener('click', (e) => {
      e.preventDefault();
      if (socket.connected) {
        socket.emit("history");
      }
    });

    socket.on("chat message", function (ip, msg) {
      let item = document.createElement("li");
      item.textContent = `(${ip}) >> ${msg}`;
      msgList.appendChild(item);
      window.scrollTo(0, document.body.scrollHeight);
    });

    socket.on("history", function (result) {
      historyList.innerHTML = "";
      result.forEach(value => {
        historyList.innerHTML += `<li>${value.id} ${value.client_ip} ${value.msg}</li>`;
      });
      window.scrollTo(0, document.body.scrollHeight);
    });

  </script>
</body>

</html>

```

