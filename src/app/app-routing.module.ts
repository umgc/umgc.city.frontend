import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import {
  HomeComponent,
  SigninComponent,
  SignupComponent,
  HelpComponent,
} from "./features";
import { PasadenaComponent } from "./features";
import { CanLoadAdminSection } from "./services/can-load-admin.service";
import { QuickReferenceComponent } from './features/pasadena/quick-reference/quick-reference.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "signin",
    component: SigninComponent,
  },
  {
    path: "signup",
    component: SignupComponent,
  },
  {
    path: "help",
    component: HelpComponent,
  },
  {
    path: "pasadena",
    component: PasadenaComponent,
  },
  {
    path:"quickreference",
    component: QuickReferenceComponent,
  },
  {
    path: "authorized",
    loadChildren: () =>
      import("./features/authorized/authorized.module").then(
        (m) => m.AuthorizedUsageModule
      ),
    canLoad: [CanLoadAdminSection],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
