## 🔖 openrouter.ai
https://openrouter.ai/models?order=most-popular&q=free
gmail
"api-url": "https://openrouter.ai/api/v1/chat/completions"
"model": "qwen/qwen3-coder:free"


## 🔖 arena.ai
https://lmarena.ai/leaderboard


## 🔖 longcat（美团）
https://longcat.chat/platform/usage
hst1189@hotmail.com
model: 
- LongCat-Flash-Chat
- LongCat-Flash-Thinking-2601
- LongCat-Flash-Omni-2603
- LongCat-Flash-Lite


## 🔖 Gemini
https://aistudio.google.com/
"api-url": "https://generativelanguage.googleapis.com/v1beta"
"model": "Gemini 2.5 Flash Preview 05-20"

https://gemini.google.com/   （面向普通用户）
https://notebooklm.google.com/




## 🔖 多Key轮询
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



## 🔖 cf中转代理
https://github.com/PublicAffairs/openai-gemini



