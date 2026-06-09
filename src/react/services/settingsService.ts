import { photoService } from "./photoService";
import { DEFAULT_SETTINGS, type AppSettings } from "../config/default-settings";

export const settingsService = {
  getSettings() {
    return photoService.loadSettingsAsync();
  },

  async saveSettings(settings: AppSettings) {
    const current = (await photoService.loadSettingsAsync()) ?? {};
    const merged = { ...current, ...settings };
    const result = await photoService.saveSettings(merged);

    const alwaysOnTop = merged.always_on_top;
    if (alwaysOnTop !== undefined) {
      await photoService.setAlwaysOnTop(Boolean(alwaysOnTop));
    }

    return result;
  },

  saveWindowSettings(windowSettings: NonNullable<AppSettings["window"]>) {
    return photoService.saveWindowSettings(windowSettings);
  },

  deleteSettings() {
    return photoService.deleteSettings();
  },

  async resetSettingsToDefaults() {
    await photoService.saveSettings(DEFAULT_SETTINGS);
    await photoService.setAlwaysOnTop(DEFAULT_SETTINGS.always_on_top);
  },
};
