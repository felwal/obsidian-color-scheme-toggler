import { App, Plugin, PluginSettingTab } from "obsidian";

interface ColorSchemeTogglerPluginSettings {
  mySetting: string;
}

const DEFAULT_SETTINGS: ColorSchemeTogglerPluginSettings = {
  mySetting: "",
}

export default class ColorSchemeTogglerPlugin extends Plugin {
  settings: ColorSchemeTogglerPluginSettings;

  async onload() {
    console.log("loading plugin");

    await this.loadSettings();
    this.loadRibbon();
    this.loadCommands();

    this.addSettingTab(new ColorSchemeTogglerSettingTab(this.app, this));
  }

  onunload() {
    console.log("unloading plugin");
  }

  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }

  loadRibbon() {
  }

  loadCommands() {
  }
}

class ColorSchemeTogglerSettingTab extends PluginSettingTab {
  plugin: ColorSchemeTogglerPlugin;

  constructor(app: App, plugin: ColorSchemeTogglerPlugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display(): void {
    const { containerEl } = this;

    containerEl.empty();

    containerEl.createEl("h2", { text: "General Settings" });
  }
}
