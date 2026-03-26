<p align="center">
  <img src="src-tauri/logo/appicon.png" alt="NanoWhisper" width="128" height="128">
</p>

<h1 align="center">NanoWhisper</h1>

<p align="center">
  <strong>Pure Whisper. Nothing else.</strong>
</p>

<p align="center">
  <a href="https://github.com/RXY-iit/nanowhisper/releases/latest"><img alt="Latest Release" src="https://img.shields.io/github/v/release/RXY-iit/nanowhisper?style=flat-square&color=1c1c1e"></a>
  <a href="LICENSE"><img alt="License" src="https://img.shields.io/github/license/RXY-iit/nanowhisper?style=flat-square&color=1c1c1e&cacheSeconds=1"></a>
  <img alt="Platform" src="https://img.shields.io/badge/platform-macOS%20%7C%20Windows%20%7C%20Linux-333?style=flat-square">
</p>

<p align="center">
  <a href="https://github.com/RXY-iit/nanowhisper/releases/latest">Download</a> · <a href="https://github.com/RXY-iit/nanowhisper/releases/tag/v0.1.27">v0.1.27 Release</a>
</p>

<p align="center">
  English | <a href="README.zh.md">简体中文</a> | <a href="README.ja.md">日本語</a>
</p>

---

NanoWhisper is a minimal desktop speech-to-text app. Press a shortcut, speak, and the transcribed text is auto-pasted into your active application. That's it.

Powered by OpenAI Whisper API and Google Gemini API. Built with Tauri v2.

## How It Works

1. Tap `Right ⌘` on macOS / `Right Ctrl` on Windows (customizable)
2. Speak
3. Tap again to stop — text is transcribed and pasted instantly

## Features

- **One Shortcut** — Global hotkey to start/stop recording. No UI to navigate.
- **Auto-Paste** — Transcribed text goes straight to your cursor. No copy needed.
- **Translate Mode** — Press `Ctrl+T` to record, then paste both the transcript and translated text with an automatic line break.
- **Modify Mode** — Press `Ctrl+O`, select existing text, press again, and replace the original selection with the rewritten result.
- **Waveform Overlay** — Minimal always-on-top visualizer while recording.
- **History** — All transcriptions saved locally with audio files for retry.
- **System Tray** — Runs quietly in the background.

## New in v0.1.27

- Added `Translate Mode` with default shortcut `Ctrl+T`
- Added `Modify Mode` with default shortcut `Ctrl+O`
- Added multilingual README support including Japanese

## Build from Source

Prerequisites: [Node.js](https://nodejs.org/) and [Rust](https://rustup.rs/).

```bash
git clone https://github.com/jicaiinc/nanowhisper.git
cd nanowhisper
npm install
npm run tauri dev
```

## License

[Apache License 2.0](LICENSE)

---

<p align="center">
  纯粹的语音转文字，仅此而已。<br>
  <sub>&copy; 2025 <a href="https://github.com/jicaiinc">Jicai, Inc.</a></sub>
</p>
