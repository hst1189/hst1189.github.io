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


## 🔖 cf中转代理
https://github.com/PublicAffairs/openai-gemini

