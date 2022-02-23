# reactBasic
## npmコマンド
### `npm start`  
- ローカルサーバを起動  
- ホットリロード（ファイル保存で自動更新）に対応
### `npm run build`
- 本番用ファイルを生成してbuildディレクトリに出力
- srcとpublicのファイルを1つにまとめる（バンドル）

## 環境構築
### create-react-app
`$ npx create-react-app react-basic`  
### nodebrewインストール
1. `$ brew install nodebrew`  
npmもインストールされる  
2. インストール可能なnodebrewのバージョン確認  
`$ nodebrew ls-remote`  
※ エラーが出る場合  
`$ nodebrew setup`  
3. 安定板インストール  
`nodebrew install-binary stable`  
4. 使用しているバージョン確認（use）  
`$ nodebrew ls`  
5. 最新版を指定  
`$ nodebrew use [バージョン]`
### nodeの環境パスを通す
1. 使用しているSHELLの確認
`$ echo $SHELL`  
2. パスを通す  
- zshの場合  
`$ echo 'export PATH=$HOME/ .nodebrew/current/bin:$PATH' >> ~/.zprofile`  
- bashの場合  
`$ echo 'export PATH=$HOME/ .nodebrew/current/bin:$PATH' >> ~/.bash_profile`  
3. ターミナルの再起動で変更を反映

### 参考URL
- YouTubu #03 新・日本一わかりやすいReact入門【基礎編】create-react-appで環境構築   
https://www.youtube.com/watch?v=Ym4If5W9SS0

### React Developer Tools
https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi/related?hl=ja
#### 拡張機能を管理
- 「ファイルのURLへのアクセスを許可する」をON  

- bashの場合  UR
- bashの場合  
