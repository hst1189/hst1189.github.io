
# git 公式サイト
[https://git-scm.com](https://git-scm.com/)

[http://git-cheatsheet.com](http://git-cheatsheet.com/)

[PDF](https://wac-cdn.atlassian.com/dam/jcr:e7e22f25-bba2-4ef1-a197-53f46b6df4a5/SWTM-2088_Atlassian-Git-Cheatsheet.pdf)

# git-cheat-sheet
![git](./git-cheat-sheet.png)


# git 工作原理
![git](./git-status.png)
```
・Remote：远程仓库，托管代码的服务器
・Repository：仓库区（或版本库），其中HEAD指向最新放入仓库的版本
・Index／Stage：暂存区（或索引区），用于临时存放你的改动，事实上它只是一个文件，保存即将提交到文件列表信息
・Workspace：工作区，就是你平时存放项目代码的地方
```
#### １．具体例：下图中的四条命令在「工作区」、「暂存区」、「仓库区」之间复制文件。
![git](./basic-usage.svg.png)
```
・(提交) git add files： 把当前文件放入暂存区域。
・(提交) git commit： 给暂存区域生成快照并提交。
・(取出) git reset -- files： 用来撤销最后一次git add files，你也可以用git reset 撤销所有暂存区域文件。
・(取出) git checkout -- files： 把文件从暂存区域复制到工作目录，用来丢弃本地修改。
```
 #### ２．也可以跳过「暂存区」直接从「仓库区」取出文件或者直接提交代码。
![git](./basic-usage-2.svg.png)
```
・(提交) git commit -a： 相当于运行 git add 把工作区下的所有文件加入「暂存区」再运行git commit.
・(取出) git checkout HEAD -- files： 回滚到复制最后一次提交。
```



# git 常用命令

> git設定
<details>
<summary>git config</summary>

|コマンド|説明|
|---|---|
|`git --version`★                        |gitバージョンを表示|
|`git config --list`                      |設定一覧を表示|
|`git config --global user.name <name>`   |コミット操作に付加されるあなたの<font color="Blue">名前</font>を設定|
|`git config --global user.email <email>` |コミット操作に付加されるあなたの<font color="Blue">メールアドレス</font>を設定|
|`git config --global color.ui auto`      |デフォルトでは color.ui は auto に設定|
|`git config --global alias.<alias-name> <git-command>`<br>例：<br>&nbsp;git config --global alias.co checkout<br>&nbsp;git config --global alias.br branch<br>&nbsp;git config --global alias.ci commit<br>&nbsp;git config --global alias.st status<br>  |コマンドのショットキー、configファイルは下記のように<br>[alias]<br>&nbsp;co = checkout<br>&nbsp;br = branch<br>&nbsp;ci = commit<br>&nbsp;st = status|
|`--local`                                |ローカルの構成ファイル<br>個別Gitリポジトリ <font color="Blue">.git/config</font>に保存される|
|`--global`                               |ユーザーレベルの構成ファイル、ユーザホームに保存される<br>・UNIXの場合は <font color="Blue">~/.gitconfig</font>に保存される<br>・Windowsの場合は <font color="Blue">C:\Users\<ユーザー名>\.gitconfig</font>に保存される|
|`--system`                               |システムレベルの構成ファイル<br>・UNIXの場合は <font color="Blue">/etc/gitconfig</font>に保存される<br>・Windowsの場合は <font color="Blue">C:\ProgramData\Git\config</font>に保存される|
</details>

<details>
<summary>.gitignore</summary>

- ホームディレクトリで構わないので、ファイルは自分で作成する必要がある。
- `git config --global core.excludesFile ~/.gitignore` 場所指定

|パターン|一致する例|説明|
|---|---|---|
|`*.log`                  |debug.log<br>logs/debug.log                       |アスタリスクは、0 個以上の文字に一致するワイルドカードです|
|`*.log  !important.log`  |debug.log<br>but no<br>important.log              |感嘆符をパターンの先頭に追加すると、パターンを否定します。ファイルが、あるパターンと一致するが、ファイルの後半で定義済みの否定パターンとも一致する場合、そのファイルは無視されません|
|`debug?.log`             |debug0.log<br>debugg.log<br>but not<br>debug10.log|疑問符は正確に 1 文字に一致します|
|`debug[0-9].log`         |debug0.log<br>debug1.log<br>but not<br>debug10.log|角括弧を使用して、指定した範囲の 1 文字を照合することもできます|
|`debug[a-z].log`         |debuga.log<br>debugb.log<br>but not<br>debug1.log |範囲は数値またはアルファベットです|
</details>



> リポジトリの作成
<details>
<summary>git init</summary>

|コマンド|説明|
|---|---|
|`git init`★                             |現在のディレクトリをリポジトリに変換、.git サブディレクトリが追加される|
|`git init <directory>`                   |指定したディレクトリにリポジトリを作成、.git サブディレクトリが追加される|
|`git init --bare`                        |<font color="Blue">ベアリポジトリ</font>、ファイルを持たないリポジトリを作成、ファイルの編集や変更はできない|
|`git init --template=<template>`         |＜template＞からファイルをコピーし、新しい Gitリポジトリを作成|
</details>

<details>
<summary>git clone</summary>
 
- git clone コマンドを使用してリポジトリをクローンすると、クローンされたリポジトリをポイントバックする origin という名称のリモート接続が自動的に作成されます。

|コマンド|説明|
|---|---|
|`git clone <url>`★                     |現在のディレクトリでリポジトリをコピー作成|
|`git clone <url> <directory>`           |指定したローカルディレクトリでリポジトリをコピー作成|
|`git clone --branch <branch> <url>`     |リモートの HEADが指すブランチ(通常は mainブランチ)の代わりに、特定のブランチを指定|
|`git clone --branch <tag> <url>`        |特定のタグを指定しても同じ操作が可能|
|`git clone --bare`                       |git init --bareと同様にベアリポジトリとなり、ファイルの実態が持たない|
|`git clone --template=<template> <url>` |リポジトリをクローンして、指定した＜template＞のテンプレートを適用|
</details>



> 変更の作成
<details>
<summary>git status</summary>

|コマンド|説明|
|---|---|
|`git status`                 |コミット済みの履歴情報は含まれないため、git logを使う必要がある|
|`git status -s`              |例：<br>?? xxxx.txt　# ??= Untracked<br>A xxxx.txt　# A= added<br>M xxxx.txt　# M= Modified<br>コミットされると表示されなくなる|
</details>

<details>
<summary>git diff</summary>

|コマンド|説明|
|---|---|
|`git diff`                          |まだステージされていないファイルの差分を表示します|
|`git diff --staged`                 |ステージングと最後のファイルバージョンとの差分を表示します|
|`git diff --cached`                 |git addした後に、インデックスと最新のコミットとの変更点|
|`git diff HEAD^`                    |git commitした後に、コミットした箇所を表示、最新のコミットと最新のコミットのひとつ前の差分|
|`git diff HEAD..origin/ブランチ名`   |git pullする前に、ローカルの最新コミットと pull先のリモートリポジトリとの変更点|
|`git diff origin/ブランチ名..HEAD`   |git pushする前に、git commitした後にリモートリポジトリとこれから push したい箇所の変更点|
|`git diff ブランチA..ブランチB`      |ブランチ同士を比較する、Pull Requestを送る前に、自分が作ったブランチとマスタとの変更点|
</details>

<details>
<summary>git add</summary>

|コマンド|説明|
|---|---|
|`git add .`★                |すべての変更をステージして次回のコミット対象|
|`git add <file>`             |指定したファイルの変更をステージして次回のコミット対象|
|`git add -f <file>`          |無視されたファイルを強制的にコミット対象にする|
</details>

<details>
<summary>git rm</summary>

|コマンド|説明|
|---|---|
|`git rm <file>`              |ステージングと作業ディレクトリから物理削除、コミットされるまでgit reset HEADで取り消せる|
|`git rm --cached <file>`     |リポジトリから論理削除、作業ディレクトリに実ファイルは残る|
</details>

<details>
<summary>git commit</summary>

|コマンド|説明|
|---|---|
|`git commit -m "<message>" `★|テキストエディターは起動せず、ステージされたスナップショットを即座コミット|
|`git commit -a`               |作業ディレクトリにおけるすべての変更のスナップショットをコミット|
|`git commit -am "<message>" ` |-a と -m を組み合わせたコマンド。この組み合わせではすべての変更をコミット|
|`git commit --amend`          |新しいコミットを作成する代わりに、ステージした変更が直前のコミットに追加される|
</details>



> 履歴の確認
<details>
<summary>git log</summary>

- 参考：　[高度な Git ログ](https://www.atlassian.com/ja/git/tutorials/git-log)

|コマンド|説明|
|---|---|
|`git log`                                       |コミット済みのスナップショットを表示|
|`git log --oneline`★                           |各コミットを 1 行にまとめる、コミット一覧を表示|
|`git log --graph --oneline --decorate`          |--graph オプションは、コミット履歴のブランチ構造を表す、一般的に、--oneline および --decorate コマンドと組み合わせて使用され|
|`git log -3`                                    |git log -3 表示するコミット数は 3|
|`git log --after="2014-7-1"`                    |2014 年 7 月 1 日以降に作成されたコミットのみを表示|
|`git log --after="2014-7-1" --before="2014-7-4"`|2014 年 7 月 1 日と 2014 年 7 月 4 日の間|
|`git log --stat`                                |通常の git log 情報に加えて、改変されたファイルおよびその中での追加行数と削除行数を増減数で表示|
|`git log -p`                                    |各コミットを表すパッチを表示、各コミットの完全な差分を表示。プロジェクト履歴で取得可能な最も詳細なビュー|
|`git log --author= <pattern>`   |Search for commits by a particular author.|
|`git log --grep=<pattern>`      |Search for commits with a commit message that matches <pattern>.|
|`git log <since>..<until>`      |Show commits that occur between <since> and <until>. Args can be a commit ID, branch name, HEAD, or any other kind of revision reference.|
|`git log -- <file>`             |指定されたファイルを含むコミットのみを表示|
|`git log --follow [file]`       |名前の変更を含む指定したファイルのバージョン履歴の一覧を表示します|
|`git log --graph --decorate`    |--graph フラグを指定すると、コミットメッセージの左側にテキストベースのコミットの図が描画される<br>--decorate はブランチの名前または表示されるコミットのタグを追加|
</details>

<details>
<summary>git show</summary>

|コマンド|説明|
|---|---|
|`git show <コミット番号>`                       |指定されたコミットのメタ情報と変更内容を出力します|
</details>



> 分支与标签
<details>
<summary>git branch</summary>

|コマンド|説明|
|---|---|
|`git branch`                      |ローカルリポジトリ内のブランチを一覧表示|
|`git branch -r`                   |リモートリポジトリ内のブランチを一覧表示|
|`git branch -a`★                 |すべてのブランチを一覧表示|
|`git branch <branch>`             |新規ブランチを作成、作成された新規ブランチはチェックアウトされない|
|`git branch -d <branch>`          |指定したブランチを削除|
|`git branch -D <branch>`          |指定したブランチにマージされていない変更が残っていたとしても強制削除|
|`git branch -m <branch>`          |現在のブランチの名前を<branch>に変更|
</details>

<details>
<summary>git tag</summary>

|コマンド|説明|
|---|---|
|`git tag`★                       |タグ一覧|
|`git tag -a <tag>`                |指定した新しい注釈付きタグを作成|
|`git tag -a <tag> -m "<message>"` |指定した新しい注釈付きタグを即座に作成|
|`git tag -d <tag>`                |指定したタグを削除|
|`git show <tag>`                  |指定したタグの内容を表示|
</details>



> チェックアウト
<details>
<summary>git checkout</summary>

- git checkout コマンドは、git branch コマンドによって作成されたブランチ間を移動するコマンドです
- ブランチの作成、ブランチの切り替え、リモート・ブランチのチェックアウトに使用
- リモートブランチをチェックアウトするには、最初にブランチのコンテンツをフェッチ`git fetch --all`する必要があります。
- git checkout コマンドは、git clone と時折混同されることがあります。2 つのコマンドの違いは、git clone ではコードがリモート リポジトリからフェッチされるのに対し、git checkout ではローカル システムの既存コードのバージョンが切り替えられる点です。

|コマンド|説明|
|---|---|
|`git checkout -b <branch>`     |ブランチを新規作成&チェックアウト|
|`git checkout <branch>`        |指定ブランチをチェックアウト|
|`git checkout <tag>`           |指定タグをチェックアウト|
|`git checkout .`               |最新チェックアウト|
|`git checkout ＜remotebranch＞`|リモートブランチをチェックアウトするには、最初にブランチのコンテンツをフェッチ`git fetch --all`する必要あり|
</details>



> マージ
<details>
<summary>git merge</summary>

|コマンド|説明|
|---|---|
|`git merge ＜branch＞`    |指定した <branch> を現在のブランチにマージ|
|`git merge origin/master` |指定した リモートmasterブランチ を現在のブランチにマージ|
```
例：
git checkout -b new-feature main  #new-featureに切り替え
git add <file>　　　　　　　　　　　#new-featureに対して任意修正
git commit -m "Finish a feature"  #コミット
git checkout main      　　　　　　#mainに切り替え
git merge new-feature　　　　　　　#mainにマージ
git branch -d new-feature　　　　  #new-feature削除
```
</details>


<details>
<summary>git rebase</summary>

- Git には、ブランチを統合するための方法がmergeとrebaseの２つあります。rebaseは、作業が完了したブランチを分岐元のブランチにくっつける時に使う機能です。
- mergeはコミットが追加されるだけなので、もし失敗した場合はresetを使って元に戻すことができます。
- しかし、rebaseはコミットが改変されてしまうので、バックアップを取っておかないと、取り返しのつかないことになってしまうかも知れません...

|コマンド|説明|
|---|---|
|`git rebase -i <base>`   |古いコミットや複数のコミットの変更、 直前のコミットを変更するには`git commit --amend`|
</details>



> 远程操作
<details>
<summary>git remote</summary>

- git clone コマンドを使用してリポジトリをクローンすると、クローンされたリポジトリはorigin という名称のリモート接続が自動的に作成<br>
- `.git/config` ファイルを直接編集することもできる

|コマンド|説明|
|---|---|
|`git remote -v`★                        |リモート接続の一覧を表示| 
|`git remote add <name> <url>`            |リモートリポジトリへの接続を追加  例：`git remote add john http://dev.example.com/john.git`| 
|`git remote rm <name>`                   |リモートリポジトリへの接続を削除|
|`git remote rename <old-name> <new-name>`|リモート接続名称変更|
</details>

<details>
<summary>git fetch</summary>

- git fetchは、リモートリポジトリの変更状況をローカルリポジトリにダウンロードしますが、現在の作業ディレクトリには変更を加えません。<br>
- ローカルのブランチにマージされないため、作業中に中断を引き起こすことなく、リモートリポジトリの変更を確認できることが利点です。

|コマンド|説明|
|---|---|
|`git fetch <remote>`                     |リモートリポジトリからフェッチ、統合せず|
|`git fetch <remote> <branch>`            |特定ブランチと同期する<br>例：`git fetch origin HEAD`|
|`git fetch --all`                        |登録されたリモートとブランチをすべてフェッチする|
</details>

<details>
<summary>git pull</summary>

- git pullは git における svn update に相当すると考えられます。このコマンドは、ローカル リポジトリを中央リポジトリに同期する簡便な方法です
- git pullは、リモートリポジトリから最新の変更を取得するところまではgit fetchと同様ですが、さらに現在のブランチに自動的にmerge（マージ）する、git fetchと同時にgit mergeを実施する
- `--rebase` オプションは、不要なマージ コミットを防止することによって直線的な履歴を確保するために使用できます。
- `git config --global branch.autosetuprebase always` 実行すると、すべての git pull コマンドで統合の際に git rebase が使用される

|コマンド|説明|
|---|---|
|`git pull origin`★                      |git fetch origin HEAD および git merge HEAD に相当|
|`git pull <remote>`                      |指定したリモートにおけるコピーをフェッチして、それをローカルのコピーに即時マージ
|`git pull <remote> <branch>`             |指定したリモートにおけるコピーをフェッチして、それをローカルのコピーに即時マージ
|`git pull --rebase <remote>`             |プルと同じく、git mergeを使用してリモート ブランチをローカル ブランチと統合するのではなく、git rebaseを使用|
</details>

<details>
<summary>git push</summary>

|コマンド|説明|
|---|---|
|`git push origin master`★             |リモートブランチmasterにプッシュ|
|`git push <remote> <branch>`           |リモートブランチにプッシュ|
|`git push <remote> <tag>`              |ブランチと似ている。タグは明示的に渡す必要があり|
|`git push --tag`                       |すべてのタグをアップロード|
</details>



> 撤销
<details>
<summary>git reset</summary>

- コミット履歴消える、指定したコミットまで戻る。
- 現在のブランチの最新のコミットから、指定したコミットの上までをごっそり削除する超強力なコマンドです。すなわち、指定したコミットまでコミット履歴を遡るということです
- 複数人の共同開発レポジトリでは使わない
- git resetには３つの重要なオプションがあります。「–soft」「–mixed」「–hard」です。

```
オプション	　　　　　ステージ前ファイル（git add前）	インデックスされたファイル（git add後、commit前）	未追跡（untracked）
–soft	　　　　　　　　残る	　　　　　　　　　　　　　　残る	　　　　　　　　　　　　　　　　　　　　　　　残る
–mixed（デフォルト）	残る	　　　　　　　　　　　　　　削除	　　　　　　　　　　　　　　　　　　　　　　　残る
–hard	　　　　　　　　削除	　　　　　　　　　　　　　　削除	　　　　　　　　　　　　　　　　　　　　　　　残る
```

```
#コミット履歴（A〜D）
A---B---C---D
          main

#コミットDの作業を打ち消す
$ git reset C
A---B---C
       main
```

|コマンド|説明|
|---|---|
|`git reset <コミット番号>`|現在のコミットから後戻りする、プロジェクト履歴から削除するため、公開済み履歴の操作は厳禁|
|`git reset HEAD^`        |現在コミットの1回分前に戻す|
|`git reset HEAD^^`       |現在コミットの2回分前に戻す、実質的には直近二つのスナップショットをプロジェクト履歴から削除する|
</details>



<details>
<summary>git revert</summary>

- コミット履歴が消えない、指定したコミットを打ち消した新しいコミットを作成する。
- 現在編集中（git add前、git commit前）のファイルはrevertできない
  
```
#コミット履歴（A〜D）
A---B---C---D
          main

#コミットDの作業を打ち消す
$ git revert D
A---B---C---D---F
              main
```

```
#コミット履歴（A〜D）
A---B---C---D
          master
#コミットBの作業を打ち消す
$ git revert B
A---B---C---D---D'
              master
「git revert B」を実行します。すると、コミットBの編集内容を削除した、状態の新しいコミットD’が生成されます。コミット履歴の中でコミットBが残るのがポイントです。
```

|コマンド|説明|
|---|---|
|`git revert <コミット番号>`             |履歴における任意の時点でのコミットをターゲットにできる、履歴として追加される形|
|`git revert <コミット番号> --no-edit`★　|エディタを起動しない|
</details>
