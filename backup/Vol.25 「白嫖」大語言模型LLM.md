## 🔖 openrouter.ai
https://openrouter.ai/models?order=most-popular&q=free
"api-url": "https://openrouter.ai/api/v1/chat/completions"
"model": "qwen/qwen3-coder:free"


## 🔖 arena.ai
https://lmarena.ai/leaderboard


## 🔖 longcat（美团）
https://longcat.chat/platform/usage



## 🔖 Gemini API生态  （国内无法直接访问，需代理）
https://gemini.google.com/   （面向普通用户）
https://aistudio.google.com/   (面向开发人员)
https://notebooklm.google.com/

### APIキー
获取KEY：https://aistudio.google.com/apikey
API地址： https://generativelanguage.googleapis.com/v1beta/
模型：Gemini 2.5 Flash Preview 05-20

### Gemini費用
https://ai.google.dev/gemini-api/docs/rate-limits#free-tier
10次/分，500次/天，250,000token/分


### 多Key轮询
https://github.com/snailyp/gemini-balance
```
1. 创建挂在文件夹
mkdir ./geminibalance-data

2. 设置env
vi .geminibalance-env

下列参数：
API_KEYS=["AIxxxxxxxxx","AIxxxxxxxxx","AIxxxxxxxxxx"]
ALLOWED_TOKENS=["登入密码"]
DATABASE_TYPE=sqlite
SQLITE_DATABASE=default_db


3. 启动容器
sudo docker run -d -p 8000:8000 --name gemini-balance -v ./geminibalance-data:/app/data --env-file .geminibalance-env ghcr.io/snailyp/gemini-balance:latest
```

```
提供商类型：OpenAI
提供名：GeminiBalance
APIkey：登入密码
API地址：http://192.168.0.200:8000
模型：Gemini 2.5 Flash Preview 05-20

```

### 自建代理方法：
通过下面自建代理，同时能转成常用的 OpenAI格式接口
[openai-gemini](https://github.com/PublicAffairs/openai-gemini)通过Github Actions功能，在Cloudflare创建Worker

```
1. 选择VPS
例：Deploy to Cloudflare
・获取 Account ID
・获取 API Token  选择所有账户，所有区域

2. Fork repository　运行github workflower， 自動部署 Cloudflare Worker（Worker默认名字为 gemini ） 

3. Worker绑定域名（例如：gemini.grapehut.us.kg） 　※然后就可以调用此域名了
```



## 🔖 cf中转代理
cf中转代理：https://github.com/tech-shrimp/gemini-proxy
```
cloudflare里创建一个 worker 用于websocket-proxy （例如：gemini-proxy）
绑定域名（例如：gemini-proxy.grapehut.us.kg）
コード編集：将worker.js 的内容黏贴到 cloudflare worker
```
