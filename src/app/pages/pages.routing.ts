import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { AccountSettingComponent } from "./account-setting/account-setting.component";
import { PromiseComponent } from "./promise/promise.component";
import { ObservableComponent } from "./observable/observable.component";

const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      {
        path: "dashboard",
        component: DashboardComponent,
        data: { title: "Dashboard" }
      },
      {
        path: "progress",
        component: ProgressComponent,
        data: { title: "Progress" }
      },
      {
        path: "graph1",
        component: Graficas1Component,
        data: { title: "Graphs" }
      },
      {
        path: "account-setting",
        component: AccountSettingComponent,
        data: { title: "Account Settings" }
      },
      {
        path: "promise",
        component: PromiseComponent,
        data: { title: "Promises" }
      },
      {
        path: "observable",
        component: ObservableComponent,
        data: { title: "Observables" }
      },
      { path: "", redirectTo: "dashboard", pathMatch: "full" }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
