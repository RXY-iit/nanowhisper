<p align="center">
  <img src="src-tauri/logo/appicon.png" alt="NanoWhisper" width="128" height="128">
</p>

<h1 align="center">NanoWhisper</h1>

<p align="center">
  <strong>純粋な音声文字起こし。それだけ。</strong>
</p>

<p align="center">
  <a href="https://github.com/jicaiinc/nanowhisper/releases/latest"><img alt="Latest Release" src="https://img.shields.io/github/v/release/jicaiinc/nanowhisper?style=flat-square&color=1c1c1e"></a>
  <a href="LICENSE"><img alt="License" src="https://img.shields.io/github/license/jicaiinc/nanowhisper?style=flat-square&color=1c1c1e&cacheSeconds=1"></a>
  <img alt="Platform" src="https://img.shields.io/badge/platform-macOS%20%7C%20Windows%20%7C%20Linux-333?style=flat-square">
</p>

<p align="center">
  <a href="https://github.com/jicaiinc/nanowhisper/releases/latest">ダウンロード</a>
</p>

<p align="center">
  <a href="README.md">English</a> | <a href="README.zh.md">简体中文</a> | 日本語
</p>

---

NanoWhisper は、極限までシンプルにしたデスクトップ音声入力アプリです。ショートカットを押して話し、文字起こし結果を現在のアプリへ自動で貼り付けます。

OpenAI Whisper API と Google Gemini API を利用し、Tauri v2 で構築されています。

## 使い方

1. macOS では `右 ⌘`、Windows では `右 Ctrl` を押します（カスタマイズ可能）
2. 話します
3. もう一度押して停止すると、文字起こし結果がすぐに貼り付けられます

## 機能

- **ワンショートカット** — グローバルホットキーだけで録音の開始と停止ができます
- **自動貼り付け** — 文字起こし結果をそのままカーソル位置へ貼り付けます
- **翻訳モード** — デフォルトショートカットは `Ctrl+T`。文字起こし結果と翻訳結果を改行付きでまとめて出力します
- **修正モード** — デフォルトショートカットは `Ctrl+O`。選択中のテキストを音声指示で書き換え、元の位置に置き換えます
- **波形オーバーレイ** — 録音中にミニマルな常時最前面オーバーレイを表示します
- **履歴** — 音声ファイル付きで履歴をローカル保存し、再試行できます
- **システムトレイ** — バックグラウンドで静かに常駐します

## v0.1.26 の新機能

- `翻訳モード` を追加。デフォルトショートカットは `Ctrl+T`
- `修正モード` を追加。デフォルトショートカットは `Ctrl+O`
- 日本語版 README を追加

## ソースからビルド

前提条件: [Node.js](https://nodejs.org/) と [Rust](https://rustup.rs/)

```bash
git clone https://github.com/jicaiinc/nanowhisper.git
cd nanowhisper
npm install
npm run tauri dev
```

## ライセンス

[Apache License 2.0](LICENSE)

---

<p align="center">
  Pure Whisper. Nothing else.<br>
  <sub>&copy; 2025 <a href="https://github.com/jicaiinc">Jicai, Inc.</a></sub>
</p>
