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
import { ChatComponent } from "./features/chat/chat.component";

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
    path: "chat-demo",
    component: ChatComponent,
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

// const routes: Routes = [
//   {
//     path: '',
//     component: PasadenaLayoutComponent,
//     children: [
//       { path: '', component: LandingPageComponent, pathMatch: 'full'},
//     ]
//   },
//   {
//     path: '',
//     component: AuthorizedLayoutComponent,
//     children: [
//       { path: 'home', component: HomeComponent},
//       { path: 'signin', component: SignInComponent },
//       { path: 'signup', component: SignUpComponent},
//       { path: 'usecase/upload', component: UploadUsecaseComponent},
//       { path: 'help', component: HelpComponent},
//       { path: 'usecase/new', component: NewUsecaseComponent},
//       { path: 'welcome', component: WelcomeComponent}
//     ]
//   }

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
