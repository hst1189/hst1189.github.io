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
命令  |  说明
---     |  ---
/init          | CLAUDE.md 初期化
/compact |  压缩上下文
/clear        | 清空上下文
/resume   |  历史对话
/model     | 切换LLM
!               |  bash mode
#              |
alt+m       | `普通 mode 修改需人工审核` / `plan mode 不进行任何修改`/  `accept edits 自动修改` 切换
alt+t        | thinking mode  `Enabled`/`Disabled` 切换


# Skill
1. superpowers
2. cLaude-hud
3. skill-creator

1. Skillsmp：[https://skillsmp.com](https://skillsmp.com)
2. skills.sh：[https://skills.sh](https://skills.sh)
3. agentskill.sh：[https://agentskill.sh](https://agentskill.sh)
4. Lobehub Skills：[https://lobehub.com/skills](https://lobehub.com/skills)
