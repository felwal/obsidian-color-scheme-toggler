import { Plugin } from "obsidian";

export default class ColorSchemeTogglerPlugin extends Plugin {
  COLOR_SCHEME_DARK = "obsidian";
  COLOR_SCHEME_LIGHT = "moonstone";

  async onload() {
    console.log("loading plugin");

    this.loadCommands();
  }

  onunload() {
    console.log("unloading plugin");
  }

  loadCommands() {
    this.addCommand({
      id: "toggle-color-scheme",
      name: "Toggle color scheme",
      callback: () => {
        this.toggleColorScheme();
      }
    });
  }

  toggleColorScheme() {
    this.app.changeTheme(this.getInvertedColorScheme());
  }

  getInvertedColorScheme() {
    return this.getColorScheme() === this.COLOR_SCHEME_LIGHT ? this.COLOR_SCHEME_DARK : this.COLOR_SCHEME_LIGHT;
  }

  getColorScheme() {
    return this.app.vault.getConfig("theme");
  }
}
