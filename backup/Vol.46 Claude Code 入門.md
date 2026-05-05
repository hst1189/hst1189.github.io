# 安装

・macOS, Linux, WSL
```
curl -fsSL https://claude.ai/install.sh | bash
```

・Windows
```
irm https://claude.ai/install.ps1 | iex
curl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd && del install.cmd
```

・npm（Node.js 18以上）
```
npm install -g @anthropic-ai/claude-code
```

# 配置文件
```
~\.claude.json
"hasCompletedOnboarding": true,　　#跳过官方登入


~\.claude\settings.json
```

# 環境変数
https://code.claude.com/docs/ja/env-vars
claude を起動する前にシェルで設定するか、[settings.json](https://code.claude.com/docs/ja/settings#available-settings) の env キーで設定してください。
```
```


# 通信要件
### プロキシ（推奨）
export HTTP_PROXY=http://username:password@proxy.example.com:8080
export HTTPS_PROXY=http://username:password@proxy.example.com:8080
export NO_PROXY="localhost,192.168.1.1,example.com,.example.com"　#特定のリクエストのプロキシをバイパス（カンマ区切り）
export NO_PROXY="*"　#すべてのリクエストのプロキシをバイパス


URL | 必要な用途
-- | --
api.anthropic.com | Claude API リクエスト
claude.ai | claude.ai アカウント認証
platform.claude.com | Anthropic Console アカウント認証
downloads.claude.ai | プラグイン実行可能ファイルのダウンロード、ネイティブインストーラーおよびネイティブ自動更新プログラム
storage.googleapis.com | 2.1.116 より前のバージョンのネイティブインストーラーおよびネイティブ自動更新プログラム
bridge.claudeusercontent.com | Chrome の Claude 拡張機能 WebSocket ブリッジ



# 命令
|命令  |  说明
|---     |  ---
|/init          | CLAUDE.md 初期化
|/compact |  压缩上下文
|/clear        | 清空上下文
|/resume   |  历史对话
|/model     | 切换LLM
|!               |  bash mode
|#              | 添加到memory
|alt+m       | `普通 mode 修改需人工审核` / `plan mode 不进行任何修改`/  `accept edits 自动修改` 切换
|alt+t        | thinking mode  `Enabled`/`Disabled` 切换


# Skill
1. superpowers
2. cLaude-hud
3. skill-creator

1. Skillsmp：[https://skillsmp.com](https://skillsmp.com)
2. skills.sh：[https://skills.sh](https://skills.sh)
3. agentskill.sh：[https://agentskill.sh](https://agentskill.sh)
4. Lobehub Skills：[https://lobehub.com/skills](https://lobehub.com/skills)
URL	必要な用途
api.anthropic.com	Claude API リクエスト
claude.ai	claude.ai アカウント認証
platform.claude.com	Anthropic Console アカウント認証
downloads.claude.ai	プラグイン実行可能ファイルのダウンロード、ネイティブインストーラーおよびネイティブ自動更新プログラム
storage.googleapis.com	2.1.116 より前のバージョンのネイティブインストーラーおよびネイティブ自動更新プログラム
bridge.claudeusercontent.com	[Chrome の Claude](https://code.claude.com/docs/ja/chrome) 拡張機能 WebSocket ブリッジ



## claude-hud
![](https://pic2.zhimg.com/v2-d85d0363ea77eae4f1478857a6374917_1440w.jpg)

Context █████░░░░░ 45%　#上下文健康度（最有用的功能） 这个进度条会变色
Usage ██░░░░░░░░ 25% (1h 30m / 5h)　#订阅额度监控（Pro/Max用户福音）
◐ Edit: auth.ts | ✓ Read ×3 | ✓ Grep ×2　#工具活动追踪
◐ explore [haiku]: Finding auth code (2m 15s)　#Agent状态追踪
▸ Fix authentication bug (2/5)　#Todo进度追踪
※如果你是用API Key而不是订阅账号登录的，Usage那行不会显示、API是按量计费，没有速率限制的概念
※工具追踪、Agent追踪、Todo追踪默认都是关闭的，需要手动开启

```
・安装
/plugin marketplace add jarrodwatts/claude-hud
/plugin install claude-hud
/claude-hud:setup　#装完立刻生效，不用重启

自定义
/claude-hud:configure

Full 全部功能
Essential 活动状态+git
Minimal 只有模型名+上下文
```

