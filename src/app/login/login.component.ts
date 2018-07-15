import { Component, OnInit } from "@angular/core";
import { Router } from "../../../node_modules/@angular/router";

declare function initPlugins();
@Component({
  selector: "app-login",
  templateUrl: "login.component.html",
  styleUrls: ["login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(public _router: Router) {}

  ngOnInit() {
    initPlugins();
  }

  login() {
    this._router.navigate(["/dashboard"]);
  }
}
