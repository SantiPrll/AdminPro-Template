import { Component, OnInit } from "@angular/core";
import { SettingsService } from "../../services/service.index";

@Component({
  selector: "app-account-setting",
  templateUrl: "account-setting.component.html",
  styles: []
})
export class AccountSettingComponent implements OnInit {
  constructor(private _settingsService: SettingsService) {}

  ngOnInit() {
    this.checkPlace();
  }

  changesColor(theme: string, link: any) {
    this._settingsService.themeApply(theme);
    this.checkApply(link);
  }

  checkApply(link: any) {
    const selectors: any = document.getElementsByClassName("selector");

    for (const element of selectors) {
      element.classList.remove("working");
    }

    link.classList.add("working");
  }

  checkPlace() {
    const selectors: any = document.getElementsByClassName("selector");

    for (const element of selectors) {
      if (
        element.getAttribute("data-theme") ===
        this._settingsService.settings.theme
      ) {
        element.classList.add("working");
        break;
      }
    }
  }
}
