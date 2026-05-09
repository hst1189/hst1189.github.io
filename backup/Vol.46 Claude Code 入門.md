# 各種CLI
名称|コマンド
---|---
googleworkspace | npm install -g @googleworkspace/cli
gemini                  | npm install -g @google/gemini-cli
github/copilot      | npm install -g @github/copilot
codex                    | npm install -g @openai/codex
claude-code         | npm install -g @anthropic-ai/claude-code
playwright            | npm install -g @playwright/cli@latest



# 安装
```
curl -fsSL https://claude.ai/install.sh | bash
irm https://claude.ai/install.ps1 | iex
npm install -g @anthropic-ai/claude-code
```

# 配置文件
```
①　~\.claude\settings.json
{
  "env": {
    "ANTHROPIC_AUTH_TOKEN": "-----token-----",
    "ANTHROPIC_BASE_URL": "https://api.longcat.chat/anthropic",
    "ANTHROPIC_MODEL": "LongCat-Flash-Thinking-2601",
    "ANTHROPIC_DEFAULT_HAIKU_MODEL": "LongCat-Flash-Thinking-2601",
    "ANTHROPIC_DEFAULT_SONNET_MODEL": "LongCat-Flash-Thinking-2601",
    "ANTHROPIC_DEFAULT_OPUS_MODEL": "LongCat-Flash-Thinking-2601",
    "CLAUDE_CODE_MAX_OUTPUT_TOKENS": "6000",
    "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC": "1",
  }
}

②　~\.claude.json
"hasCompletedOnboarding": true,　　#跳过官方登入
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
```
~\.claude\skills\　←全局skill
project\.claude\skills\　←项目skill

　└── skill-name/
　　├── SKILL.md          # エントリポイント（必須）- 目次と基本指示
　　├── scripts/          # 実行可能なスクリプト（オプション）
　　├── references/       # 参照ドキュメント（オプション）- 詳細マニュアル
　　└── assets/           # テンプレートや画像など（オプション）
```

```
---
name: my-awesome-skill
description: このスキルが何をするか、いつ使うかを明確に書く（1024文字以内、簡潔推奨）
---

# スキル名

## このスキルを使うタイミング
- ユースケース 1
- ユースケース 2

## 手順
[詳細な手順をここに書く]

## 例
[具体例を書く]
```


## 1. superpowers https://github.com/obra/superpowers
```
# Add marketplace
/plugin marketplace add obra/superpowers-marketplace

# Install plugin
/plugin install superpowers@superpowers-marketplace
```
```
brainstorming - Socratic design refinement
writing-plans - Detailed implementation plans
executing-plans - Batch execution with checkpoints
dispatching-parallel-agents - Concurrent subagent workflows
requesting-code-review - Pre-review checklist
receiving-code-review - Responding to feedback
using-git-worktrees - Parallel development branches
finishing-a-development-branch - Merge/PR decision workflow
subagent-driven-development - Fast iteration with two-stage review (spec compliance, then code quality)
```

## 2. everything-claude-code https://github.com/affaan-m/everything-claude-code
```
# Add marketplace
/plugin marketplace add https://github.com/affaan-m/everything-claude-code

# Install plugin
/plugin install everything-claude-code@everything-claude-code
```

## 3. cc-switch https://github.com/farion1231/cc-switch

## 4. peon-ping https://github.com/PeonPing/peon-ping
