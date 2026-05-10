# 安装
```
curl -fsSL https://claude.ai/install.sh | bash
irm https://claude.ai/install.ps1 | iex
npm install -g @anthropic-ai/claude-code
```

# 其他软件
- curl
- wget
- git
- node.js
- python


# 各種CLI
名称|コマンド|用法
---|---|---
`claude-code`         | npm install -g @anthropic-ai/claude-code |
`codex`                   | npm install -g @openai/codex                    |
`gemini`                  | npm install -g @google/gemini-cli             | 
`copilot`                  | npm install -g @github/copilot                   | https://github.com/features/copilot/cli
 ---| ---|---
github-cli                  | winget install --id GitHub.cli                   | gh auth status　https://cli.github.com/manual/
playwright-cli            | npm install -g @playwright/cli@latest   | playwright-cli install --skills　https://github.com/microsoft/playwright-cli
googleworkspace-cli | npm install -g @googleworkspace/cli   | https://github.com/googleworkspace/cli
larksuite-cli               | npm install -g @larksuite/cli && npx skills add larksuite/cli -y -g | https://github.com/larksuite/cli
stripe-cli                   | scoop install stripe | https://github.com/stripe/stripe-cli
sherlock                    | pipx install sherlock-project                    | sherlock --help,　sherlock user1 user2 user3
social-analyzer          | git clone https://github.com/qeeqbox/social-analyzer.git && cd social-analyzer && npm install && nodejs app.js --username "johndoe" | https://github.com/qeeqbox/social-analyzer
yt-dlp                        | [yt-dlp.exe](https://github.com/yt-dlp/yt-dlp)   | yt-dlp --help


#### playwright-cli
```
playwright-cli install --skills

playwright-cli open https://demo.playwright.dev/todomvc/ --headed
playwright-cli type "Buy groceries"
playwright-cli press Enter
playwright-cli type "Water flowers"
playwright-cli press Enter
playwright-cli check e21
playwright-cli check e35
playwright-cli screenshot
```

#### gws
```
gws auth setup     # walks you through Google Cloud project config
gws auth login     # subsequent OAuth login
gws drive files list --params '{"pageSize": 5}'

# List the 10 most recent files
gws drive files list --params '{"pageSize": 10}'

# Create a spreadsheet
gws sheets spreadsheets create --json '{"properties": {"title": "Q1 Budget"}}'

# Send a Chat message
gws chat spaces messages create \
  --params '{"parent": "spaces/xyz"}' \
  --json '{"text": "Deploy complete."}' \
  --dry-run

# Introspect any method's request/response schema
gws schema drive.files.list

# Stream paginated results as NDJSON
gws drive files list --params '{"pageSize": 100}' --page-all | jq -r '.files[].name'
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
```
https://code.claude.com/docs/ja/env-vars
claude を起動する前にシェルで設定するか、[settings.json](https://code.claude.com/docs/ja/settings#available-settings) の env キーで設定してください。
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


## 🎉1. superpowers https://github.com/obra/superpowers
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

## 🎉2. everything-claude-code https://github.com/affaan-m/everything-claude-code
```
# Add marketplace
/plugin marketplace add https://github.com/affaan-m/everything-claude-code

# Install plugin
/plugin install everything-claude-code@everything-claude-code
```


## 🎉3. CLI-Anything https://github.com/HKUDS/CLI-Anything
```
# Add marketplace & install (recommended)
/plugin marketplace add HKUDS/CLI-Anything
/plugin install cli-anything

# Build a CLI for any software with a codebase
# Generate a complete CLI for GIMP (all 7 phases)
/cli-anything ./gimp


# Build a complete CLI for GIMP from local source
/cli-anything /home/user/gimp

# Build from a GitHub repo
/cli-anything https://github.com/blender/blender

# Refine an existing harness — broad gap analysis
/cli-anything:refine /home/user/gimp

# Refine with a specific focus area
/cli-anything:refine /home/user/shotcut "vid-in-vid and picture-in-picture compositing"

# Run tests and update TEST.md
/cli-anything:test /home/user/inkscape

# Validate against HARNESS.md standards
/cli-anything:validate /home/user/audacity
```

## 🎉4. cc-switch https://github.com/farion1231/cc-switch

## 🎉5. gstack https://github.com/garrytan/gstack

## 🎉6. peon-ping https://github.com/PeonPing/peon-ping
