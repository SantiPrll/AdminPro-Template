import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class SettingsService {
  public settings: Setting = {
    urlCss: "assets/css/colors/default.css",
    theme: "default"
  };

  constructor() {
    this.loadSettings();
  }

  public saveSettings() {
    localStorage.setItem("settings", JSON.stringify(this.settings));
  }

  public loadSettings() {
    const setting = localStorage.getItem("settings");

    if (setting) {
      this.settings = JSON.parse(setting);
    }

    this.themeApply(this.settings.theme);
  }

  public themeApply(theme: string) {
    const urlCss: string = `assets/css/colors/${theme}.css`;
    document.getElementById("theme").setAttribute("href", urlCss);

    this.settings.urlCss = urlCss;
    this.settings.theme = theme;
    this.saveSettings();
  }
}

interface Setting {
  urlCss: string;
  theme: string;
}
