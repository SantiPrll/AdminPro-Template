import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NopagefoundComponent } from "./nopagefound/nopagefound.component";
import { HeaderComponent } from "./header/header.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { BreadcrumsComponent } from "./breadcrums/breadcrums.component";
import { RouterModule } from "../../../node_modules/@angular/router";

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    NopagefoundComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumsComponent
  ],
  exports: [
    NopagefoundComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumsComponent
  ]
})
export class SharedModule {}
