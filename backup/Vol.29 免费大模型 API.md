# 💯  大模型竞技场
https://lmarena.ai/leaderboard

# 💯  代理地址
https://api-proxy.me/

# 🔖 Gemini API  （国内无法直接访问，需代理）
限制：https://ai.google.dev/gemini-api/docs/rate-limits#free-tier
10次/分，500次/天，250,000token/分

获取KEY：https://aistudio.google.com/apikey
API地址： https://generativelanguage.googleapis.com/v1beta/models/
模型：Gemini 2.5 Flash Preview 05-20

### 多Key轮询方法：
https://github.com/snailyp/gemini-balance
[从零部署 Gemini Balance 手册 clawcloud部署sqlite版本](https://gb-docs.snaily.top/guide/setup-clawcloud-sqlite.html)
部署结果：https://wuaacyawcegc.ap-northeast-1.clawcloudrun.com/

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




# 🔖 OpenAI API
### 0. https://api.openai.com（国内无法直接访问，需要自建代理）
代理API地址：https://api-proxy.me/openai
模型：gpt-4o-mini


以下2个，大佬自建的代理服务
### 1. https://github.com/chatanywhere/GPT_API_free （一天200次）
```
gpt-4o-mini，和gpt-3.5-turbo共享一天200次
国内动态加速 直连无需代理
支持 gpt-3.5-turbo系列 / gpt-4系列 / gpt-4o系列 / gpt-4o-audio-preview / embeddings / DALL·E / whisper 等
```
模型：gpt-4o-mini
获取KEY：[申请内测免费Key](https://api.chatanywhere.org/v1/oauth/free/render)
API地址： https://api.chatanywhere.tech (国内中转，延时更低)
　　　　　https://api.chatanywhere.org (国外使用)


### 2. https://github.com/popjane/free_chatgpt_api （不限量 无门槛）
```
完全免费使用以下勾选模型：
★ ✓gpt-4o-mini（不限量 无门槛）
 　✓gpt-3.5-turbo-0125
 　✓gpt-3.5-turbo-1106
 　✓gpt-3.5-turbo
 　✓gpt-3.5-turbo-16k
 　✓net-gpt-3.5-turbo (可联网搜索模型-稳定性稍差)
 　✓whisper-1
 　✓dall-e-2
 　×text-开头系列模型，例如：text-davinci（免费版已取消text系列模型）
 　×gpt-4全系列（只定期限量开放）
 　×付费版API支持OpenAI所有模型，包括（联网、绘画、聊天、向量、图片分析、文件分析、GPTs等）
 　×付费版API支持Midjourney专业绘画、Suno音乐生成、PPT生成、多种视频模型。
```
模型：gpt-4o-mini
获取KEY：[立即领取免费KEY](https://free.v36.cm/github)
API地址： https://free.v36.cm (无需代理，直接可用）



# 🔖 Grok API   (免费赠送25USD/mo活动 2024/12已结束)
模型：grok-beta
获取KEY：https://console.x.ai/
API地址： https://api.x.ai/
代理API地址： https://api-proxy.me/xai


Gork2 可在X直接使用
https://x.com/i/grok （有X账号就可以使用）




# 🔖 Deepseek API（国内直接访问）
获取KEY：https://platform.deepseek.com/api_keys
API地址： https://api.deepseek.com/chat/completions
模型：deepseek-r1


# 🔖 Openrouter.ai
获取KEY：https://openrouter.ai/settings/keys
API地址： https://openrouter.ai/api/v1/chat/completions
模型：deepseek/deepseek-r1:free



# 🔖 Groq API（国内无法直接访问，需要自建代理）
获取KEY：https://console.groq.com/keys
API地址： https://api.groq.com/openai
代理API地址：https://api-proxy.me/groq
模型：deepseek-r1-distill-llama-70b



# 🔖 利用实例

ChatBox：https://github.com/Bin-Huang/chatbox
```
下载安装后设置
　模型提供：OpenAI API
　API  Key ：API密钥
　API域名  ：https://gemini.grapehut.us.kg/
　模型       ：gemini-2.0-flash-exp（选择自定义模型，手动输入）
　　　　　　gemini-2.0-flash-exp
　　　　　　gemini exp-1206 　

设置参数：
1. 方法一：选择OpenAI
API  Key ：API密钥
API域名 ： https://gemini.grapehut.us.kg（Cloudflare Worker的自定义域名）
模型添加 ：gemini-2.0-flash-exp

2. 方法二：选择自定义 (OpenAI API兼容)
API  Key ：API密钥
API域名 ： https://gemini.grapehut.us.kg/v1
API路径 ： chat/completions

模型添加：gemini-2.0-flash-exp

```


Gemini多模态客户端：https://github.com/ViaAnthroposBenevolentia/gemini-2-live-api-demo
```
下载source
cd gemini-2-live-api-demo-main
cp js/config/config.example.js js/config/config.js  
Edit js/config/config.js with your API key ★ 
python -m http.server 8000
http://127.0.0.1:8000/
```


Worker代理：https://github.com/tech-shrimp/gemini-proxy
```
cloudflare里创建一个 worker 用于websocket-proxy （例如：gemini-proxy）
绑定域名（例如：gemini-proxy.grapehut.us.kg）
コード編集：将worker.js 的内容黏贴到 cloudflare worker
```
