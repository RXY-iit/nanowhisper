export interface HistoryEntry {
  id: number;
  text: string;
  model: string;
  timestamp: number;
  duration_ms: number | null;
  audio_path: string | null;
  mode: string;
  context_text: string | null;
}

export interface AppSettings {
  provider: string;
  api_key: string;
  gemini_api_key: string;
  model: string;
  language: string;
  shortcut: string;
  translate_shortcut: string;
  modify_shortcut: string;
  translate_target_language: string;
  sound_enabled: boolean;
  native_hotkey_enabled: boolean;
  overlay_rx: number | null;
  overlay_ry: number | null;
}
