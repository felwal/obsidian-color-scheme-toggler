import { Plugin } from "obsidian";

export default class ColorSchemeTogglerPlugin extends Plugin {
  COLOR_SCHEME_DARK = "obsidian";
  COLOR_SCHEME_LIGHT = "moonstone";
  COLOR_SCHEME_SYSTEM = "system";

  async onload() {
    console.log("loading plugin");

    this.refreshColorScheme();
    this.loadCommands();
  }

  onunload() {
    console.log("unloading plugin");
  }

  loadCommands() {
    this.addCommand({
      id: "refresh-color-scheme",
      name: "Refresh color scheme",
      callback: () => {
        this.refreshColorScheme();
      }
    });

    this.addCommand({
      id: "toggle-color-scheme",
      name: "Toggle color scheme",
      callback: () => {
        this.toggleColorScheme();
      }
    });

    this.addCommand({
      id: "adapt-to-system",
      name: "Use system color scheme",
      callback: () => {
        this.adaptToSystem();
      }
    });
  }

  adaptToSystem() {
    this.app.changeTheme(this.COLOR_SCHEME_SYSTEM);
  }

  refreshColorScheme() {
    const current = this.getColorScheme();
    const inverted = this.getInvertedColorScheme();

    this.app.changeTheme(inverted);
    this.app.changeTheme(current);
  }

  toggleColorScheme() {
    this.app.changeTheme(this.getInvertedColorScheme());
  }

  getInvertedColorScheme() {
    return this.getColorScheme() === this.COLOR_SCHEME_LIGHT
      ? this.COLOR_SCHEME_DARK
      : this.COLOR_SCHEME_LIGHT;
  }

  getColorScheme() {
    return this.app.vault.getConfig("theme");
  }
}
