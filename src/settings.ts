import { App, PluginSettingTab, Setting } from "obsidian";
import ColorSchemeTogglerPlugin from "./main";

export interface ColorSchemeTogglerPluginSettings {
  refreshOnStartup: boolean;
}

export const DEFAULT_SETTINGS: ColorSchemeTogglerPluginSettings = {
  refreshOnStartup: false
}

export class ColorSchemeTogglerSettingTab extends PluginSettingTab {
  plugin: ColorSchemeTogglerPlugin;

  constructor(app: App, plugin: ColorSchemeTogglerPlugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display(): void {
    const {containerEl} = this;

    containerEl.empty();
    containerEl.createEl("h1", {text: "Color Scheme Toggler"});

    new Setting(containerEl)
      .setName("Refresh color scheme on startup")
      .setDesc("Fixes Android status bar color")
      .addToggle(toggle => { toggle
        .setValue(this.plugin.settings.refreshOnStartup)
        .onChange(async (value) => {
          this.plugin.settings.refreshOnStartup = value;
          await this.plugin.saveSettings();
        });
      });
  }
}
