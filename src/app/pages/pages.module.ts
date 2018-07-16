import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ChartsModule } from "ng2-charts";

import { SharedModule } from "../shared/shared.module";
import { PagesRoutingModule } from "./pages.routing";

import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProgressComponent } from "./progress/progress.component";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { IncrementComponent } from "../components/increment/increment.component";
import { GraphDoughnutComponent } from "../components/graph-doughnut/graph-doughnut.component";
import { AccountSettingComponent } from "./account-setting/account-setting.component";
import { PromiseComponent } from './promise/promise.component';
import { ObservableComponent } from './observable/observable.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    PagesRoutingModule,
    ChartsModule
  ],
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    AccountSettingComponent,
    IncrementComponent,
    GraphDoughnutComponent,
    PromiseComponent,
    ObservableComponent
  ],
  exports: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component
  ]
})
export class PagesModule {}
