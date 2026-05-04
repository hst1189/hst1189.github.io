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

# 命令
```
/init           プロジェクト用の CLAUDE.md を作成する
/agents     カスタム subagent を設定するのに役立ちます
/doctor      インストールの一般的な問題を診断します
```