import { Plugin } from "obsidian";

export default class ColorSchemeTogglerPlugin extends Plugin {
  async onload() {
    console.log("loading plugin");

    this.loadCommands();
  }

  onunload() {
    console.log("unloading plugin");
  }

  loadCommands() {
  }
}
