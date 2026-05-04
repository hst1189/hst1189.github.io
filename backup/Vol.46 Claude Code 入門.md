# 安装

macOS, Linux, WSL:
```
curl -fsSL https://claude.ai/install.sh | bash
```

Windows PowerShell:
```
irm https://claude.ai/install.ps1 | iex
```

Windows CMD
```
curl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd && del install.cmd
```


# 配置文件
```
~\.claude.json
~\.claude\settings.json
```

# 命令
```
/init           プロジェクト用の CLAUDE.md を作成する
/agents     カスタム subagent を設定するのに役立ちます
/doctor      インストールの一般的な問題を診断します
```