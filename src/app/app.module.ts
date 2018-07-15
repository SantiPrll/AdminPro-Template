import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app.routing";
import { PagesModule } from "./pages/pages.module";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./login/register.component";
import { ServiceModule } from "./services/service.module";

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent],
  imports: [
    BrowserModule,
    FormsModule,
    PagesModule,
    AppRoutingModule,
    ServiceModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
